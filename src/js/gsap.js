import { gsap } from "gsap"
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const anim01 = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#deliverables",
//         start: "top top",
//         end: "+=1500",
//         scrub: 1,
//         pin: true,
//         markers:false,
//     }
// });

// anim01.from(".default1 .list .item", {x: 1300, opacity:0, duration: 1, ease: "power1.out",})

const graphics = document.querySelectorAll('.graphic, .logo')
const serviceShapesSVGs = document.querySelectorAll('.service_shape, .group_shape')
const serviceShapesOutHeader = document.querySelectorAll('main svg.service_shape')

const relativeStrokeWidth = Math.floor((window.innerHeight + (window.innerWidth / 5)) / 580)


for(let j = 0; j < graphics.length; j++) {
    let pulsePaths = graphics[j].querySelectorAll('.pulse')

    for(let i = 0; i < pulsePaths.length; i++) {
        pulsePaths[i].style.animationDelay = `${i / 9}s`
        pulsePaths[i].style.strokeWidth = `${relativeStrokeWidth}px`
    }
}

for(let j = 0; j < serviceShapesSVGs.length; j++) {
    let pulsePaths = serviceShapesSVGs[j].querySelectorAll('.pulse')

    for(let i = 0; i < pulsePaths.length; i++) {
        pulsePaths[i].style.animationDelay = `${i / 9}s`
        pulsePaths[i].style.strokeWidth = `${relativeStrokeWidth}px`
    }
}

for(let k = 0; k < serviceShapesOutHeader.length; k++) {
    let serviceShapesOutHeaderPaths = serviceShapesOutHeader[k].querySelectorAll('.pulse')

    for(let i = 0; i < serviceShapesOutHeaderPaths.length; i++) {
        serviceShapesOutHeaderPaths[i].style.animationDelay = `${i / 15}s`
        serviceShapesOutHeaderPaths[i].style.strokeWidth = `${relativeStrokeWidth}px`
    }
}

// const floatPaths = document.querySelectorAll('.float')

// for(let i = 0; i < floatPaths.length; i++) {
//     floatPaths[i].style.animationDelay = `${i * (Math.random() + 1 * 2 )}s`
// }