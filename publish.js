const childProcess = require('child_process')
const path = require('path')
const { Publisher } = require('@pact-foundation/pact')

const exec = command =>
  childProcess
    .execSync(command)
    .toString()
    .trim()

// Usually, you would just use the CI env vars, but to allow these examples to run from
// local development machines, we'll fall back to the git command when the env vars aren't set.
// TODO: Update these for your particular CI server
const gitSha = process.env.TRAVIS_COMMIT || exec('git rev-parse HEAD || echo LOCAL_DEV')
const branch = process.env.TRAVIS_BRANCH || exec('git rev-parse --abbrev-ref HEAD || echo LOCAL_DEV')
const tag = process.env.DEP_ENV || 'no'
const opts = {
  pactFilesOrDirs: [path.resolve(process.cwd(), 'pact/pacts')],
  pactBroker: 'https://zumber.pactflow.io',
  pactBrokerToken: 'AhT3yO3pFlB6lZpWskVDcA', // don't commit this!
  consumerVersion: gitSha,
  tags: [branch, tag]
}

new Publisher(opts)
  .publishPacts()
  .then(() => {
    console.log('Pact contract publishing complete!')
    console.log('')
    console.log('Head over to https://zumber.pactflow.io to see your published contracts.')
  })
  .catch((e) => {
    console.log('Pact contract publishing failed: ', e)
  })
