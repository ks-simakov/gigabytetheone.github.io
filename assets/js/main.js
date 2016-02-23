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
  "invoice": {
    "type": "mixed",
    "name": "Invoice Ahead",
    "des": "Invoice ahead will assist you to create professional looking invoices on the go.<br>Never waste your precious time by doing unproductive paperwork.<br>This elegantly simple and innovative app will do it all for you and even do it better.<br><br><a target='_blank' href='https://itunes.apple.com/ru/app/invoice-ahead-create-invoices/id924725128?l=en&mt=8'>https://itunes.apple.com/ru/app/invoice-ahead-create-invoices/id924725128?l=en&mt=8</a>",
    "year": "2016",
    "client": "<a target='_blank' href='http://www.btoj.com.au'>B to J Apps. Sydney, AU</a>",
    "img": [
            {
              "image": "assets/img/slides/invoice-1.png",
              "type": "ipad"
            },
            {
              "image": "assets/img/slides/invoice-2.png",
              "type": "ipad"
            },
            {
              "image": "assets/img/slides/invoice-3.png",
              "type": "iphone"
            },
            {
              "image": "assets/img/slides/invoice-4.png",
              "type": "iphone"
            }
    ]
  },
  "ppix": {
    "type": "iphone",
    "name": "PostalPix",
    "des": "PostalPix is a free app that lets you order real photo prints of pictures from your iPhone and Instagram.<br>With PostalPix, you can order prints that were captured with your iPhone or uploaded to your Instagram account. In 24-48 hours.<br><br><a href='http://www.postalpix.com' target='_blank'>http://www.postalpix.com/</a><br><a href='https://itunes.apple.com/us/app/postalpix/id408642635?mt=8' target='_blank'>https://itunes.apple.com/us/app/postalpix/id408642635?mt=8</a>",
    "year": "2015",
    "client": "PostalPix via <a href='http://www.toptal.com/#discover-prodigious-architects' target='_blank'>TopTal</a>",
    "img": [
            {
              "image": "assets/img/slides/ppix-1.png",
              "type": "iphone"
            },
            {
              "image": "assets/img/slides/ppix-2.png",
              "type": "iphone"
            }
    ]
  },
  "rionovosac": {
    "type": "iphone",
    "name": "Rio Novo SAC",
    "des": "Rio Novo SAC is the app for housemates.<br><br>With Rio Novo SAC you can:<br><span class=\"point\">Call warranty repairs</span><span class=\"point\">Track plans</span><span class=\"point\">Track tickets schedule</span><span class=\"point\">Monitor your calls</span><span class=\"point\">Watch documents</span><br><br><a href='https://itunes.apple.com/us/app/rio-novo-sac/id1057928932?ls=1&mt=8' target='_blank'>https://itunes.apple.com/us/app/rio-novo-sac/id1057928932?ls=1&mt=8</a>",
    "year": "2015",
    "client": "RioNovo. Brazil",
    "img": [
            {
              "image": "assets/img/slides/rionovosac-1.png",
              "type": "iphone"
            },
            {
              "image": "assets/img/slides/rionovosac-2.png",
              "type": "iphone"
            },
            {
              "image": "assets/img/slides/rionovosac-3.png",
              "type": "iphone"
            }
    ]
  },
  "events": {
    "type": "mixed",
    "name": "Events Apps",
    "des": "App made for people participating different conferences.<br>In these application you will find:<br><br><span class=\"point\">Information on Congress and organization</span><span class=\"point\">Iterative plan of the stands</span><span class=\"point\">Complete schedule</span><span class=\"point\">Exhibitor List</span><span class=\"point\">Social Agenda</span><span class=\"point\">Tourist information and Entertainment</span><span class=\"point\">News & Announcements Congress</span><br>And beyond that:<br><span class=\"point\">Check lectures as favorites to save them on your calendar</span><span class=\"point\">Make notes for each lecture directly on mobile</span><span class=\"point\">Share your lecture and notes with friends by mail, SMS or Whatsapp</span><br><br>Applications:<br><br>CBSoja<br><a target='_blank' href='https://itunes.apple.com/us/app/cbsoja/id988943094?ls=1&mt=8'>https://itunes.apple.com/us/app/cbsoja/id988943094?ls=1&mt=8</a><br><br>CBSementes<br><a target='_blank' href='https://itunes.apple.com/us/app/cbsementes/id1025021190?mt=8'>https://itunes.apple.com/us/app/cbsementes/id1025021190?mt=8</a><br><br>Abraves 2015<br><a target='_blank' href='https://itunes.apple.com/us/app/abraves-2015/id1025023445?mt=8'>https://itunes.apple.com/us/app/abraves-2015/id1025023445?mt=8</a><br><br>Epilepsy 2015<br><a target='_blank' href='https://itunes.apple.com/us/app/epilepsy-2015/id1044654365?mt=8'>https://itunes.apple.com/us/app/epilepsy-2015/id1044654365?mt=8</a>",
    "year": "2015",
    "client": "Brazil",
    "img": [
            {
              "image": "assets/img/slides/events-1.png",
              "type": "ipad"
            },
            {
              "image": "assets/img/slides/events-2.png",
              "type": "iphone"
            },
            {
              "image": "assets/img/slides/events-3.png",
              "type": "iphone"
            },
            {
              "image": "assets/img/slides/events-4.png",
              "type": "ipad"
            },
            {
              "image": "assets/img/slides/events-5.png",
              "type": "iphone"
            },
            {
              "image": "assets/img/slides/events-6.png",
              "type": "iphone"
            }
    ]
  },
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
    "client": "On.com via <a href='http://www.toptal.com/#discover-prodigious-architects' target='_blank'>TopTal</a>",
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
    "client": "Global Personals via <a href='http://www.toptal.com/#discover-prodigious-architects' target='_blank'>TopTal</a>",
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
    "client": "Global Personals via <a href='http://www.toptal.com/#discover-prodigious-architects' target='_blank'>TopTal</a>",
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
    "client": "Global Personals via <a href='http://www.toptal.com/#discover-prodigious-architects' target='_blank'>TopTal</a>",
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
    var type = data[project].type;

    var iPhoneIndex = 0;

    if (data[project].img.length <= 2) {
      $('.carousel-control').hide();
    }
    else {
      $('.carousel-control').show();
    }
    // $('.carousel-control').hidden = data[project].img.length <= 2;

    $.each(data[project].img, function(i){
      var image = data[project].img[i];
      var imageUrl = image;
      if (image.type) {
        type = image.type;
      }
      if (image.image) {
        imageUrl = image.image;
      }
      if (type == 'ipad') {
        iPhoneIndex = 0;
        $('<div>').appendTo('#carousel .carousel-inner').addClass('item');
        $('<img>').appendTo('#carousel .carousel-inner .item:last-child').attr('src', imageUrl);
      }
      else if (type == 'iphone') {
        if (iPhoneIndex % 2 == 0) {
          $('<div>').appendTo('#carousel .carousel-inner').addClass('item'); 
        }
        var element = $('<img>').appendTo('#carousel .carousel-inner .item:last-child').attr('src', imageUrl);
        element.css('max-width', '50%').css('display', 'inline-block');
        iPhoneIndex++;
      }
    });

    $('.carousel-inner .item:first-child').addClass('active');
    $('.modal_window .aboutApp h1').text(data[project].name);
    $('.modal_window .aboutApp .des').html(data[project].des);
    $('.modal_window .aboutApp .year span').text(data[project].year);
    $('.modal_window .aboutApp .client span').html(data[project].client);
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