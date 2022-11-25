import './checkboxes.js'
import './rangeSlider.js'
import generatePassword from './generatePassword.js'
import renderStrength from './strength.js'

const upperCase = document.querySelector('#uppercase')
const lowerCase = document.querySelector('#lowercase')
const numbers = document.querySelector('#numbers')
const symbols = document.querySelector('#symbols')
const length = document.querySelector('#length')

const copy = document.querySelector('.result__copy')
const submit = document.querySelector('.form__submit')
const passwordDiv = document.querySelector('.result__password')

submit.addEventListener('click', (e) => {
	e.preventDefault()
	const selections = [
		upperCase.checked,
		lowerCase.checked,
		numbers.checked,
		symbols.checked,
	]

	const strength = selections.reduce((total, s) => {
		return s ? total + 1 : total
	}, 0)
	renderStrength(strength)

	if (!selections.some((s) => s)) return

	const password = generatePassword(length.value, ...selections)
	passwordDiv.innerText = password
})

copy.addEventListener('click', () => {
	navigator.clipboard.writeText(passwordDiv.innerText)
	copy.classList.add('copied')
	setTimeout(() => {
		copy.classList.remove('copied')
	}, 3000)
})
