let buttons = document.querySelector('.color_btns')

let laptop = document.querySelector('.laptop')

let name = document.querySelector('.color_txt')

let prise_txt = document.querySelector('.prise')


let arr = {

    white : 'https://s3-alpha-sig.figma.com/img/9f71/2fbe/77eca8b2420bb1d5e95728168d6e6c92?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qD~ABhzq1sN00bvIKMEIOarMZfejEy-c6PaXBgaVGiNHDAHCZkk4XCHzvy1Ko7ajwMSIuAK4sFIE0Jw9wxTvZvEtX6yy0XZYspWaau4hBu-cSORXlYeoMUvJQV275LDWAFYPoP-Yq7HdEB7qHz3vCjsCmU-mgcEtxudrpforXUWlJ1oMnGIMpDT3JQAyY0ovYGvWyzk32C3YWLGNU~aep7akPTRnKhJ0S6nYNxdct~PPMJG3EOFL6XiGZSCdwt6k3Ye62a~riIIHyAvC9rIVdkBQtXREMssMD5pkC1on5U4VQ-faWS1PPJFqZueKrEZiNyf0myqaf0cJPC1FSeUJVQ__',

    gray : 'https://s3-alpha-sig.figma.com/img/9581/edda/696f087203dbc41896f9d180cf9d0435?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bh1b~jLJZ-KH2CyVbLIWomULpS-GSqx9uG3QNGnm32klleQCr8Pv6GUzWn8JpxTXC578wQrWKw7gKZEVg2KJUdCoZQkLrb17Q0iFgEsrcZjLdizzIPYO3PkI1x44Xq9LWmHg0qwrnIrtDAbUahHnRp4wvmjBBmw26P4uibErDy6IUFm40SwflYoQFDNSgJ1Zh7lJnJF88YVv8C7ueFHD0skJVCIXHJQ7no7K7nhIDd89i8rDtUiUpOSrbzCgWRf0I1f9py-Dp2UsI5CprqH5otlo6k2hi69Xx45pB6iwHCxehuUFOp8u~ZaLWAiLFkUOOUwP6pYqz9Nt79Cv-aDj-w__'

}

let button = buttons.children

for (let i = 0; i < button.length; i++) {

    button[i].onclick = () => {

        for(let item of button) {

            item.style.backgroundColor = '#0071E3'
            item.style.color = 'white'
            item.style.cursor = 'pointer'

        }

        button[i].style.backgroundColor = '#CFE7FF'
        button[i].style.color = '#797979'
        button[i].style.cursor = 'default'

        for (let obj in arr) {

            
            if (button[i].id == obj) {

                name.innerText = obj.charAt().toUpperCase() + obj.slice(1)   //// name
                
                laptop.style.backgroundImage = 'url('+ arr[obj] +')'
                
            }
        }
        
    }
}


let memory_box = document.querySelector('.box_memory')

let n = 1999

let prises = [

    0,
    200,
    600,
    1200
]

let btns_memory = memory_box.children

for (let j = 0; j < btns_memory.length; j++) {

    btns_memory[j].onclick = () => {

        for (let i = 0; i < btns_memory.length; i++) {

            btns_memory[i].style.border = '3px solid #CFE7FF'
            btns_memory[i].style.cursor = 'pointer'

        }

        btns_memory[j].style.border = '3px solid #0071E3'
        btns_memory[j].style.cursor = 'default'

        n = 1999

        n = n + prises[j]

        let textOfNum = n.toString()

        console.log(textOfNum);

        n = '$' + textOfNum.charAt() + ',' + textOfNum.slice(1) 

        prise_txt.innerText = n

    }
}
 



