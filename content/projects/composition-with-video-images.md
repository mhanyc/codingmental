---
author_name: "Jonah Bossewitch"
author_url: "http://ctl.columbia.edu/about/team/bossewitch/"
date: "2010-01-14"
tags: ["annotations", "django", "html5", "javascript", "mashup", "openlayers", "video"]
title: "Announcing Mediathread: Composition with Video, Images, and Text"
type: "post"
---

<p>We are very excited to announce the release of our latest iteration on a web-based, multimedia, annotation environment - code named: <del>Mondrian</del> Mediathread ( <a href="http://github.com/ccnmtl/mediathread">source code</a> ). Mediathread builds on the strengths and experiences of our <a href="http://ccnmtl.columbia.edu/compiled/projects/annotating_conversations.html">long history</a> of annotation projects here at <span class="caps">CCNMTL. </span></p>

<!--more-->

<p>Mediathread is a collaborative multimedia analysis environment that supports deep critical exploration of primary multimedia source material, i.e. participatory education, research, democracy, and culture. The Mediathread platform supports a robust access control model with multiple analysis spaces and a variety of workflows (solo projects, collaborative projects, versioning, private projects, public projects, etc).  The community portal also organizes streams of activity notifications to help the participants track each other's (net)work.</p>

<p>Participants in the analysis space collect multimedia assets from around the web, clip/annotate these assets, organize their clips, and create a multimedia composition where their clips are directly embedded inline in their analysis/argument.   The upcoming release supports video clipping (quicktime, <a href="http://flowplayer.org/">flowplayer</a>, and youtube), and drawing on images (using the fabulous <a href="http://openlayers.org/">OpenLayers</a> viewer).</p>

<p>Mediathread was designed as a mashup, and the software does not provide asset management services. Instead, Mediathread operates upon assets that remain on their original server media, analogous to the way <a href="http://delicious.com/">del.icio.us</a> operates on links. One day we hope to be able to annotate (and analyze) anything at the other end of a <span class="caps">URL.</span> The targeted media does not need to "know" about Mediathread - assets can be brought into Mediathread manually, or with a convenient bookmarklet. Of course, if you are are in control of the source archive, it is simple to add an "Analyze This" button directly to the archive for convenience.</p>

<p>Mediathread is built on <a href="http://www.djangoproject.com/">Django</a> + the <a href="http://github.com/ccnmtl/SherdJS">SherdJS</a> javascript framework - also developed here at <span class="caps">CCNMTL </span>for Mediathread, but decoupled with the intention of using against alternate backends.</p>

<p>This semester our Mediathread platform will be supporting the <a href="http://ccnmtl.columbia.edu/digitalbridges/projects/vietnam_digital_library.html">Vietnam Digital Library</a> courses as well as this year's <a href="http://ccnmtl.columbia.edu/portfolio/arts/digital_tibet.html">Digital Tibet</a> course (for a glimpse at these gorgeous images, see <a href="http://digitaltibet.ccnmtl.columbia.edu/">http://digitaltibet.ccnmtl.columbia.edu/</a>).</p>

<p>Publishing this application has really motivated us to clean up the messy corners of the codebase, in ways that this post on <a href="http://web.archive.org/web/20080214052026/yahooresearchberkeley.com/blog/2007/09/20/why-do-we-write/">Why Do We Write?</a> articulates nicely.  We have also finally straightened out our stories around distributed version control  (git submodules vs. subversion externals will be the the subject of a future post). There is still plenty of work ahead of us, and a challenging roadmap towards purposeful, scalable, self-service, collaborative multimedia analysis.  Special thanks to everyone involved in supporting these ongoing efforts, including all of our <a href="http://ccnmtl.columbia.edu/staff/index.html">staff</a>, <a href="http://openvault.wgbh.org/"><span class="caps">WGBH</span></a>, and <a href="http://www.imls.gov/"><span class="caps">IMLS</span></a>.</p>
