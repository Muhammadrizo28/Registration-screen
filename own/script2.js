
let colors_arr = [

    'change 1s linear forwards',
    'change2 1s linear forwards',
    'change3 1s linear forwards'
]

let img_box = document.querySelector('.img_box')


let color_box = document.querySelector('.colors')

let color = color_box.children

for (let i = 0; i < color.length; i++) {

    color[i].onclick = () => {

        img_box.style.animation = colors_arr[i]

    }

}

let switcherl = document.querySelector('.switcher2')

switcherl.onclick = () => {

    let circle = switcherl.children
    switcherl.classList.toggle('switcher_change')
    circle[0].classList.toggle('circle_right')

 

    window.location = 'file:///C:/Users/%D0%BC%D1%83%D1%8B%D0%B0%D1%86%D0%B0/Desktop/own/own/index.html'

}





