const core = require('@actions/core');
const exec = require('@actions/exec');

function index() {
    core.notice(`Hey ${core.getInput('first-name')} ${core.getInput('last-name')}!`);
    core.notice('Hello from show-data-year-ago action!');

    exec.exec('ls -la');

    const oneYearAgo = calculateOneYearAgo();

    core.setOutput('one-year-ago', oneYearAgo.toTimeString());
}

function calculateOneYearAgo() {
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

    return oneYearAgo;
}

index();
