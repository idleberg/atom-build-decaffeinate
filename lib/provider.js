'use babel';

import { install } from 'atom-package-deps'
import { exec } from 'child_process';

// Package settings
import meta from '../package.json';
const notEligible = `**${meta.name}**: \`decaffeinate\` is not in your PATH`;

// This package depends on build, make sure it's installed
export function activate() {
  if (!atom.inSpecMode()) {
    install(meta.name)
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
      exec('which decaffeinate', function (error, stdout, stderr) {
          // No decaffeinate installed
        if (error !== null) {
          if (atom.inDevMode()) atom.notifications.addError(notEligible, { detail: error, dismissable: true });
          return false;
        }
        if (atom.inDevMode()) atom.notifications.addInfo(`**${meta.name}**`, { detail: stdout, dismissable: false });
      });

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
