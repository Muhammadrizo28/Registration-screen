let switchers = document.querySelector('.switcher_box')

let imeg = document.querySelector('.imeg')

let prise_txt = document.querySelector('.prise')

let km_txt = document.querySelector('.speed')


let switcher = switchers.children



var prise = 89990

let km = 750

let temperature = 20

let n = 0


for (let i = 0; i < switcher.length; i++) {

    switcher[i].onclick = () => {

        let circle = switcher[i].children
        switcher[i].classList.toggle('switcher_change')
        circle[0].classList.toggle('circle_right')

        let check = switcher[i].classList.contains('switcher_change')

        
        
        if(i == 1 && check == true) {

            prise = parseFloat(prise) + 10000

            km = km + 100

            prise = prise.toString()

            prise_txt.innerText = '$' + prise.slice(0, 2) + ',' + prise.slice(2)

            km_txt.innerText = km + 'км'


        } 
        else {
            prise = 89990

            km = 750
            prise = prise.toString()
            prise_txt.innerText = '$' + prise.slice(0, 2) + ',' + prise.slice(2)
            km_txt.innerText = km + 'км'
        }

        if (i == 2) {

            switcher[i].classList.toggle('.switcher_change')
            circle[0].classList.toggle('.circle_right')

            window.location = 'file:///C:/Users/%D0%BC%D1%83%D1%8B%D0%B0%D1%86%D0%B0/Desktop/own/own/index2.html'

            

        }

    }
  
}





let temperature_txt = document.querySelector('.tempirature_option')

let buttons2 = document.querySelector('.btns_tb2')

let button2 = buttons2.children

for (let i = 0; i < button2.length; i++) {

    button2[i].onclick = () => {

        if (temperature < 16) {
            temperature = 16
        }
        else if (temperature > 29) {
            temperature = 29
        }

        temperature = temperature + 1

        temperature_txt.innerText = temperature + '°'

        if(i == 1) {

            temperature = temperature - 2

            temperature_txt.innerText = temperature + '°'

        }

    }
}


let buttons = document.querySelector('.btns_tb')

let speed = 60

let button = buttons.children

let speed_txt = document.querySelector('.speed_option')

let wheel = document.querySelector('.wheel')

let wheel2 = document.querySelector('.wheel2')



let rotate_anim = [

    'rotate 3s linear infinite',

    'rotate 1.5s linear infinite',

    'rotate 0.5s linear infinite'
]


for (let i = 0; i < button.length; i++) {

    button[i].onclick = () => {

        if (speed > 140) {
            speed = 140

            km = 660

        }
        else if (speed < 40) {
            speed = 40

            km = 780
        }

        speed = speed + 10
        speed_txt.innerText = speed + 'км/ч'
        
        km = km - 10
        

        km_txt.innerText = km + 'км'
        


        if (i == 1) {

            speed = speed - 20

            km = km + 20

            km_txt.innerText = km + 'км'

            speed_txt.innerText = speed + 'км/ч'

        }

        if (speed < 60 && speed > 30) {

            wheel.style.animation = rotate_anim[0]
            wheel2.style.animation = rotate_anim[0]
        }
        else if (speed < 100 && speed > 60) {

            wheel.style.animation = rotate_anim[1]
            wheel2.style.animation = rotate_anim[1]
        }
        else if (speed < 150 && speed > 100) {

            wheel.style.animation = rotate_anim[2]
            wheel2.style.animation = rotate_anim[2]
        }

    

    }
}



let buttons3 = document.querySelector('.btns_tb3')

let button3 = buttons3.children

let disks = 19

let disk_txt = document.querySelector('.disks_option')

for (let i = 0; i < button3.length; i++) {

    button3[i].onclick = () => {

        if(i == 0) {

            disks = 21
            disk_txt.innerText  = disks

            wheel.style.backgroundSize = '115px'
            wheel2.style.backgroundSize = '115px'


        }
        else {

            disks = 19

            disk_txt.innerText  = disks

            wheel.style.backgroundSize = '110px'
            wheel2.style.backgroundSize = '110px'
        }
    }
}






