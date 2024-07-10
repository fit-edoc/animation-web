gsap.from("#first img ,#sec img",{
    opacity:0,
    duration:4,

})
gsap.from("#op, #bar3 a, #bar2 input",{
    y:-100,
    opacity:0,
    duration:2,
    stagger:0.3,
})

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#secondpage",
    start:"-20% 50%",
    end:"5%",
    
    
    
    scrub:0.01,
}})
tl.to("#nike",{
    dropShadow:"30px black",
    rotate:360,
    top:"130%",
    height:"50%",
    zIndex:"2",
},"op")

tl.from("#s h1",{
    x:100,
    opacity:0,
    scrub:0.1,
    color:"blue"
},"op")
tl.from("#vid video",{
    x:-300,
    right:"50%",
    opacity:0,
    scrub:0.01,
},"op")

var ty = gsap.timeline({scrollTrigger:{
    trigger:"#page3",
    
    scrub:true,
    yoyo:true,
    start:"-10% 50%",
    end:"60%",

}})
ty.to("#center #Box",{
    transition:"all ease 2s",
    transform:"translateX(-40vw)",
    duration:33,
})


var op = 
gsap.timeline({
    scrollTrigger:{
        trigger:"#nav",
        scrub:0.4,
        start:"150% 10%",
        end:"800% 40%"
    }
})
op.to("#nav",{
    transition:"all linear 0.001s",
    transform:"translateY(-100px)"

})

gsap.from("#col",{
    width:"0px",
    height:"0px",
    stagger:0.3,
    opacity:0,
    
})
gsap.to("#col",{
    height:"500px",
    width:"350px",
    
})
var jaadu = gsap.timeline({scrollTrigger:{
    trigger:"#top",
    
    scrub:true,
    yoyo:1,
    stagger:0.1,
    start:"-40% 50%",

}})
jaadu.to("#top",{

    transition:"all linear 0.1s",
    backgroundColor: "blue",
    opacity:0.9,
})
jaadu.to("#top",{
    yoyo:true,
    opacity:0.9,
    transition:"all linear 0.1s",
    backgroundColor: "white",
})
jaadu.to("#top",{
    boxShadow:" inset 20px 20px  20px black",
    transition:"all linear 3s",
    backgroundColor:"black",
    opacity:0.9,
})




// var pagal1 = document.querySelector("#pagal1")

// var cent = document.querySelector("#center")
// var pagal = document.querySelector("#pagal")

// pagal1.addEventListener("mousemove",()=>{

//     gsap.to("#center",{
//         x:500,
//     })
// })



