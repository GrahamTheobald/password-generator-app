const STRENGTHS = ['invalid', 'weak', 'medium', 'strong', 'super']
const bars = document.querySelectorAll('.strength__bar')
const text = document.querySelector('.strength__text')

export default function renderStrength(selections) {
	resetClasses()
	for (let i = 0; i < selections; i++) {
		classHandling(bars[i], true)
	}
	text.innerText = STRENGTHS[selections]
}

function resetClasses() {
	bars.forEach((bar) => classHandling(bar))
}
function classHandling(bar, add = false) {
	add ? bar.classList.add('full') : bar.classList.remove('full')
}
