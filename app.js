// PUT YOUR CODE HERE

const tl = gsap.timeline({ repeat: -1,duration:0.3 });

  tl.from(".red",{x:-300}).from(".green",{x:300}).from(".blue",{x:300}).from(".yellow",{x:-300})
    .to(".red",{x:"85vw",borderRadius:"50%",backgroundColor:"green"}).to(".green",{y:"64vh",borderRadius:"50%",backgroundColor:"blue"}).to(".blue",{x:"-85vw",backgroundColor:"yellow",borderRadius:"50%"}).to(".yellow",{y:"-65vh",borderRadius:"50%",backgroundColor:"red"})
    .to(".yellow",{x:-300,}).to(".green",{x:300},"<").to(".red",{x:1300},"<").to(".blue",{x:-1300},"<")
    
      