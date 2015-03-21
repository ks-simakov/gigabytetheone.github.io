$ = jQuery;

$(function () {

  $('body').scrollspy({
    offset: 70
  });

  $('.scrollspy').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          var pos = target.offset().top;
          if ($('#mainHeader').outerHeight() == 0) {
            pos -= $('.navbar-fixed-top').outerHeight();
          }
          $('html,body').animate({
            scrollTop: pos
          }, 600);

          if (!$(this).attr('data-toggle')) {
            return false;
          }
        }
      }
  });


});

// <a href='' target='_blank'></a><br><a href='' target='_blank'></a>
var data = {
  "budget": {
    "type": "ipad",
    "name": "\"Open Budget\" app prototype",
    "des": "Application with Moscow budget data, analytics, data visualizers and maps<br><span class=\"point\">Offline data cache with SQLite</span><span class=\"point\">Building interactive diagrams</span><span class=\"point\">Building data grids</span><br>Used technologies: Objective-C, CoreData, Raw SQLite",
    "year": "2012",
    "client": "IT department of Moscow via JSC Prognoz",
    "img": [
            "assets/img/slides/open-budget-1.png",
            "assets/img/slides/open-budget-2.png",
            "assets/img/slides/open-budget-3.png"
    ]
  },
  "rionovo": {
    "type": "iphone",
    "name": "RioNovo",
    "des": "Inhouse app for salesmen of building company in Brazil<br><span class=\"point\">Material design</span><span class=\"point\">Server API</span><span class=\"point\">Offline cache</span><br>Used technologies: Objective-C, MagicalRecord (CoreData)",
    "year": "2015",
    "client": "RioNovo. Brazil",
    "img": [
            "assets/img/slides/rionovo-1.png",
            "assets/img/slides/rionovo-2.png",
            "assets/img/slides/rionovo-3.png",
            "assets/img/slides/rionovo-4.png",
            "assets/img/slides/rionovo-5.png",
            "assets/img/slides/rionovo-6.png",
            "assets/img/slides/rionovo-7.png"
    ]
  },
  "on": {
    "type": "iphone",
    "name": "On.com",
    "des": "ON.com is the newest way to meet people through photos. Like, comment, & send private messages with locals in your area and around the world.<br><br><a href='http://on.com' target='_blank'>http://on.com</a><br><a href='https://itunes.apple.com/us/app/on.com-meet-chat-photos/id582052390' target='_blank'>https://itunes.apple.com/us/app/on.com-meet-chat-photos/id582052390</a>",
    "year": "2014-2015",
    "client": "On.com via TopTal",
    "img": [
            "assets/img/slides/on.com-1.png",
            "assets/img/slides/on.com-2.png",
            "assets/img/slides/on.com-3.png",
            "assets/img/slides/on.com-4.png",
            "assets/img/slides/on.com-5.png"
    ]
  },

  "friskee": {
    "type": "iphone",
    "name": "Friskee",
    "des": "Friskee is a fun cool app that lets you share photos with people you match with. Swipe right to like someone or swipe left to skip. Only see people near you who are also playing the game. It's the most fun you will ever have meeting fun new people.<br><br><a href='http://getfriskee.com' target='_blank'>http://getfriskee.com</a><br><a href='https://itunes.apple.com/us/app/friskee/id910626301' target='_blank'>https://itunes.apple.com/us/app/friskee/id910626301</a>",
    "year": "2014-2015",
    "client": "Global Personals via TopTal",
    "img": [
            "assets/img/slides/Friskee-1.png",
            "assets/img/slides/Friskee-2.png",
            "assets/img/slides/Friskee-3.png",
            "assets/img/slides/Friskee-4.png"
    ]
  },

  "stunr": {
    "type": "iphone",
    "name": "Stunr",
    "des": "Stunr is a fun cool app for gay men that lets you share photos with people you match with. Swipe right to like someone or swipe left to skip. Only see guys near you who are also playing the game. It's the most fun you will ever have meeting fun new people.<br><br><a href='http://www.stunr.com' target='_blank'>http://www.stunr.com</a><br><a href='https://itunes.apple.com/us/app/stunr-dating-for-gay-men/id911817123' target='_blank'>https://itunes.apple.com/us/app/stunr-dating-for-gay-men/id911817123</a>",
    "year": "2014-2015",
    "client": "Global Personals via TopTal",
    "img": [
            "assets/img/slides/stunr-1.png",
            "assets/img/slides/stunr-2.png",
            "assets/img/slides/stunr-3.png",
            "assets/img/slides/stunr-4.png"
    ]
  },
  
  "fns": {
    "type": "ipad",
    "name": "Business registration app",
    "des": "App allows users send documents to the Federal Tax Service for registering their own business<br><br><a href='https://itunes.apple.com/ru/app/registracia/id566319658?mt=8' target='_blank'>https://itunes.apple.com/ru/app/registracia/id566319658?mt=8</a>",
    "year": "2012",
    "client": "The Federal Tax Service via JSC Prognoz",
    "img": [
            "assets/img/slides/fns-1.png",
            "assets/img/slides/fns-2.png",
            "assets/img/slides/fns-3.png",
            "assets/img/slides/fns-4.png"
    ]
  },

  "caliente": {
    "type": "iphone",
    "name": "Caliente",
    "des": "Caliente is the #1 Latino dating app with MORE dates & relationships than all the rest.<br><br><a href='http://www.caliente.com' target='_blank'>http://www.caliente.com</a><br><a href='https://itunes.apple.com/us/app/caliente-latin-dating-spanish/id682018891' target='_blank'>https://itunes.apple.com/us/app/caliente-latin-dating-spanish/id682018891</a>",
    "year": "2014-2015",
    "client": "Global Personals via TopTal",
    "img": [
            "assets/img/slides/caliente-1.png",
            "assets/img/slides/caliente-2.png",
            "assets/img/slides/caliente-3.png",
            "assets/img/slides/caliente-4.png"
    ]
  }
  
};

