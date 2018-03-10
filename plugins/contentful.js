const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: "xkipk5rzn6kp",
  accessToken: "fce2285ab273f22af7e8e70e4e365e5b0b76e25b2a30b7899558f07e2ca65da9"
}

// export `createClient` to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}