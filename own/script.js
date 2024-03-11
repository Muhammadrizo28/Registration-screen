var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });


  let arr = [
    'https://img3.akspic.ru/attachments/crops/6/2/8/9/39826/39826-astronomicheskij_obekt-kosmicheskoe_prostranstvo-kosmicheskij_polet-noch-prostranstvo-3840x2160.jpg',

    'https://img3.akspic.ru/attachments/crops/6/2/8/9/39826/39826-astronomicheskij_obekt-kosmicheskoe_prostranstvo-kosmicheskij_polet-noch-prostranstvo-3840x2160.jpg',


    'https://img3.akspic.ru/attachments/crops/6/2/8/9/39826/39826-astronomicheskij_obekt-kosmicheskoe_prostranstvo-kosmicheskij_polet-noch-prostranstvo-3840x2160.jpg',

    'https://img3.akspic.ru/attachments/crops/6/2/8/9/39826/39826-astronomicheskij_obekt-kosmicheskoe_prostranstvo-kosmicheskij_polet-noch-prostranstvo-3840x2160.jpg',

    'https://img3.akspic.ru/attachments/crops/6/2/8/9/39826/39826-astronomicheskij_obekt-kosmicheskoe_prostranstvo-kosmicheskij_polet-noch-prostranstvo-3840x2160.jpg',


  ]

  let items = document.querySelector('.swiper-pagination')

  let item = items.children

  for (let i = 0; i < item.length; i++) {

    item[i].addEventListener('change', function() {

        if (item[i].checked) {

            console.log('ggg');
        }
    })
}







