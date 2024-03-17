let email = document.querySelector('.email')

let password = document.querySelector('.password')

let checkbox = document.querySelector('.check')

let mark = document.querySelector('.mark')

let txt = document.querySelector('.txt')

let form = document.querySelector('form')

let button = document.querySelector('.but')

let inputs = document.querySelectorAll('input')

for (let i = 0; i < inputs.length; i++) {

	inputs[i].addEventListener('input', () => {

		if(inputs[i].value !== '') {

			let names = inputs[i].name + '2'

			inputs[i].classList.add(names)
		}
		else {

			let names = inputs[i].name + '2'

			inputs[i].classList.remove(names)

		}
	})

}




email.onclick = () => {

	

	

	if(!checkbox.classList.contains('check2')) {

		button.disabled = true
		button.style.opacity = '0.5'
		button.style.cursor = 'default'
	}
	else {

		button.disabled = false
		button.style.opacity = '1'

	}
}

password.onclick = () => {


	if(!checkbox.classList.contains('check2')) {

		button.disabled = true
		button.style.opacity = '0.5'
		button.style.cursor = 'default'
	}
	else {

		button.disabled = false
		button.style.opacity = '1'

	}
}

checkbox.onclick =  () => {

	mark.classList.toggle('mark2')
	checkbox.classList.toggle('check2')
	txt.classList.toggle('txt2')

	if(!checkbox.classList.contains('check2')) {

		button.disabled = true
		button.style.opacity = '0.5'
		button.style.cursor = 'default'

	}
	else {

		button.disabled = false
		button.style.opacity = '1'

	}


}

button.onclick = () => {

	if(!checkbox.classList.contains('check2')) {

		button.disabled = true
		button.style.opacity = '0.5'
		button.style.cursor = 'default'

	}
	else {

		button.disabled = false
		button.style.opacity = '1'

	}

}

let info = {}

form.onsubmit = (e) => {

	e.preventDefault()

	let fm = new FormData(form)

	fm.forEach((value, key) => {

		if (info[key] !== value) {

			info[key] = value
			
			console.log(info);
		}

	})

}


