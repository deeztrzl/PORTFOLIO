/* ====================
   PORTFOLIO DATA LOADER
   Converts JSON database to usable JavaScript objects
   ==================== */

let portfolioDatabase = {};

// Fetch and load portfolio data from JSON
fetch('js/config/portfolioData.json')
    .then(response => response.json())
    .then(data => {
        portfolioDatabase = data;
        
        // Convert to old format for backward compatibility
        window.projectsData = data.projects;
        window.rolesData = data.roles;
        window.profileData = data.profile;
        
        console.log('Portfolio database loaded successfully');
        console.log('Projects:', Object.keys(window.projectsData).length);
        console.log('Roles:', Object.keys(window.rolesData).length);
    })
    .catch(error => {
        console.error('Error loading portfolio database:', error);
        // Fallback: use empty object if JSON fails to load
        window.projectsData = {};
        window.rolesData = {};
        window.profileData = {};
    });
