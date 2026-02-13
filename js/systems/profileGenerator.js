/* ====================
   PROFILE GENERATOR
   Dynamically generate profile sections from rolesData
   ==================== */

class ProfileGenerator {
    static generateProfileSections() {
        if (!window.rolesData) {
            console.warn('rolesData not loaded yet');
            return;
        }

        const gameContainer = document.getElementById('game-container');
        if (!gameContainer) return;

        Object.entries(window.rolesData).forEach(([roleId, roleData]) => {
            const profileSection = this.createProfileSection(roleId, roleData);
            gameContainer.appendChild(profileSection);
        });

        console.log('Profile sections generated:', Object.keys(window.rolesData).length);
    }

    static createProfileSection(roleId, roleData) {
        const section = document.createElement('section');
        section.id = `profile-${roleId}`;
        section.className = 'screen profile-screen';

        const projectsHTML = this.generateProjectsHTML(roleData.projects || []);
        const achievementsHTML = this.generateAchievementsHTML(roleData.achievements || []);
        const statsHTML = this.generateStatsHTML(roleData.stats || []);
        const skillsHTML = this.generateSkillsHTML(roleData.skills || []);

        section.innerHTML = `
            <div class="profile-container">
                <div class="profile-header">
                    <img src="${roleData.image}" alt="Rifki Destrizal" class="portrait-image">
                    <div class="profile-info">
                        <h2 class="profile-title">${roleData.title}</h2>
                        <p class="profile-subtitle">${roleData.subtitle}</p>
                    </div>
                </div>

                <div class="stats-bar">
                    ${statsHTML}
                </div>

                ${achievementsHTML ? `
                <div class="profile-section">
                    <h3 class="section-title">ACHIEVEMENTS</h3>
                    <div class="achievements-list">
                        ${achievementsHTML}
                    </div>
                </div>
                ` : ''}

                <div class="profile-section">
                    <h3 class="section-title">SKILLS</h3>
                    <div class="skills-grid">
                        ${skillsHTML}
                    </div>
                </div>

                <div class="profile-section">
                    <h3 class="section-title">SPECIAL MOVE: ${roleData.specialMove}</h3>
                    <p class="special-move-desc">${roleData.specialMoveDesc}</p>
                </div>

                ${projectsHTML ? `
                <div class="profile-section">
                    <h3 class="section-title">KEY PROJECTS</h3>
                    <div class="projects-mini">
                        ${projectsHTML}
                    </div>
                </div>
                ` : ''}

                <button id="btn-back-${roleId}" class="btn-arcade">BACK TO SELECT</button>
            </div>
        `;

        return section;
    }

    static generateStatsHTML(stats) {
        return stats.map(stat => `
            <div class="stat">
                <span class="stat-label">${stat.label}</span>
                <div class="stat-bar-fill" style="width: ${stat.value}%;">${stat.value}%</div>
            </div>
        `).join('');
    }

    static generateSkillsHTML(skills) {
        return skills.map(skill => `
            <div class="skill-item">${skill}</div>
        `).join('');
    }

    static generateAchievementsHTML(achievements) {
        if (achievements.length === 0) return '';
        return achievements.map(achievement => `
            <div class="achievement">${achievement}</div>
        `).join('');
    }

    static generateProjectsHTML(projectIds) {
        if (!projectIds || projectIds.length === 0) return '';
        
        return projectIds.map(projectId => {
            const project = window.projectsData[projectId];
            if (!project) return '';
            
            return `
                <div class="project-card-mini" data-project-id="${projectId}">
                    <div class="project-card-header">
                        <h4>${project.title}</h4>
                        <p class="project-date">${project.date}</p>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Generate profiles when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for dataLoader to fetch JSON
    setTimeout(() => {
        ProfileGenerator.generateProfileSections();
    }, 100);
});
