const container = document.getElementById('projects-grid')

export const loadProjects = () => {
	fetch('./data/projects.json')
		.then(response => response.json())
		.then(projects => {
			projects.forEach(project => {
				const card = document.createElement('div')

				card.className = 'project-card'
				card.innerHTML = `
					<img class="image" src="${project.cover}" alt="${project.name} cover" />
					<h4 class="secondary-title title">${project.name}</h4>
					<p class="paragraph">${project.description}</p>
					<a class="link" href="${project.src}">View more</a>
				`

				container.appendChild(card)
			})
		})
		.catch(error => {
			console.error('Failed to load projects:', error)
		})
}
