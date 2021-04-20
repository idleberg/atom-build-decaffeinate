import { configSchema, getConfig } from './config';
import { EventEmitter } from 'events';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import Logger from './log';
import meta from '../package.json';
import which from 'which';

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
        Logger.log('Always eligible');
        return true;
      }

      if (which.sync('decaffeinate', { nothrow: true })) {
        Logger.log('Build provider is eligible');
        return true;
      }

      Logger.error('Build provider isn\'t eligible');
      return false;
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

export function activate() {
  Logger.log('Activating package');

  // This package depends on build, make sure it's installed
  if (getConfig('manageDependencies') === true) {
    satisfyDependencies(meta.name);
  }
}

export function deactivate() {
  Logger.log('Deactivating package');
}
