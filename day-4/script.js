var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
document.querySelector("#image");


main.addEventListener("mousemove",(dets) => {
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        duration:0.6,
    })
})

image.addEventListener("mouseenter",(dets) => {
    cursor.innerHTML="View"
    gsap.to(cursor, {
        scale:4,
        backgroundColor: "#ffffff70"
    })
})

image.addEventListener("mouseleave",(dets) => {
    cursor.innerHTML=""
    gsap.to(cursor, {
        scale:1,
        backgroundColor: "#fff"
    })
})