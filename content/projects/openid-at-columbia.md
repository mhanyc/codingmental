---
author_name: "Schuyler Duveen"
author_url: "http://ccnmtl.columbia.edu/staff/duveen/"
date: "2009-07-08"
tags: ["login", "openid", "opensource-contrib", "wind"]
title: "Prototype for columbia.edu as an OpenID Provider"
type: "post"
---

<p><a href="http://openid.net/">OpenID</a> is an increasingly popular universal sign-on mechanism on the web. Google, Facebook, LiveJournal, even Sears' online store are supporting it.  We can, in theory, adapt Columbia logins to be an OpenID provider. This would allow members of the Columbia community to login to other sites which accept OpenID with their Columbia <span class="caps">UNI</span>s.</p>

<!--more-->

<p>At Columbia, <span class="caps">CUIT </span>provides a single sign-on mechanism for services within the university called <a href="http://www.columbia.edu/acis/webdev/wind.html">Wind</a> , which is based on the more ubiquitous <a href="http://www.jasig.org/cas"><span class="caps">CAS</span></a> .</p>

<p>One problem with depending on Columbia-only authentication/authorization is that it makes it awkward, if not impossible, for students or faculty to work together with non-Columbia affiliates in the same protected environments. Guest lecturers can't access the course materials. Researchers have difficulty collaborating across institutions.</p>

<p>The solution is to use a broader authentication method. <a href="http://shibboleth.internet2.edu/">Shibboleth</a> is one that has been baking for a long time within the academic world, but it seems like OpenID provides many similar features and will allow our community to interface on more popular websites, too.</p>

<p>It's not available yet; we still need to talk to the folks at <span class="caps">CUIT </span>about why it's a good idea. However, I've written an implementation that should make the following scenario  possible:</p>

<p>For any service on the Internet, you should be able to type into an OpenID login 'columbia.edu.'  This will shepherd you to a Wind login, and then Columbia will authenticate you with the site. No saved passwords and, if you choose, your name and email will automatically be sent to them.</p>

<p>The system, as implemented, would also let you login as an anonymous Columbia student or faculty member. Sometimes you don't want a site to know your name or even be able to match your login with other sites you've logged in to the same way. Note, however, that the Columbia IT department could figure out who you are--you'd be trusting their servers after all.</p>

<p><b>Some tech details:</b><br />
I used the mostly friendly <a href="http://www.openidenabled.com/">JanRain php-openid library</a><br />
OpenID is pretty complicated, and it took a bit of time before I started thinking my confusion was related to a <a href="http://trac.openidenabled.com/trac/ticket/335">bug</a> in the code, rather than my confusion with the spec. Overall, though, the example server was a great place to start.</p>

<p>One gotcha I encountered toward the end of the implementation: I was getting an error when <a href="http://openidenabled.com/php-openid/trunk/examples/consumer/">testing at openidenabled.com</a> "OpenID authentication failed: No matching endpoint found after discovering [my OpenID]."  It turned out that the Relying Party (the server for which you login), on the last step, queries the user's identity_url to check that it trusts the Provider (the server providing the login). When I checked what my provider was doing, it was serving the wrong information in that case--easily broken, but easily fixed with some better htaccess rules.</p>

<p>All the code is at <a href="http://github.com/ccnmtl/openid-wind-bridge">http://github.com/ccnmtl/openid-wind-bridge</a></p>
