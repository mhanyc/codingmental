---
author_name: "Kathryn Hagan"
author_url: "https://github.com/codebykat/"
date: "2010-10-01"
topics: 
- Projects
tags: ["javascript", "jquery"]
title: "Clone wars: jQuery UI draggables and overflow:hidden"
type: "post"
---

<p>While working on a Javascript interactive for the <a href="http://ccnmtl.columbia.edu/portfolio/social_work/diabeaters.html">diaBeaters</a> project, we stumbled across an interesting problem with jQuery UI <a href="http://jqueryui.com/demos/draggable/">draggables</a>.  To wit: if you have draggable items inside a div with overflow:hidden, they're stuck.  You can't drag them out of the container -- the div just scrolls out to infinity.  (Try it sometime, it's awful.)</p>

<!--more-->

<p>Here's the original drag-and-drop setup.  The game involves dragging magnets from a menu on the left-hand side onto a refrigerator on the right.</p>

<pre><code>jQuery(".magnet").draggable({
  revert: 'invalid'
});

jQuery("#fridge").droppable({
  drop: function(event, ui) {
      jQuery(this).addClass('dropped');
  });
</code></pre>

<p>After some Googling, I found that <a href="http://www.developerit.com/2010/06/09/jquery-ui-draggable-elements-not-draggable-outside-of-scrolling-div">others</a> have run into this problem as well.  The only solution seems to be to use helper:clone for the draggable.  For good measure, I also added the appendTo and scroll options.</p>

<p>The updated draggable setup:</p>

<pre><code>jQuery(".magnet").draggable({
  revert: 'invalid'
  ,appendTo: '#fridge'
  ,scroll: false
  ,helper: 'clone'
});
</code></pre>

<p>Cloning the draggables did, in fact, allow them to escape from the containing div, but instead of staying where they were dropped, they'd just vanish.  It turns out that cloning loses you a few things you'd otherwise get automatically; specifically, if you want to keep your clone, you have to append it to the DOM and position it manually.  Otherwise it gets deleted as soon as you drop it.</p>

<p>So, I had to update the droppable too:</p>

<pre><code>jQuery("#fridge").droppable({
  drop: function(event, ui) {
    jQuery(this).addClass('dropped');

    var clone = ui.draggable;
    clone.appendTo(this);

    // this assumes the mouse grabbed in the middle of the div
    // (so now we need .cursorAt on the draggable)
    var width = clone.width();
    var height = clone.height();
    clone.offset({'top':event.pageY-height/2 ,
                  'left':event.pageX-width/2 })
  }
});
</code></pre>

<p>This did fix the positioning, but the dragged items were still not behaving as I expected.  Sometimes, moving one of them would inexplicably affect the positioning of another (I think this was due to them getting re-ordered in the DOM tree).  In addition, the "clone" paradigm didn't really work with the metaphor we were trying to get across; the "ghosts" left behind by cloning undermined the experience of picking up and moving a single object.</p>

<p>After fighting with this for a little while, I realized that the best solution would just be to turn cloning <em>off</em> once the items had been dragged out of the container div, making them single objects once more, and saving me having to deal with positioning them manually.</p>

<p>So I created a new class for the divs within the left menu, and set only those to use helper:clone.  While I was at it, I added .cursorAt so the magnets would drop consistently (since I was positioning them from the center).</p>

<pre><code>jQuery(".magnet").draggable({
  revert: 'invalid'
  ,appendTo: '#fridge'
  ,scroll: false
  // no more helper:clone
});

jQuery(".magnet-in-menu").each( function(elem) {
  jQuery(this).draggable("option", "helper", 'clone');

 // can't use .width() and .height() before images load
 var width = parseInt(jQuery(this).css('width'));
 var height = parseInt(jQuery(this).css('height'));
 jQuery(this).draggable("option", "cursorAt",
                            {'top': height/2, 'left': width/2});
});
</code></pre>

<p>And modified the droppable to manage the conversion:</p>

<pre><code>jQuery("#fridge").droppable({
  drop: function(event, ui) {
    jQuery(this).addClass('dropped');

    // if we've got a clone,
    // we need to actually save it and put it where it belongs
    if( ui.draggable.hasClass('magnet-in-menu') ) {
      var clone = ui.draggable;
      clone.appendTo(this);

      var width = clone.width();
      var height = clone.height();
      clone.offset({'top':event.pageY-height/2 ,
                    'left':event.pageX-width/2 })

      clone.removeClass('magnet-in-menu');

      // remove "clone" helper 'cause it causes more trouble than it's worth
      clone.draggable("option", "helper", 'original');
    }
  }
});
</code></pre>

<p>And now, everything works as intended.  <em>Finally</em>.</p>
