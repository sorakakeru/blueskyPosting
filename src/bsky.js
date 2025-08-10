const { AtpAgent, RichText } = require('@atproto/api')
require('dotenv').config()

async function postToBsky(text) {
  const agent = new AtpAgent({ service: 'https://bsky.social' })
  await agent.login({
    identifier: process.env.BLUESKY_IDENTIFIER,
    password: process.env.BLUESKY_PASSWORD
  })

  const rt = new RichText({ text })
  await rt.detectFacets(agent)

  const postRecord = {
    $type: 'app.bsky.feed.post',
    text: rt.text,
    facets: rt.facets ?? [],
    createdAt: new Date().toISOString()
  }
  return agent.post(postRecord)
}

module.exports = { postToBsky }
