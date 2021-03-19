import { configSchema, getConfig } from './config';
import { EventEmitter } from 'events';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import { spawnSync } from 'child_process';
import { which } from './util';

// Package settings
import meta from '../package.json';

export { configSchema as config };

export function provideBuilder() {
  return class DecaffeinateProvider extends EventEmitter {
    constructor(cwd) {
      super();

      this.cwd = cwd;
    }

    getNiceName() {
      return 'decaffeinate';
    }

    isEligible() {
      if (getConfig('alwaysEligible') === true) {
        return true;
      }

      const cmd = spawnSync(which(), ['decaffeinate']);

      return !cmd?.stdout?.toString()
        ? false
        : true;
    }

    settings() {
      return [
        {
          name: 'decaffeinate',
          exec: 'decaffeinate',
          args: [ '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-b',
          atomCommandName: 'decaffeinate:convert'
        }
      ];
    }
  };
}

// This package depends on build, make sure it's installed
export function activate() {
  if (getConfig('manageDependencies') === true) {
    satisfyDependencies(meta.name);
  }
}
