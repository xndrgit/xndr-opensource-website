//by uzi

const left = document.getElementById("left-side");

const handleMove = e => {
    left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);

//mouse move change shitup(nav menu)
document.addEventListener('mousemove',(e)=>{
    var x =e.clientX;
    var y = e.clientY;
    console.log(x);
    console.log(y);

    if(x<=400){
        document.documentElement.style.setProperty('--color-green', '#000');
    }
    else{
        document.documentElement.style.setProperty('--color-green', '#a0e234');}
});



//split uzi and animate up

const animateuzi = () => {
    const split = new SplitText(".fancy", {
        type: "chars",
        charsClass: ".fancy"
    });


    const tl = gsap.timeline({
        delay: 0
    });

    tl.from(split.chars, {
        duration: 3,
        // opacity: 0,
        y: 200,
        stagger: 0.04,
        ease: "power4.out"
    }, 0.1);
};

const animatebutt= () => {


    const sectl = gsap.timeline({
        delay: 0.6
    });

    sectl.from('nav', {
        duration: 3,
        opacity: 0,
        y: 200,
        // stagger: 0.04,
        ease: "power4.out"
    }, 0.1);
};

window.onload =() => {
    animateuzi();
    animatebutt();
}