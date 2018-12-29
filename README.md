# plant.io
Production [![Build Status](https://travis-ci.org/macbubi/plantio.svg?branch=master)](https://travis-ci.org/macbubi/plantio)

Staging [![Build Status](https://travis-ci.org/macbubi/plantio.svg?branch=staging)](https://travis-ci.org/macbubi/plantio)

## Deployment & CI/CD
### Travis
[plant.io Travis Branches](https://travis-ci.org/macbubi/plantio/branches)

[Travis CLI installation](https://github.com/travis-ci/travis.rb#installation)
```
ruby -v (> 2.0.0)
gem install travis -v 1.8.9 --no-rdoc --no-ri
```

### Heroku
* [Heroku Staging](https://dashboard.heroku.com/apps/plantio-staging)
* [Heroku Production](https://dashboard.heroku.com/apps/plantio-production)

#### See Logs
```
heroku logs --tail -a=plantio-staging
```

### Database [mlab](https://mlab.com/home)
