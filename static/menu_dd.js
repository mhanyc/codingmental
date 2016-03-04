function nav(sel) {
   if (sel.selectedIndex == -1) return;
   var opt = sel.options[sel.selectedIndex];
   if (opt && opt.value)
      location.href = opt.value;
}    

/***********************************************
* AnyLink Drop Down Menu- � Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

//Contents for menu 1
var menu1=new Array()
menu1[0]='<a href="http://ccnmtl.columbia.edu/our_services/">Overview</a>'
menu1[1]='<a href="http://ccnmtl.columbia.edu/our_services/overview/for_instructors.html">For Instructors</a>'
    //menu1[2]='<a href="http://ccnmtl.columbia.edu/our_services/overview/for_academic_groups.html">For Academic Groups</a>'
    //menu1[3]='<a href="http://ccnmtl.columbia.edu/our_services/courseworks/introduction_to_courseworks.html">CourseWorks </a>'
menu1[4]='<a href="http://ccnmtl.columbia.edu/events/?type=97&title=Workshops">Workshops</a>'
menu1[5]='<a href="http://ccnmtl.columbia.edu/our_services/classroom/">Digital Classroom</a>'
    //menu1[6]='<a href="http://ccnmtl.columbia.edu/dr/" target="_blank">Design Research</a>'


//Contents for menu 2, and so on
var menu2=new Array()
//menu2[0]='<a href="http://ccnmtl.columbia.edu/about/mission.html">Mission</a>'
menu2[0]='<a href="http://ccnmtl.columbia.edu/staff/index.html">Our Team</a>'
menu2[1]='<a href="http://ccnmtl.columbia.edu/about/locations.html">Locations</a>'
menu2[2]='<a href="http://ccnmtl.columbia.edu/dr/">Design Research</a>'
menu2[3]='<a href="http://ccnmtl.columbia.edu/connecting/get-involved.html">Get Involved</a>'

//Contents for menu 3, and so on
var menu3=new Array()
menu3[0]='<a href="http://ccnmtl.columbia.edu/news/announcements">Announcements</a>'
menu3[1]='<a href="http://ccnmtl.columbia.edu/news/this-week-at-the-center/">This Week at the Center</a>'
menu3[2]='<a href="http://ccnmtl.columbia.edu/news/in-the-news/">In the News</a>'
menu3[3]='<a href="http://ccnmtl.columbia.edu/news/press-releases">Press Releases</a>'
menu3[4]='<a href="http://ccnmtl.columbia.edu/enhanced">EnhancED Blog</a>'

//Contents for menu 4, and so on
var menu4=new Array()
menu4[1]='<a href="http://ccnmtl.columbia.edu/seminars/" target="_blank">University Seminars</a>'
menu4[0]='<a href="http://ccnmtl.columbia.edu/events/?type=97&title=Workshops">Workshops</a>'
menu4[2]='<a href="http://ccnmtl.columbia.edu/events/?type=2&title=Special%20Events">Special Events</a>'

//Contents for menu 5, and so on
var menu5=new Array()
menu5[0]='<a href="http://ccnmtl.columbia.edu/triangle/" target="_blank">Triangle Initiative</a>'
menu5[1]='<a href="http://ccnmtl.columbia.edu/digitalbridges/" target="_blank">Digital Bridges</a>'
menu5[2]='<a href="http://ccnmtl.columbia.edu/onlinelearning/" target="_blank">Online Learning</a>'
		
//Contents for menu 6
var menu6=new Array()
menu6[0]='<a href="http://ccnmtl.columbia.edu/our_services/tools/">Overview</a>'
menu6[1]='<a href="http://ccnmtl.columbia.edu/our_services/tools/courseworks/">CourseWorks </a>'
menu6[2]='<a href="http://ccnmtl.columbia.edu/our_services/tools/columbia_wikispaces/">Columbia Wikispaces </a>'
menu6[3]='<a href="http://ccnmtl.columbia.edu/our_services/tools/edblogs/">EdBlogs@Columbia </a>'
menu6[4]='<a href="http://ccnmtl.columbia.edu/our_services/tools/podcasting_and_media/">Podcasting and Media </a>'
menu6[5]='<a href="http://ccnmtl.columbia.edu/our_services/tools/columbia_on_itunes_u/">Columbia on iTunes U</a>'
menu6[6]='<a href="http://ccnmtl.columbia.edu/our_services/tools/youtube/">Columbia on YouTube</a>'
menu6[7]='<a href="http://ccnmtl.columbia.edu/our_services/tools/mediathread/">Mediathread</a>'


var menuwidth='305px' //default menu width
var menubgcolor='72a1be'  //menu bgcolor
var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="no" //hide menu when user clicks within menu?

/////No further editing needed

var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
  document.write('<div id="dropmenudiv" style="visibility:hidden;'
                          + 'width:' + menuwidth + ';background-color:' + menubgcolor
                          + '" onMouseover="clearhidemenu()"'
                          + ' onMouseout="dynamichide(event)"></div>')

function getposOffset(what, offsettype){
  var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
  var parentEl=what.offsetParent;
  while (parentEl!=null){
    totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
    parentEl=parentEl.offsetParent;
  }
  return totaloffset;
}


function showhide(obj, e, visible, hidden, menuwidth){
  if (ie4||ns6)
  dropmenuobj.style.left=dropmenuobj.style.top="-500px"
  if (menuwidth!=""){
    dropmenuobj.widthobj=dropmenuobj.style
    dropmenuobj.widthobj.width=menuwidth
  }
  if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
    obj.visibility=visible
  else if (e.type=="click")
    obj.visibility=hidden
}

function iecompattest(){
  return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
  var edgeoffset=0
  if (whichedge=="rightedge"){
    var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
    dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
    if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
      edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
  }
  else{
    var topedge=ie4 && !window.opera? iecompattest().scrollTop : window.pageYOffset
    var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
    dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
    if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
      edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
      if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
        edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge
    }
  }
  return edgeoffset
}

function populatemenu(what){
  if (ie4||ns6)
    dropmenuobj.innerHTML=what.join("")
}


function dropdownmenu(obj, e, menucontents, menuwidth){
  if (window.event) event.cancelBubble=true
  else if (e.stopPropagation) e.stopPropagation()
    clearhidemenu()
  dropmenuobj=document.getElementById? document.getElementById("dropmenudiv") : dropmenudiv
  populatemenu(menucontents)

  if (ie4||ns6){
    showhide(dropmenuobj.style, e, "visible", "hidden", menuwidth)
    dropmenuobj.x=getposOffset(obj, "left")
    dropmenuobj.y=getposOffset(obj, "top")
    dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
    dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
  }

  return clickreturnvalue()
}

function clickreturnvalue(){
  if (ie4||ns6) return false
  else return true
}

function contains_ns6(a, b) {
  while (b.parentNode)
    if ((b = b.parentNode) == a)
      return true;
  return false;
}

function dynamichide(e){
  if (ie4&&!dropmenuobj.contains(e.toElement))
    delayhidemenu()
  else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
  delayhidemenu()
}

function hidemenu(e){
  if (typeof dropmenuobj!="undefined"){
    if (ie4||ns6)
      dropmenuobj.style.visibility="hidden"
  }
}

function delayhidemenu(){
  if (ie4||ns6)
    delayhide=setTimeout("hidemenu()",disappeardelay)
}

function clearhidemenu(){
  if (typeof delayhide!="undefined")
    clearTimeout(delayhide)
}

if (hidemenu_onclick=="yes")
  document.onclick=hidemenu