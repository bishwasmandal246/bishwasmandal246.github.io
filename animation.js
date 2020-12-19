const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');


    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        }
        else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + .5}s`;
        }
    });

    burger.classList.toggle('toggle');


});
};
navSlide();
    
    
$(document).ready(function () {
	$('.js-trial1').click(function (){
		$('html,body').animate({scrollTop: $('.js-trial2').offset().top},800);
	});
    
    $('.js-trial11').click(function (){
		$('html,body').animate({scrollTop: $('.js-trial22').offset().top},1200);
	});
       
       
var textWrapper = document.querySelector('.logo1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.logo1 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
})
    .add({
    targets: '.logo1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }); 

});


$(document).ready(function() {
    $('.try1').click(function() {
            $('.myDIV1').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try2').click(function() {
            $('.myDIV2').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try3').click(function() {
            $('.myDIV3').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try4').click(function() {
            $('.myDIV4').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try5').click(function() {
            $('.myDIV5').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try6').click(function() {
            $('.myDIV6').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try7').click(function() {
            $('.myDIV7').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try8').click(function() {
            $('.myDIV8').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try9').click(function() {
            $('.myDIV9').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try10').click(function() {
            $('.myDIV10').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try11').click(function() {
            $('.myDIV11').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try12').click(function() {
            $('.myDIV12').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try13').click(function() {
            $('.myDIV13').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try14').click(function() {
            $('.myDIV14').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try15').click(function() {
            $('.myDIV15').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try16').click(function() {
            $('.myDIV16').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try17').click(function() {
            $('.myDIV17').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try18').click(function() {
            $('.myDIV18').slideToggle("down");
    });
});

$(document).ready(function() {
    $('.try19').click(function() {
            $('.myDIV19').slideToggle("down");
    });
});

