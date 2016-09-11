---
author_name: "Jonah Bossewitch"
author_url: "http://alchemicalmusings.org/about/"
date: "2011-12-22"
topics: 
- Projects
tags: ["agile", "directedlearning", "django", "pagetree", "scorm"]
title: "The Forest for the Trees"
type: "post"
---


<p>At <span class="caps">CCNMTL </span>we focus on pedagogical innovation, but we continue to work on projects that involve delivering static educational materials in traditional sequential formats. We work hard to carve out <a href="http://www.studyplace.org/files/McClintock/1971-Place-for-Study-McClintock.pdf">places for study in a world of instruction</a>, but there is plenty of important knowledge that people want to acquire, and training people on skills continues to be an important component of education and often a precondition of concept formation.<br /><br />In many of our projects, we've explored the boundaries of what we call - "Serial Directed Learning Modules". The key properties of these projects include:</p>

<!--more-->


<ul>
<li>Nested, hierarchical, rich content with idiosyncratic navigation and access rules</li>
<li>Rich interactive activities (quizzes, drag/drop, planning, mapping)</li>
<li>Detailed reporting on the learner's performance and completion</li>
</ul>



<p>In our partnership with the Columbia University Medical Center and our strategic <a href="http://ccnmtl.columbia.edu/triangle/">Triangle Initiative</a> we've worked on several multimedia behavioral interventions that conform to this delivery pattern. We've worked on direct interventions relating to <a href="http://ccnmtl.columbia.edu/triangle/projects/multimedia_connect.html"><span class="caps">HIV </span>couples counseling</a>, childhood <a href="http://ccnmtl.columbia.edu/portfolio/social_work/diabeaters.html">diabetes</a> and <a href="http://ccnmtl.columbia.edu/triangle/projects/mysmilebuddy.html">cavity prevention</a>, <a href="http://ccnmtl.columbia.edu/triangle/projects/masivukeni.html">treatment adherence</a>, and we've developed directing learning modules for teaching practitioners about <a href="http://ccnmtl.columbia.edu/portfolio/medicine_and_health/tobacco_cessation.html">tobacco cessation</a>, <a href="http://ccnmtl.columbia.edu/portfolio/medicine_and_health/care.html">child abuse</a>, and <a href="http://ccnmtl.columbia.edu/portfolio/directed_learning/">more</a>.</p>

<p>While similar in the abstract, these projects vary in their devilish details. Some of these environments are mediated by a service provider, such as a social worker and their patient, while others are self-directed. Some require multiple modes with additional notes available only to the facilitator. A few lessons are completed in a single sitting, while others must preserve state and pick up where the learner left off. </p>

<p>We try to balance the effort of creating unique works of art with churning out boilerplate, cookie-cutter sites. We've explored the use of general purpose content management solutions (CMS) for these projects and are regularly stymied by the mismatch between these styles of interaction and the sweet spots of the <span class="caps">CMS </span>platforms we know well.  <span class="caps">CMS </span>platforms are great for creating collections of random-access content, and organizing and relating it in a variety of ways. The business rules around the directed learning projects often left us wrestling with <span class="caps">CMS </span>environments, wishing we had developed them using a lightweight <span class="caps">MVC </span>framework, without as much overhead to introduce the customize workflows these projects demand.</p>

<p>After building of a few of these sites à la carte, we began to generalize our approach and developed the PageTree hierarchical menu-creation system for Django.  PageTree evolved into an open-source lightweight, domain-specific content management system, and we introduced a modular architecture for embedding and assembling PageBlocks which introduces elements like text, media, or custom Javascript activities within pages. The source code for <a href="https://github.com/ccnmtl/django-pagetree">PageTree</a> and a basic set of <a href="https://github.com/ccnmtl/django-pageblocks">PageBlocks</a> are available on our 'ccnmtl' <a href="https://github.com/ccnmtl/">github account.</a> We have also released the code and content powering the <a href="http://ccnmtl.columbia.edu/portfolio/social_work/diabeaters.html">childhood diabetes</a> intervention - and it is available <a href="https://github.com/ccnmtl/diabeaters">here</a>. </p>

<p>As the demand for these sites has grown, we've recently created a system for "farming" these PageTree sites -- aptly named "Forest" -- that allows our project managers to very quickly set up their own PageTree sites (called "Stands") in order to get a skeletal site up and running without the bottleneck of overhead of developer intervention. You can see a self-documenting demo of Forest <a href="http://forest.ccnmtl.columbia.edu">here</a>. </p>

<p>This approach allows us to collect content as early as possible.  The features can be developed around the content, instead of vice-versa.  If the site requires custom functionality that goes beyond the generic features of the Forest farm, we can spin off an independent Django site from the Forest farm, and begin development at the onset with the site's content already in place.<br /><br />This system helped us achieve a nice balance between customization and efficiency, and we are pleased with the flexibility this approach has enabled for this class of projects.  We're in the process of conceptualizing a roadmap for PageTree sites, and have been imagining a collaborative authoring platform that supports versioning, <a href="http://www.youtube.com/watch?v=FzxNwWvmwf4"><span class="caps">SCORM</span></a> authoring/publishing platform, <a href="http://www.imsglobal.org/lti/">BasicLTI</a> compliance, and more.</p>
