

window.onload=function(){
    const mybutton1 = document.getElementById("book");
    mybutton1.addEventListener("click", function(){
        window.open("Momswebsite3.html")
        window.close("MomsWebsite1.html")
    })

};




const mybutton2 = document.getElementById("reviews");
//function newopening(){
//    window.open("Momswebsite2.html")
//}

mybutton2.addEventListener("click", function(){
    window.open("Momswebsite2.html")
});


const homebutton = document.getElementById("home");
homebutton.addEventListener("click", function(){
    window.open("MomsWebsite1.html")
    console.log("hello")
});

//const goeshome = document.getElementById("goes");
//goeshome.addEventListener("click", function(){
//    window.open("MomsWebsite1.html")
//    console.log("hello")
//})









