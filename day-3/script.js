var initialPath = `M 10 100 Q 500 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#String");

string.addEventListener("mousemove", function (dets) {
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path", {
        attr:{d:initialPath},
        duration:0.2,
        ease: "power3.out",
    })
})

string.addEventListener("mouseleave",function(dets) {
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration:1.5,
        ease: "elastic.out(1,0.2)",
    })
})