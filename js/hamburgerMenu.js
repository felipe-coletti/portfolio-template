const openMenuButton = document.getElementById('open-hamburger-menu')
const menuBackdrop = document.getElementById('menu-container')
const closeMenuButton = document.getElementById('close-hamburger-menu')
const menuLinks = document.querySelectorAll('#menu-links .nav-link')

const toggleMobileMenu = () => {
	const isOpen = menuBackdrop.classList.contains('open')

	menuBackdrop.classList.toggle('open', !isOpen)

	openMenuButton.setAttribute('aria-expanded', String(!isOpen))
	menuBackdrop.setAttribute('aria-hidden', String(isOpen))
}

export const setupMobileMenu = () => {
	openMenuButton.addEventListener('click', toggleMobileMenu)
	menuBackdrop.addEventListener('click', e => {
		if (e.target === e.currentTarget) {
			toggleMobileMenu()
		}
	})
	closeMenuButton.addEventListener('click', toggleMobileMenu)
	menuLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
}
