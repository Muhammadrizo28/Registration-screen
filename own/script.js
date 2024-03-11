var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

let paginations = document.querySelector('.swiper-pagination')

let pagination = paginations.children

let words = document.querySelector('.names')

let word = words.children

for (let i = 0; i < word.length; i++) {

    word[i].onclick = () => {

        pagination[i].click()

    }

    word[i].onmouseover = () => {

        word[i].style.color = 'rgb(23, 131, 248)'
        word[i].style.fontWeight = '600'
    }

    word[i].onmouseleave = () => {

        word[i].style.color = 'black'
        word[i].style.fontWeight = '200'
    }
}