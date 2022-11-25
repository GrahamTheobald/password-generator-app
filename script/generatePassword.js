const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '0123456789'
const SYMBOLS = `!"#$%&'()*+,-./:;<=>?@[\\]^_{|}~` + '`'

const STRINGS = {
	uppercase: 'uppercase',
	lowercase: 'lowercase',
	numbers: 'numbers',
	symbols: 'symbols',
}

export default function generatePassword(
	length,
	uppercase,
	lowercase,
	numbers,
	symbols
) {
	let { password, USING, remaining } = initiatePassword(
		parseInt(length),
		uppercase,
		lowercase,
		numbers,
		symbols
	)

	while (remaining > 0) {
		const type = USING[randomNumber(USING.length) - 1]
		password = addToPassword(type, password)
		remaining -= 1
	}

	return randomiseOrder(password)
}

function randomiseOrder(password) {
	let randomised = ''
	while (password) {
		const index = randomNumber(password.length - 1)
		const letter = password.slice(index, index + 1)
		randomised += letter
		password = password.replace(letter, '')
	}
	return randomised
}

function initiatePassword(length, uppercase, lowercase, numbers, symbols) {
	const USING = []
	let remaining = length
	let password = ''

	if (uppercase) {
		password = addToPassword(STRINGS.uppercase, password)
		USING.push(STRINGS.uppercase)
		remaining -= 1
	}
	if (lowercase) {
		USING.push(STRINGS.lowercase)
		password = addToPassword(STRINGS.lowercase, password)
		remaining -= 1
	}
	if (numbers) {
		USING.push(STRINGS.numbers)
		password = addToPassword(STRINGS.numbers, password)
		remaining -= 1
	}
	if (symbols) {
		USING.push(STRINGS.symbols)
		password = addToPassword(STRINGS.symbols, password)
		remaining -= 1
	}

	return { password, USING, remaining }
}

function randomNumber(max) {
	return Math.ceil(Math.random() * max)
}

function addToPassword(type, password) {
	switch (type) {
		case STRINGS.uppercase: {
			password += UPPERCASE[randomNumber(UPPERCASE.length) - 1]
			break
		}
		case STRINGS.lowercase: {
			password += LOWERCASE[randomNumber(LOWERCASE.length) - 1]
			break
		}
		case STRINGS.numbers: {
			password += NUMBERS[randomNumber(NUMBERS.length) - 1]
			break
		}
		case STRINGS.symbols: {
			password += SYMBOLS[randomNumber(SYMBOLS.length) - 1]
			break
		}
	}
	return password
}
