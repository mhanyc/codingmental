---
author_name: "Zarina Mustapha"
author_url: http://ctl.columbia.edu/about/team/mustapha/
date: 2016-05-19
lede: "We moved CompilED to Hugo, a general-purpose static site generator, to test this framework's flexibility and durability to accommodate our blog's requirements and workflow. This post outlines how we converted CompilED from Movable Type, optimized it for accessibility, responsive design, and searchability, implemented lunr.js for search, and streamlined user experience."
poster: poster-rebuilding-compiled.jpg
tags: ["hugo","html5","accessibility","responsive design","structured data","microdata"]
title: "Rebuilding CompilED"
topics:
- Process
type: post
---

*"We can rebuild [it]. We have the technology."*  
— Oscar Goldman, *The Six Million Dollar Man*

Earlier in March we decided to move our previous blog to a different platform, with a fresh design in hope to breathe new life into it, and keep it going painlessly.

CompilED has been online since 2009 on the erstwhile gratis and open-source [Movable Type](https://en.wikipedia.org/wiki/Movable_Type) (MT), a weblog publishing system developed by the company Six Apart. Over the years, it became increasingly difficult to upgrade and maintain the Movable Type platform in our server. When Six Apart changed its business model and terminated the open source licensing, we ceased to upgrade the platform and began looking for other options that would meet our changing requirements for static publishing tools at the Center.

For the new publishing engine, we would like to: 

- Separate content and templates for better workflow,
- Use version control tools to track changes to the content and codes, and allow rollbacks,
- Store the source on Github and use its interface for content editing,
- Have control over functionalities we can develop for the site,
- Have clean codes,
- Have a framework that is lightweight and easy to maintain or upgrade, at little or no cost.

## Conversion and infrastructure

{{< figure src="/img/assets/hugo-logo.png" class="pull-right" alt="Hugo logo" link="http://gohugo.io" >}}

Our programmer [Anders](http://ctl.columbia.edu/about/team/pearson/) has been testing and evaluating static site generators for the Center, and recommended [Hugo](http://gohugo.io) for sites that we published on Movable Type. Hugo is a general-purpose static site generator that renders HTML files as output from content files and layout templates. It doesn’t rely on a database; all the content is in simple text files with Markdown or limited HTML formatting that can be revised using any text editing tool. Hugo meets the requirements we’ve set earlier, and we’ve used it for the [Film Language Glossary](https://filmglossary.ccnmtl.columbia.edu) and the [Case Consortium](https://casestudies.ccnmtl.columbia.edu) in 2015. It seemed to be a ideal fit for CompilED, and we wanted to explore this framework's flexibility and durability.

Anders wrote a [Python scraper](http://docs.python-guide.org/en/latest/scenarios/scrape/) that took all the content from the previous CompilED and converted it into the formatting suited for Hugo. Then, he set up the [`compiled` repository](https://github.com/ccnmtl/compiled) on Github, as well as the continuous integration server, Jenkins, to deploy the site to staging and production. CompilED is published to and hosted on Amazon Simple Storage Service (Amazon S3).

## Architecture, theming, and skinning

Initially, the conversion preserved the original directory structure from Movable Type. Each article post lived on its respective topic directory: 

```
.
├── content
│   ├── events
│   │   ├── article-post-files
│   ├── process
│   │   ├── article-post-files
│   ├── projects
│   │   ├── article-post-files
│   ├── etcetera...
│   │   ├── article-post-files
```

This structure made it difficult for me to use the existing Hugo list of content templates, layout template assigments, and other functionality such as global pagination. It also complicated the editorial process where contributors would have to drop their posts in a topic directory and move the files around if the topic changed.

To simplify content and template management, I eliminated the topic directories, and turned the topics into taxanomies that are defined in each article's front matter. Here, an article's topic can be edited, deleted, or created at anytime without moving the file between directories. All posts are now in one directory, `articles`. This is the new content structure:

```
.
├── content
│   ├── articles
│   │   ├── article-post-files
```

Here's a snippet of an article's front matter:

```
---
author_name: "Zarina Mustapha"
date: 2016-05-19
title: "Rebuilding CompilED"
topics:
- Process
type: post
---
```

I used the [Bootstrap framework](http://getbootstrap.com) to develop the skin. For CompilED, I implemented the site design in `layouts/` instead of creating a sharable skin in `themes/`. While this will limit the reuse of the the skin in another Hugo site, converting the design into a theme for future use will not be difficult.

<div class="row">
<div class="col-sm-6">{{< figure src="/img/assets/before-main-desktop.jpg" class="text-center" alt="Homepage, before (on desktop)" caption="Homepage, before (on desktop)" >}}</div>
<div class="col-sm-6 text-center">{{< figure src="/img/assets/after-main-desktop.jpg" class="text-center" alt="Homepage, after (on desktop)" caption="Homepage, after (on desktop)" >}}</div>
</div>

<div class="row">
<div class="col-sm-6">{{< figure src="/img/assets/before-article-desktop.jpg" class="text-center" alt="Article page, before (on desktop)" caption="Article page, before (on desktop)" >}}</div>
<div class="col-sm-6 text-center">{{< figure src="/img/assets/after-article-desktop.jpg" class="text-center" alt="Article page, after (on desktop)" caption="Article page, after (on desktop)" >}}</div>
</div>

## Access and accessibility

The older CompilED site was designed and developed with little accommodations for mobile devices or assistive technology (AT) for web accessibility. For the new CompilED, I set out to implement comprehensive responsive design, from mobile to desktop, using the [Bootstrap framework](http://getbootstrap.com).

<div class="row">
<div class="col-sm-6">{{< figure src="/img/assets/before-phone-desktop.jpg" class="text-center" alt="Article page, before (on iPhone 6)" caption="Article page, before (on iPhone 6)" >}}</div>
<div class="col-sm-6 text-center">{{< figure src="/img/assets/after-phone-desktop.jpg" class="text-center" alt="Article page, after (on iPhone 6)" caption="Article page, after (on iPhone 6)" >}}</div>
</div>

In addition to


http://wave.webaim.org/

http://www.apple.com/accessibility/osx/voiceover/

https://support.google.com/accessibility/android/

https://www.readability.com/

Will write more on this issue later.

## Structure, search, and share

http://lunrjs.com/

https://developers.google.com/search/docs/guides/intro-structured-data

http://schema.org/

http://microformats.org/wiki/hnews

Readability, printing

Social media (sharing)

Pellentesque nec dui id nisi volutpat fringilla nec sed magna. Aliquam non arcu quis lorem tempor hendrerit. Cras ultrices libero quis cursus finibus. Cras efficitur, orci a imperdiet sodales, magna metus interdum metus, vel ultricies ipsum metus nec urna. Morbi viverra tincidunt nunc sit amet placerat. Maecenas eget lorem vel.

## More nuggets

Sed est ex, euismod nec posuere a, tristique quis neque. Nulla eget dolor tortor. In ac fermentum magna. Sed tempus eros id laoreet aliquam. Vestibulum turpis enim, consequat iaculis aliquam in, tristique sed mauris. Praesent quis lectus sit amet nulla congue ultricies. Cras porta egestas libero quis porttitor. Aliquam ultricies.

## A few to do

Quisque lobortis eget metus sit amet elementum. Integer in leo magna. Praesent ullamcorper convallis porta. Maecenas bibendum nunc rhoncus, lobortis lectus eu, venenatis leo. Nam porttitor lorem eu mi consectetur cursus. Duis venenatis sapien ac tellus rhoncus tincidunt. In neque ante, ultrices quis tortor et, pulvinar porta nibh. Nam in.

