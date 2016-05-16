---
author_name: "Schuyler Duveen"
author_url: "https://github.com/schuyler1d/"
date: "2009-09-04"
topics: 
- Projects
tags: ["firefox", "html5", "javascript", "masivukeni", "smart"]
title: "Building an offline web app"
type: "post"
---

<p>In March, <span class="caps">CCNMTL </span><a href="http://ccnmtl.columbia.edu/news/announcements/smartsa-sout.html">shipped a laptop to a South African <span class="caps">AIDS </span>clinic</a> as a part of a multimedia health-care intervention.</p>

<!--more-->

<p>We're not that experienced with desktop application development, so the main discussion was how do we bundle a web application on a stand-alone laptop with no connection to the Internet.  The first proposal was to run a virtual machine (Xen or VMware) which would run the web server on the Windows desktop.</p>

<p>I was less sanguine about diagnosing problems with a web server across continents and timezones, and looked for a way to store state information from static web pages. <a href="https://developer.mozilla.org/en/DOM/Storage">Firefox's <span class="caps">DOM</span> Storage</a> was close to a <span class="caps">HTML5 </span>standard (now finally implemented in Firefox 3.5), and seemed to work with <span class="caps">URL</span>s visited as "file://localhost/C:/..." so this made the following process possible:</p>


<ol>
<li>Put static <span class="caps">HTML </span>files on the laptop</li>
<li>All state is stored by the browser (in a file called webappsstore.sqlite)</li>
<li>All application storage is accessed and modified by javascript (<a href="http://github.com/ccnmtl/smart_sa/blob/354bb3146edd9330904627072dbfe22abe5f7711/media/js/static_auth/local_session.js">see code</a>)</li>
<li>Login state uses sessionStorage which works similarly but disappears after the browser closes (like a session cookie)</li>
</ol>



<p>Instead of supporting a virtualization and web server stack, all that's left to support is the browser--something very familiar to all computer users by now. It's worked out great.</p>

<p>I should note that our application is not secure from a javascript hacker who has access to the computer--they could access and change all account information on our system. Fortunately, that's not an attack vector we're worried about.</p>

<p><span class="caps">OK, </span>there's a dirty secret behind my not posting about this previously--it no longer works! There's a laptop in a South African clinic that's not getting any Firefox updates, security or otherwise, and that's a very good thing. Now, it seems, all browsers, remove the 'localhost' from file:// <span class="caps">URL</span>s.  The new <span class="caps">HTML5 </span>standard localStorage does not work for local files, and the deprecated globalStorage[hostname] doesn't work without a hostname!</p>

<p><span class="caps">HTML5 </span>taketh away, but it giveth ath well. Instead of relying on file:// <span class="caps">URL</span>s, in the future we can label our site as an <a href="https://developer.mozilla.org/en/Offline_resources_in_Firefox">offline resource</a> and then use the now standardized and implemented localStorage.  </p>

<p>The one issue with this future approach is if we need to update the application while it's in the field.  We haven't needed to do that on this project, but it's a comfort to know that if they discovered a critical bug, we could email them a single <span class="caps">HTML </span>file to replace, and the computer running the application does not need to be connected (to anything other than the <span class="caps">USB </span>key the new file is on).  I <a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2009-August/022377.html">sent our use cases for localStorage</a> over to the <span class="caps">HTML5 </span>mailing list, but there's still work on the standards side and for the browser vendors.</p>
