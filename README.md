# ghost-gav/gav-gatsby

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed89a3c6-3514-4ec1-a746-ae1395701c65/deploy-status)](https://app.netlify.com/sites/ghost-gatsby-d8/deploys)
[![Pipeline Status](https://gitlab.com/ghost-gav/gav-gatsby/badges/production/pipeline.svg?style=flat-square)](https://gitlab.com/gvaught/gav-gatsby/commits/)

---

The live webapp can be viewed at the link below:
https://gavinvaught.com

## What

This project consists a living website built primarily in [React](https://reactjs.org) with [Gatsby.js](https://gatsby.org) as a framework to provide caching, SEO, and other various optimizations out-of-the box.  This also allows easy deployment to [Netlify's](https://netlify.com) CDN as the builds are triggered from Production branch commit hooks and hosting is free for "static" webpages and webapps.

Along with the React components and Gatsby.js configuration, the project includes basic [Gitlab CI](https://gitlab.com/ci) and Cypress automated testing integration.

The result is a robust webapp that is PWA-capable.

## Why

The main end-goal for the development of this particular integration is to be used as a personal portfolio and blog (and of course, the necessary functional contact form).  The blog will have RSS feed capabilities and the portfolio will serve examples or links to any relevant past projects.
