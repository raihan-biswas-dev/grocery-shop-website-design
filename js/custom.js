$(function(){

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade:true,
        speed:1500,
        arrows:false,
      });

    $('.feed-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:1500,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
      });

      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, -110);
    });

      $('.side-click').click(function(){

        $('.sidebar').toggleClass('sideopen');
        $('.side-click').toggleClass('fa-bars');
        $('.side-click').toggleClass('sideopen2');
      });

      $('.venobox').venobox(); 

      //wow
      
      new WOW().init();

      //filter-gallery

      var containerEl = document.querySelector('.gal-main');

      var mixer = mixitup(containerEl);


});

$(function(){

  // back-to-top

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop:0}, 1000);
});

$(window).scroll(function(){

  var scrolling = $(this).scrollTop();

  if(scrolling > 200){
    $('.back-to-top').fadeIn(500);

  }
  else{
    $('.back-to-top').fadeOut(500);
  }

  if(scrolling > 50)
  $('.navbar').addClass('bg');

  else{
    $('.navbar').removeClass('bg');
  }

});



$(".typed").typed({
  strings: ["Made Easy.", "Make Happy.", "Made Mode."],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 30,
  // time before typing starts
  startDelay: 1200,
  // backspacing speed
  backSpeed: 20,
  // time before backspacing
  backDelay: 500,
  // loop
  loop: true,
  // false = infinite
  loopCount: 5,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});

});

