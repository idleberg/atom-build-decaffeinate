'use babel';

import {exec} from 'child_process';

// Package settings
import meta from '../package.json';
const debug = atom.config.get(`${meta.name}.debug`);
const notEligible = `**${meta.name}**: \`decaffeinate\` is not in your PATH`;

// This package depends on build, make sure it's installed
require('atom-package-deps').install(meta.name);

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
          if (debug === true) atom.notifications.addError(notEligible, { detail: error, dismissable: true });
          return false;
        }
        if (debug === true) atom.notifications.addInfo(`**${meta.name}**`, { detail: stdout, dismissable: false });
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
