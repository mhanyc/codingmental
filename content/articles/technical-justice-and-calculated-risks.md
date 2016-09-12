---
author_name: "Jonah Bossewitch"
author_url: "http://alchemicalmusings.org/about/"
date: "2009-01-28"
topics: 
- Projects
tags: ["python", "semantic web"]
title: "Technical Justice \u0026 Calculated Risks"
type: "post"
---

<p>The Collateral Consequences Calculator is premiering this week at the New York State Bar Association's annual <a href="http://www.nysba.org/AM2009/AMDailyUpdate.htm">meeting</a>, marking the culmination of a 2 year development effort. The motivation and curricular goals driving this project are <a href="http://ccnmtl.columbia.edu/triangle/from_portfolio.html#TI_5244">described</a> in our portfolio. In addition to the formidable educational and logistical challenges, this project also presented some very unique technical challenges, which are worth documenting and celebrating.</p>

<!--more-->

<p><span class="caps">CCNMTL'</span>s primary mission is educational, and our design research is usually focused on pedagogy and improving the user experience, rather than infrastructure or basic research. Typically, we attempt to apply well understood software solutions to educational contexts and improve the experience around a well understood technical problem. While our developers dance on the cutting edge of enterprise solutions, it is difficult and risky to work on problems that computer scientists still consider 'hard'.</p>

<p>The Collateral Consequences Calculator is one of the more technically aggressive projects we have embarked on. The project has gone through various stages of complexity and sophistication, but at its core, we were asked to model the Law within Code. Since the Law is expressed using natural human language, this problem falls within the domain of artificial intelligence.</p>

<p>We were also tasked with the development of an active model of the Law - a system that could make inferences about the collateral consequences triggered by individuals matching certain profiles, or a system that could guide the user through various scenarios using a series of wizard-like prompts. In the field of artificial intelligence these kinds of systems are known as <a href="http://en.wikipedia.org/wiki/Expert_system">expert systems</a> and are notoriously difficult to develop and support.</p>

<p>Our problem was particularly hairy, since the legal knowledge is highly specialized, very precise, and changes frequently. We needed a solution that accommodated expert verification, accuracy, and evolution over time. For lawyers and law students to participate in the creation and maintenance of this system, the representation of the law needed to be distinct from the code.</p>

<p>As we researched this problem, we discovered there were some emerging <a href="http://www.legalxml.org/">standards</a> around legal data exchange, and some <a href="http://logic.stanford.edu/people/genesereth/">computer scientists</a> actively researching "computational solutions enabling users to understand, utilize, exploit, and obey law". (see <a href="http://logic.stanford.edu/classes/cs204/index.html">Computers and the Law</a> ).</p>

<p>These research efforts and fledgling standards had not yet been packaged for us in a ready-to-use format, although they did suggest and confirm some innovative approaches that Anders had already been actively investigating.</p>

<p>Anders' design took into account the precise allowances this project demanded, while remaining flexible enough to handle the ambiguity and inconsistency of the law. We engineered a system where the laws are encoded as a series of propositions, which in turn, are fed into an inference engine to calculate the consequences when various conditions are satisfied. We also built an administrative back-end for this system which, like a wiki, preserves a versioned history of this set of propositions. Our system is even intelligent enough to inform the user of which consequences might be affected by their updates to the rules.</p>

<p>In the current system, the legal propositions are encoded using the <a href="http://www.w3.org/DesignIssues/Notation3.html">n3 syntax</a>, though even if we were to improve the editing interface, there really is no way around the challenge of translating the legal statutes into logical statements. The hard part is actually thinking so precisely about relationships and dependencies. This activity requires human judgement, and the creation of this initial body of knowledge was the main task for the students in the law clinic.</p>

<p>Once the legal propositions have been entered into the system, they are processed by an inference engine written by the legendary <a href="http://www.w3.org/People/Berners-Lee/">Tim-Berners Lee</a> (which Anders webified). On the production site, the entire space of consequences is pre-computed and cached, providing a snappy response to all requests. The production site makes this all look easy.</p>

<p>We have not yet created an administrative interface that the lawyers were comfortable using, and many of the most sophisticated features are not visible in the existing tool. Gone are the client profiles, and the scenario wizards, though we do currently compare different convictions, and attempt to show the inferential chain of reasoning.</p>

<p>The decoupling of the legal propositions from the underlying code was crucial for the success of this project. The essential task of modelling the law within software opens up a range of applications beyond the original calculator. We can easily imagine 'what-if' simulations, where policy makers could experiment with changes of the law. Also, a system like this is the precondition for creating dynamic contracts or licenses on the fly (based on a human readable criterion, for example).</p>

<p>Frighteningly, systems like these are also beginning to dispense 'technical justice' - as computers are now <a href="http://news.cnet.com/Justice-at-the-click-of-a-mouse-in-China/2100-1012_3-6115154.html">calculating sentences in china</a> and US drivers are being programmatically convicted of traffic violations.</p>
