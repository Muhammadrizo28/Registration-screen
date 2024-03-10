let switchers = document.querySelector('.switcher_box')

let switcher = switchers.children


for (let i = 0; i < switcher.length; i++) {

    switcher[i].onclick = () => {

       

        let circle = switcher[i].children

        circle[0].classList.toggle('circle_right')

    }
}