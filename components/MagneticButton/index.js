import gsap from 'gsap';
export function magneticButtonInit(){
    var mArea = document.querySelector('#magnetic-area');

// 1. Set the function and variables
    function parallaxIt(e, target, movement = 1){
        var boundingRect = mArea.getBoundingClientRect();
        var relX = e.pageX - boundingRect.left;
        var relY = e.pageY - boundingRect.top;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        gsap.to(target, {
            x: (relX - boundingRect.width/2) * movement,
            y: (relY - boundingRect.height/2 - scrollTop) * movement,
            ease: "power1",
            duration: 0.6
        });
    }

// 2. Call the function
    function callParallax(e){
        parallaxIt(e, '#magnetic-content');
    }


    mArea.addEventListener('mousemove', function(e){
        callParallax(e);
    });

    mArea.addEventListener('mouseleave', function(e){
        gsap.to('#magnetic-content', {
            scale:1,
            x: 0,
            y: 0,
            ease: "power3",
            duration: 0.6
        });
    });
}