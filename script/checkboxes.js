const checkboxes = document.querySelectorAll('.checkbox')

checkboxes.forEach((box) => {
	box.addEventListener('click', (e) => checkInput(e.target))
})

function checkInput(e) {
	const checkbox = e.closest('.checkbox')
	checkbox.classList.toggle('checked')
	const input = checkbox.querySelector('input')
	input.checked = !input.checked
}
