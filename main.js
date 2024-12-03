// Get the mouse element and the body
const mouse = document.querySelector("#mouse");
const body = document.querySelector("body");
const homeContent = document.querySelector(".home-content");
let navli= document.querySelectorAll(".nav-menu a")
// Function to update the mouse position
function updateMousePosition(e) {
  // Directly set the position of the custom mouse
  mouse.style.left = `${e.pageX}px`;
  mouse.style.top = `${e.pageY}px`;
  mouse.style.display = "block"; // Make mouse visible
}

// Event listener for mouse movement inside home-content
homeContent.addEventListener("mousemove", (e) => {
  body.style.cursor = "none"; // Hide the default cursor
  updateMousePosition(e);
  
});

// Event listener for mouse leaving home-content
homeContent.addEventListener("mouseleave", () => {
  mouse.style.display = "none"; // Hide the custom mouse
});
document.addEventListener("mousemove",(a)=>{
    gsap.to(".cursor",{
        x:a.x,
        y:a.y,
    })
})
document.querySelectorAll("h1 span").forEach(sp => {
  // Only add the event listeners once for each span
  sp.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 5,
      borderWidth:"1px",
    });
  });

  sp.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1,
      borderWidth:"1.5px",

    });
  });
});
document.getElementById("col-inp").addEventListener("input",()=>{
  inp = document.getElementById("col-inp").value;
  document.documentElement.style.setProperty("--pricol",inp)
})



var tl=gsap.timeline();
tl.to(".nav-menu",{
  top:"0%",
  opacity:1,
  duration:.8,
})
tl.from(".nav-menu h4",{
x:100,
y:50,
duration:.5,
stagger:.23,
opacity:0,
})
tl.from(".links",{
  opacity:0,
  duration:.2,
})
tl.to("#close",{
  opacity:1,
  duration:.2,
})

tl.pause()

document.querySelector("#menu").addEventListener("click",()=>{
  tl.play()
})
document.querySelector("#close").addEventListener("click",()=>{
  tl.reverse()
})
navli.forEach(nav=>{
  nav.addEventListener("click",()=>{
    tl.reverse()
  })
})