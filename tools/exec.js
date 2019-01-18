import { exec as processExec } from 'child-process-promise';
import 'colors';

let executionOptions = {
  dryRun: false,
  verbose: false
};

const logWithPrefix = (prefix, message) => {
  console.log(
    message.toString().trim()
      .split('\n')
      .map((line) => `${prefix.grey} ${line}`)
      .join('\n')
  );
};

export const exec = (command, options = {}) => {
  let proc = processExec(command, options);
  if (!executionOptions.verbose) {
    return proc;
  }

  let title = options.title || command;
  let output = (data, type) => logWithPrefix(`[${title}] ${type}:`, data);

  return proc.progress(({stdout, stderr}) => {
    stdout.on('data', data => output(data, 'stdout'));
    stderr.on('data', data => output(data, 'stderr'));
  })
    .then(result => {
      logWithPrefix(`[${title}]`, 'Complete'.cyan);
      return result;
    });
};
