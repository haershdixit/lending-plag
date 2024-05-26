gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

Shery.imageEffect("#back", {style:5 ,config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.89,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0672},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.39,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.47,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}},gooey:true});         

var elems=document.querySelectorAll(".elem");

elems.forEach(function(elem){
    var h1s=elem.querySelectorAll("h1");
    var index=0;
    var animating= false;
    document.querySelector("#main")
    .addEventListener("click", function(){
    if(!animating){
        animating=true;
        gsap.to(h1s[index],{
            top:'-=100%',
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: function(){
                gsap.set(this._targets[0],{top:"100%"})
                animating=false;
            }
          });
        
          index === h1s.length-1? (index=0):index++;
        
          gsap.to(h1s[index],{
            top:'-=100%',
            ease: Expo.easeInOut,
            duration: 1
          });
    }
    });
})

// gsap.from("h1",{
//   y:120,
//   stagger:0.2,
//   duration:1,
//   ScrollTrigger:{
//     trigger:"page2",
//     scroller:"body",
//     start:"top 47%",
//     end:"top 46%",
//     markers:true,
//     scrub:2
//   }
// })

// var tl= gsap.timeline()

// tl.from("#loader ",{
//   x:40,
//   opacity:0,
//   duration:2,
//   stagger:0.1
// })
// tl.to("#loader ",{
//   opacity:0,
//   x:-40,
//   duration:1,
//   stagger:0.1
// })
// tl.to("#loader ",{
//   opacity:0,
// })
// tl.to("#loader ",{
//   display:"none"
// })
function checkPlagiarism() {
  // You would need to implement the actual plagiarism detection logic here.
  // This is just a frontend template, and it won't perform any real checking.

  // For demonstration purposes, display a sample result.
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Plagiarism check result: No plagiarism detected.';
}
function explore() {
  // You would need to implement the actual plagiarism detection logic here.
  // This is just a frontend template, and it won't perform any real checking.

  // For demonstration purposes, display a sample result.
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Plagiarism check result: No plagiarism detected.';
}
