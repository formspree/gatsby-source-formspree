## Description

The `gatsby-source-formspree` plugin uses Formspree's API to fetch form submissions. This allows Gatsby site creators to include user submissions in their website output. 

### Learning Resources (optional)

You can find out more about Formspree [here](https://formspree.io) and the Formspree API [here](https://help.formspree.io/hc/en-us/sections/360002930553-Plugins-and-API).

## How to install

To install it, in the root of your site run:

```
npm install --save gatsby-source-formspree
```

Then add the plugin to your `gatsby-config.js` file including your form ID and API key:

```
  {
    resolve: "gatsby-source-formspree",
    options: {
      form: "YOUR_FORM_ID",
      key: "YOUR_API_KEY",
    },
  },
```

You can obtain your form ID by creating a new form in the Formspree dashboard and then copying the 6 digit ID from the form's URL. See [Getting your form's hashid](https://help.formspree.io/hc/en-us/articles/360015130174-Getting-your-form-s-hashid-) in the Formspree help docs.

To create an API key, go into the new form's settings panel and enable the API. Then copy your read-only key and add it to the gatsby config. See [API Keys](https://help.formspree.io/hc/en-us/articles/360015231893-API-Keys) in the Formspree help docs.


## When do I use this plugin?

This plugin could be used any time you want to display user submitted content on your website. Here are some ideas:
* You could use it to show a list of people who have RSVP'd for an event
* You could create an online guest book for a wedding
* You could automatically update your company's team page. This would require a separate password-protected form where employees could upload an short bio and an image.
* You could create a full comment system. 

Each of these ideas could be coupled with a deploy hook to rebuild your site when a form is submitted.

## Examples of usage

This usually shows a code example showing how to include this plugin in a site's `config.js` file.

    code example

//See this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) on how to format code examples.

This section could also include before-and-after examples of data when the plugin is enabled, if applicable.

## How to query for data (source plugins only)

If this is a source plugin README, source plugins ought to allow people to query for data within their Gatsby site. Please include code examples to show how to query for data using your source plugin.

## How to run tests

## How to develop locally

## How to contribute

If you have unanswered questions, would like help with enhancing or debugging the plugin, it is nice to include instructions for people who want to contribute to your plugin.
Starter README template