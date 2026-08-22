const avatar = document.getElementById('avatar')
const names = document.querySelectorAll('.name')
const title = document.getElementById('title')
const socialMediaContainer = document.getElementById('social-media')
const aboutImage = document.getElementById('about-image')
const bio = document.getElementById('bio')

export const loadProfile = () => {
	fetch('./data/profile.json')
		.then(response => response.json())
		.then(profile => {
			avatar.src = profile.avatar
			avatar.alt = `${profile.name} profile photo`

			names.forEach(name => (name.textContent = profile.name))

			title.textContent = profile.title

			for (const [network, url] of Object.entries(profile.socialMedia)) {
				const a = document.createElement('a')

				a.className = 'icon-button'
				a.href = url
				a.target = '_blank'
				a.rel = 'noopener noreferrer'
				a.title = network.charAt(0).toUpperCase() + network.slice(1)
				a.setAttribute('aria-label', `${network} profile`)

				const img = document.createElement('img')

				img.src = `assets/icons/${network}.svg`
				img.alt = `${network} icon`
				img.width = 24
				img.height = 24

				a.appendChild(img)
				socialMediaContainer.appendChild(a)
			}

			aboutImage.src = profile.aboutImage
			aboutImage.alt = `${profile.name} photo`

			const bioParagraphs = profile.bio.split('\n\n')

			bioParagraphs.forEach(p => {
				const paragraph = document.createElement('p')

				paragraph.className = 'paragraph'
				paragraph.textContent = p

				bio.appendChild(paragraph)
			})
		})
		.catch(error => {
			console.error('Failed to load profile:', error)
		})
}
