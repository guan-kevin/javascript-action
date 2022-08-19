const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Bye ${nameToGreet}!`);
  console.log(`/bye/again/index.js`);
} catch (error) {
  core.setFailed(error.message);
}
