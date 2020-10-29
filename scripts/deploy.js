const ghpages = require('gh-pages')

ghpages.publish(
  '__sapper__/export',
  {
    branch: 'master',
    repo: 'https://github.com/sha-one/artisan-smiles.git',
    user: {
      name: 'sha-one',
      email: 'web@sccreative.co.uk'
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)
