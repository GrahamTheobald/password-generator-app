const range = document.querySelector('#length')
const text = document.querySelector('.form__length')

range.addEventListener('input', handleInput)

function handleInput() {
	updateBackground()
	updateText()
}

function updateBackground() {
	const percent = ((range.value - range.min) / (range.max - range.min)) * 100
	range.style.backgroundSize = `${percent}%`
}

function updateText() {
	text.innerText = range.value
}
