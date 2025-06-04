class ProjectManager {
    constructor() {
        this.projects = [];
        this.icons = {
            chart: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>`,
            shield: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`,
            mobile: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>`,
            code: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>`,
            server: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>`,
            doller: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
            globe: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>`,
            video: `<path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />`,
            education: `<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />`
        };
    }

    async loadProjects() {
        try {
            const response = await fetch('/assets/js/projects.json');
            const data = await response.json();
            this.projects = data.projects;
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    }

    createProjectCard(project) {
        const hasIcon = project.image?.gradient?.from && project.image?.gradient?.to && project.image?.icon && this.icons[project.image.icon];
        const hasTag = project.tag?.color && project.tag?.text;
        const hasTechnologies = Array.isArray(project.technologies) && project.technologies.length > 0;
        const hasDemo = project.links?.demo && project.links.demo !== "#";
        const hasGithub = project.links?.github && project.links.github !== "#";
    
        const categoryFilter = project.category.map(cat => `activeFilter === '${cat}'`).join(' || ');
    
        return `
            <div x-show="activeFilter === 'all' || ${categoryFilter}"
                x-transition
                class="group bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                
                <div class="relative overflow-hidden">
                    ${hasIcon ? `
                        <div class="h-48 bg-gradient-to-r from-${project.image.gradient.from} to-${project.image.gradient.to} flex items-center justify-center">
                            <svg class="w-24 h-24 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                ${this.icons[project.image.icon]}
                            </svg>
                        </div>` : ''}
    
                    ${hasTag ? `
                        <div class="absolute top-0 right-0 p-4">
                            <span class="bg-${project.tag.color} text-white px-3 py-1 rounded-full text-sm font-medium">${project.tag.text}</span>
                        </div>` : ''}
                </div>
    
                <div class="p-6">
                    ${project.title ? `<h3 class="text-xl font-semibold mb-2 text-gray-800">${project.title}</h3>` : ''}
                    ${project.description ? `<p class="text-gray-600 mb-4">${project.description}</p>` : ''}
    
                    ${hasTechnologies ? `
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.technologies.map(tech => `
                                <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">${tech}</span>`).join('')}
                        </div>` : ''}
    
                    ${(hasDemo || hasGithub) ? `
                        <div class="flex justify-between items-center">
                            ${hasDemo ? `
                                <a target="_blank" href="${project.links.demo}" class="text-${project.image?.gradient?.from || 'blue-600'} hover:text-${project.image?.gradient?.to || 'blue-800'} font-medium">
                                    View Project →
                                </a>` : '<span></span>'}
                            ${hasGithub ? `
                                <a target="_blank" href="${project.links.github}" class="text-gray-500 hover:text-gray-600">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12
                                            0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577
                                            v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387
                                            -1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
                                            1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807
                                            1.304 3.492.997.107-.775.418-1.305.762-1.604
                                            -2.665-.305-5.467-1.334-5.467-5.931
                                            0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524
                                            .117-3.176 0 0 1.008-.322 3.301 1.23.957-.266
                                            1.983-.399 3.003-.404 1.02.005 2.047.138
                                            3.006.404 2.291-1.552 3.297-1.23
                                            3.297-1.23.653 1.653.242 2.874.118 3.176
                                            .77.84 1.235 1.911 1.235 3.221
                                            0 4.609-2.807 5.624-5.479 5.921
                                            .43.372.823 1.102.823 2.222v3.293
                                            c0 .319.192.694.801.576
                                            4.765-1.589 8.199-6.086 8.199-11.386
                                            0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>` : ''}
                        </div>` : ''}
                </div>
            </div>
        `;
    }
    
    renderProjects() {
        const projectGrid = document.querySelector('#project-grid');
        if (!projectGrid) return;

        const projectsHTML = this.projects.map(project => this.createProjectCard(project)).join('');
        projectGrid.innerHTML = projectsHTML;
    }

    async initialize() {
        await this.loadProjects();
        this.renderProjects();
    }
}

// Initialize project manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const projectManager = new ProjectManager();
    projectManager.initialize();
});