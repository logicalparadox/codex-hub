---
  title: Customizing
  weight: 5
  render-file: false
---

## Site Wide Template Variables

Site-wide variables, or `locals` in the `codex.json` configuration file, make it easy to 
to deploy a site without customizing the template. Here are the currently support variables: 

    {
      "locals": {
        "title": "Codex Hub",
        "description": "Codex Hub is a GitHub friendly template for [Codex](http://codexjs.com) ..."
        "googleanalytics": "UA-XXXXXXXXX-X",
        "mixpanel": "xxxxx",
        "ghuser": "logicalparadox",
        "ghproject": "codex-hub",
        "ghbaseurl": "/codex-hub",
        "tweeturl": "http://alogicalparadox.com/codex-hub",
        "tweetvia": "jakeluer",
        "tweetrelated": "jakeluer",
        "twitterfollow": "jakeluer",
      },
    // ...

* **title** - The site title. Used on all pages for the `<title>` tag.
* **description** - The primary site description to show in the header. Will be parsed for Markdown.
* **googleanalytics** - The [Google Analytics](http://google.com/analytics) site id. Remove this line to disable google analytics.
* **maxpanel** - [MixPanel](http://mixpanel.com) analytics id. Remove this line to disable mixpanel integration.
* **ghuser** - GitHub user name is required. If project is part of an organization, use that instead.
* **ghproject** - Github project name is required.
* **ghbaseurl** - If you are hosting this site off of the root domain, such as the default gh-pages configuration,
use this to specify the folder structure. If being hosted at root of domain, leave as empty: `""`.
* **tweeturl** - The url to use for Tweet button.
* **tweetvia** - The `via` data variable for the tweet buttom.
* **tweetrelated** 0 The `related` data variable for the tweet buttonm will be recommended upon a successful tweet.
* **twitterfollow** - User to recommend in the `Follow @user` button. Remove to remove the button.