$(document).ready(function() {
  
  $('.mobile_app').on('click', function() {
    var project = $(this).attr('id');
    $('#carousel .carousel-inner').html('');
    if (data[project].type == 'ipad') {
      $.each(data[project].img, function(i){
        $('<div>').appendTo('#carousel .carousel-inner').addClass('item');
        $('<img>').appendTo('#carousel .carousel-inner .item:last-child').attr('src', data[project].img[i]);
      })
    } if (data[project].type == 'iphone') {
      $.each(data[project].img, function(i){
        if (( i + 1 ) % 2) {
          $('<div>').appendTo('#carousel .carousel-inner').addClass('item');
          $('<img>').appendTo('#carousel .carousel-inner .item:last-child').attr('src', data[project].img[i]);
          i++;
          $('<img>').appendTo('#carousel .carousel-inner .item:last-child').attr('src', data[project].img[i]);
        };
        $('#carousel .carousel-inner .item img').css('max-width', '50%').css('display', 'inline-block');
      })
    };
    $('.carousel-inner .item:first-child').addClass('active');
    $('.modal_window .aboutApp h1').text(data[project].name);
    $('.modal_window .aboutApp .des').html(data[project].des);
    $('.modal_window .aboutApp .year span').text(data[project].year);
    $('.modal_window .aboutApp .client span').text(data[project].client);
    $('.modal_bg').css('display', 'block');
    $('.modal_window').css('display', 'block');
    $('#carousel').carousel();
  });

  $('.close_modal').on('click', function() {
    close_modal()
  });

  $('.modal_bg').on('click', function() {
    close_modal()
  });

  function close_modal() {
    $('.modal_bg').css('display', 'none');
    $('.modal_window').css('display', 'none');
  }
});