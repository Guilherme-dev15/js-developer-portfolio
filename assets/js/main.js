function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile_photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile-name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile-job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile-location');
    location.innerText = profileData.location;

    const linkedin = document.getElementById('profile-linkedin');
    linkedin.innerText = profileData.linkedin;
    
    const email = document.getElementById('profile_email'); // Alterado para 'profile_email'
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`; // Corrigido
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile_skills_softskills'); // Alterado
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile_skills_hardSkills'); // Alterado
    
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `
        <li>
            <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" style="width: 50px; height: 50px;">
            ${skill.name}  <!-- Adiciona o nome da habilidade para clareza -->
        </li>
    `).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile_languages'); // Alterado
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join(''); // 'languages' alterado para 'language'
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile_portfolio'); // Alterado
    portfolio.innerHTML = profileData.portfolio.map(project =>
        `<li> 
            <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
            <p align='justify'>${project.description}</p>
            <a href="${project.url}" target="_blank">[CLIQUE AQUI PARA ACESSAR]</a> <!-- Adicionado aspas para a URL -->
        </li>`).join('');
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile_experience'); // Alterado
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience =>
        `<li>
            <h3 class="title">
                ${experience.name}
            </h3>
            <p class="period">
                ${experience.period}
            </p>
            <p>
                ${experience.description}
            </p>
        </li>`).join('');
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
})();
