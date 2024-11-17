$('.icone').on('click', function() {

  if($('.submenu').css('display') === 'none') {
    $('.submenu').css('display',' flex');
    $('.icone').css({'transform' : 'rotate(180deg)'});
  } else {
    $('.submenu').css('display',' none');
    $('.icone').css({'transform' : 'rotate(0deg)'});
  }
});

$('.owl-one').owlCarousel({
  loop: false,
  margin: 35,
  nav: true,
  dots: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 9
    }
  }
});

$('.owl-two').owlCarousel({
  loop: true,
  margin: 35,
  nav: true,
  dots: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
});

$('.owl-three').owlCarousel({
  loop: false,
  margin: 35,
  nav: true,
  dots: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})