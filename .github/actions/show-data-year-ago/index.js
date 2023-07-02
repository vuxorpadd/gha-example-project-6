const core = require('@actions/core');
const exec = require('@actions/exec');

function index() {
    core.notice(`Hey ${core.getInput('first-name')} ${core.getInput('first-name')}!`);
    core.notice('Hello from show-data-year-ago action!');

    exec.exec('ls -la');
}

index();
