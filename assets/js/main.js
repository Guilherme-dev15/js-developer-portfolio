function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile_photo');
    if (photo) {
        photo.src = profileData.photo;
        photo.alt = profileData.name;
    } else {
        console.error('Elemento "profile_photo" não encontrado!');
    }

    const name = document.getElementById('profile-name');
    if (name) {
        name.innerText = profileData.name;
    } else {
        console.error('Elemento "profile-name" não encontrado!');
    }

    const job = document.getElementById('profile-job');
    if (job) {
        job.innerText = profileData.job;
    } else {
        console.error('Elemento "profile-job" não encontrado!');
    }

    const location = document.getElementById('profile-location');
    if (location) {
        location.innerText = profileData.location;
    } else {
        console.error('Elemento "profile-location" não encontrado!');
    }

    const linkedin = document.getElementById('profile-linkedin');
    if (linkedin) {
        linkedin.innerText = profileData.linkedin;
    } else {
        console.error('Elemento "profile-linkedin" não encontrado!');
    }
    
    const email = document.querySelector('.profile-email'); // Correção para selecionar pelo class
    if (email) {
        email.innerText = profileData.email;
        email.href = `mailto:${profileData.email}`;
    } else {
        console.error('Elemento "profile_email" não encontrado!');
    }
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile_skills_softskills');
    if (softSkills) {
        softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
    } else {
        console.error('Elemento "profile_skills_softskills" não encontrado!');
    }
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile_skills_hardSkills');
    if (hardSkills) {
        hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `
            <li>
                <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
            </li>
        `).join('');
    } else {
        console.error('Elemento "profile_skills_hardSkills" não encontrado!');
    }
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile_languages');
    if (languages) {
        languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
    } else {
        console.error('Elemento "profile_languages" não encontrado!');
    }
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile_portfolio');
    if (portfolio) {
        portfolio.innerHTML = profileData.portfolio.map(project =>
            `<li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <p align='justify'>${project.description}</p>
                <a href="${project.url}" target="_blank">[CLIQUE AQUI PARA ACESSAR]</a>
            </li>`
        ).join('');
    } else {
        console.error('Elemento "profile_portfolio" não encontrado!');
    }
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile_experience');
    if (professionalExperience) {
        professionalExperience.innerHTML = profileData.professionalExperience.map(experience =>
            `<li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>`
        ).join('');
    } else {
        console.error('Elemento "profile_experience" não encontrado!');
    }
}

// Envolva a chamada assíncrona em um evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
});
