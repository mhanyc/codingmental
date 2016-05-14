---
author_name: "Schuyler Duveen"
author_url: "https://github.com/schuyler1d/"
date: "2010-01-05"
topics: 
- Reviews
tags: ["gource", "millenniumvillage", "mondrian", "svn", "visualization", "worth"]
title: "Gource: visualizing work on projects"
type: "post"
---

<img alt="gource.png" src="http://ccnmtl.columbia.edu/compiled/gource.png" class="mt-image-right" style="padding-right: 20px;" height="375" width="315" align="left" />
<p><a href="http://infosthetics.com/archives/2009/12/gource_software_version_control_visualization.html">Gource</a> is a fun tool that takes your source repository, and outputs a video showing your developers as little gnomes dancing around the source tree building the program. I think it's a great visualization to demonstrate to the less technical members of our organization and the world, what a programmer does on a daily basis. The source-tree is simple enough to be graspable as program components, yet reflects some of the complexity we handle. Thus it shows pretty vividly how fractured a programmer's attention can be, and why we need time and space to develop.</p><p>I've run this on a couple of our own projects. I think this could also be useful in visualizing the activity of classes; for example in a wiki.<br /></p>

<!--more-->

<p>The little gnomes are contributors.  The dots are files (colored by 
file-type) and the rays coming represent changes to the file by the 
contributor.<br /></p><p>This doesn't reflect perfectly how much one contributes to a 
project--often the hardest parts of a program take up very little space.
  But it doesn't mean nothing either.  At the beginning of the Mondrian 
project in May 2009 you can see Ethan filling out pretty much the entire
 application.  Besides the initial skeleton, I don't contribute anything
 of substance until late June (and then I pick up, I think :-)</p><p>After the videos, I have some details about how I generated these.</p><p><br /></p>

<h3>Mondrian</h3>
<script type="text/javascript" src="http://ccnmtl.columbia.edu/stream/jsembed?file=test/flv/mondrian.flv&amp;width=640&amp;height=360&amp;protection=f8b09fe77b5547a95240e30168950b461a1fd267"></script>

<h3><a href="http://ccnmtl.columbia.edu/portfolio/social_work/multimedia_worth.html">Worth</a></h3>
<script type="text/javascript" src="http://ccnmtl.columbia.edu/stream/jsembed?file=test/flv/worth.flv&amp;width=640&amp;height=360&amp;protection=756dba4f10fc1b303768e3e8c2d328bee341e94c"></script>

<h3><a href="http://ccnmtl.columbia.edu/portfolio/social_sciences/millennium_village_s.html">MilleniumVillage</a></h3>
<script type="text/javascript" src="http://ccnmtl.columbia.edu/stream/jsembed?file=test/flv/milleniumvillage.flv&amp;width=640&amp;height=360&amp;protection=582594fc5da3b878798e0325f1ee7328a4bc314c"></script>

<h3>CCNMTL's Whole SVN Repository History (long)</h3>
<script type="text/javascript" src="http://ccnmtl.columbia.edu/stream/jsembed?file=test/flv/whole_svn.flv&amp;width=800&amp;height=600&amp;protection=e8f53f6bc75b5618e26184ce940cb7e04ca5aa31"></script>

<h3>How I made these</h3>
<p>After installing gource, most of these were generated in a process that looks something like this. I downloaded images of each developer (from our staff page) and then for each project (checked out from Svn) I did:
</p><pre>cd my-svn-project
svn log -verbose -xml &gt; my-project.log
python svn-gource.py -filter-dirs my-project.log |grep -vi mochikit|grep -vi tiny_mce|grep -vi yui &gt; gource.log
gource -640×360 -stop-position 1.0 -user-image-dir ~/pictures/ccnmtlavatars -hide-filenames -a 100 -s 0.5 -log-format custom gource.log -output-ppm-stream - |ffmpeg -y -b 3000K -r 60 -f image2pipe -vcodec ppm -i - gource.flv
</pre>
