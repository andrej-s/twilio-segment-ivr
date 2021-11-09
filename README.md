# Integrating the Twilio IVR and Segment

This repository is part of a blog post to demonstrate how to integrate [Twilio Flex](https://www.twilio.com/docs/flex) and [Segment](https://www.segment.com). It gives an overview how to implement personas, audiences, and routing based on customer data.

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.
Additionally, you will need the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) and the [Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started#).

Afterwards, install the dependencies by running `npm install`:

```bash
npm install
```

## Config

```bash
cp .env.example .env
```

Add the required variables as instructed in the blog post.

## Deploy

```bash
twilio serverless:deploy
```
