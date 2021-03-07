const travelimage = {
  LasVegas: ["LV1.JPG","LV2.JPG", "LV3.JPG", "LV4.JPG", "LV5.JPG", "LV6.JPG", "LV7.JPG","LV8.JPG", "LV9.JPG", "LV10.JPG", "LV11.JPG", "LV12.JPG"
  ],

  Banff: ["Ban1.JPG","Ban2.JPG","Ban3.JPG","Ban4.JPG","Ban5.JPG","Ban6.JPG","Ban7.JPG","Ban8.JPG"
  ],

  Bali: ["Bali1.JPG","Bali2.JPG","Bali3.JPG","Bali4.JPG","Bali5.JPG","Bali6.JPG","Bali7.JPG","Bali8.JPG","Bali9.JPG","Bali10.JPG","Bali11.JPG","Bali12.JPG","Bali13.JPG","Bali14.JPG"
  ],

  Hawaii: [
    "Hawaii1.JPG","Hawaii2.JPG","Hawaii3.JPG","Hawaii4.JPG","Hawaii5.JPG","Hawaii6.JPG","Hawaii7.JPG","Hawaii8.JPG","Hawaii9.JPG","Hawaii10.JPG","Hawaii11.JPG","Hawaii12.JPG"
  ]

}

//make and get LasVegas photo
const modalSlider1 = document.querySelector('.modal-slider1')
function getLasVegasphotos() {
  for (let i = 0; i < travelimage.LasVegas.length; i++) {
    console.log(travelimage.LasVegas[i])
    // const element = array[i];
    let modalimage = document.createElement('div');
    modalimage.classList.add('modal-img');
    // console.log(modalimage)
    modalimage.innerHTML = `
    <img src="img/LasVegas/${travelimage.LasVegas[i]}" alt="LasVegas photo">
    `
    modalSlider1.appendChild(modalimage);

  }
}


const modalSlider2 = document.querySelector('.modal-slider2')
function getBanffphotos() {
  for (let i = 0; i < travelimage.Banff.length; i++) {
    
    let banffInner = document.createElement('div');
    banffInner.classList.add('banff-div');
    banffInner.innerHTML = `
    <img src="img/Banff/${travelimage.Banff[i]}" alt="Banff photo">
    `
    modalSlider2.appendChild(banffInner);
    // console.log(banffInner)

  }
}


//get Bali photo
const modalSlider3 = document.querySelector('.modal-slider3')
function getBaliphotos() {
  for (let i = 0; i < travelimage.Banff.length; i++) {
    
    let baliInner = document.createElement('div');
    baliInner.classList.add('banff-div');
    baliInner.innerHTML = `
    <img src="img/Bali/${travelimage.Bali[i]}" alt="Bali photo">
    `
    modalSlider3.appendChild(baliInner);
    console.log(baliInner)

  }
}


//get Hawaii photos
const modalSlider4 = document.querySelector('.modal-slider4')
function getHawaiiphotos() {
  for (let i = 0; i < travelimage.Hawaii.length; i++) {
  
    let HawaiiInner = document.createElement('div');
    HawaiiInner.classList.add('banff-div');
    HawaiiInner.innerHTML = `
    <img src="img/Hawaii/${travelimage.Hawaii[i]}" alt="Hawaii photo">
    `
    modalSlider4.appendChild(HawaiiInner);

  }
}

getLasVegasphotos();
getBanffphotos();
getBaliphotos();
getHawaiiphotos();



// Lasvegas slide modal show
let dark = document.querySelector('.dark');

let scrollPos;
$(".slide-vegas").click(function() {
  scrollPos = $(window).scrollTop();
  dark.classList.add('clicked')
  $(".modal-LasVegas").fadeIn();
  $('body').addClass('fixed').css({ top: -scrollPos });
   
})

$(' #dark').click(function() {
  $('.modal-LasVegas').fadeOut();
  dark.classList.remove('clicked');
  $('body').removeClass('fixed').css({ top: 0 });
  $(window).scrollTop(scrollPos);

});

//Banff slide
$(".slide-banff").click(function() {
  scrollPos = $(window).scrollTop();
  dark.classList.add('clicked')
  $(".modal-Banff").fadeIn();
  $('body').addClass('fixed').css({ top: -scrollPos });
   
})

$(' #dark').click(function() {
  $('.modal-Banff').fadeOut();
  dark.classList.remove('clicked');
  $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
  $(window).scrollTop(scrollPos);

});


//Bali slide
$(".slide-bali").click(function() {
  scrollPos = $(window).scrollTop();
  dark.classList.add('clicked')
  $(".modal-Bali").fadeIn();
  $('body').addClass('fixed').css({ top: -scrollPos });
   
})

$(' #dark').click(function() {
  $('.modal-Bali').fadeOut();
  dark.classList.remove('clicked');
  $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
  $(window).scrollTop(scrollPos);

});

//Hawaii slide
$(".slide-hawaii").click(function() {
  scrollPos = $(window).scrollTop();
  dark.classList.add('clicked')
  $(".modal-Hawaii").fadeIn();
  $('body').addClass('fixed').css({ top: -scrollPos });
   
})

$('#dark').click(function() {
  $('.modal-Hawaii').fadeOut();
  dark.classList.remove('clicked');
  $('body').removeClass('fixed').css({ top: 0 });//
  $(window).scrollTop(scrollPos);

});


let scrollAnimationElm = document.querySelectorAll('.sa');
      let scrollAnimationFunc = function() {
  for (let i = 0; i < scrollAnimationElm.length; i++) {
    let triggerMargin = 300;
    if(window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
    
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

// var scrollAnimationElm = document.querySelectorAll('.sa');
// var scrollAnimationFunc = function() {
//   for(var i = 0; i < scrollAnimationElm.length; i++) {
//     var triggerMargin = 300;
//     if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//       scrollAnimationElm[i].classList.add('show');
//     }
//   }
// }
// window.addEventListener('load', scrollAnimationFunc);
// window.addEventListener('scroll', scrollAnimationFunc);
