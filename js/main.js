import { setupMobileMenu } from './hamburgerMenu.js'

import { loadProfile } from './loadProfile.js'
import { loadProjects } from './loadProjects.js'

const init = () => {
	setupMobileMenu()

	loadProfile()
	loadProjects()
}

document.addEventListener('DOMContentLoaded', init)
