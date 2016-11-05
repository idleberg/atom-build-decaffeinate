'use babel';

import { install } from 'atom-package-deps';
import { spawnSync } from 'child_process';

// Package settings
import meta from '../package.json';

// This package depends on build, make sure it's installed
export function activate() {
  if (!atom.inSpecMode()) {
    install(meta.name);
  }
}

export function provideBuilder() {
  return class DecaffeinateProvider {
    constructor(cwd) {
      this.cwd = cwd;
    }

    getNiceName() {
      return 'decaffeinate';
    }

    isEligible() {
      try {
        spawnSync('which decaffeinate');
      } catch (error) {
        if (atom.inDevMode()) atom.notifications.addError(meta.name, { detail: error, dismissable: true });
        return false;
      }

      return true;
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
