function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile-name')
    name.innerText = profileData.name

    const job = document.getElementById('profile-job')
    job.innerText = profileData.job

    const location = document.getElementById('profile-location')
    location.innerText = profileData.location

    const linkedin = document.getElementById('profile-linkedin')
    linkedin.innerText = profileData.linkedin
    
    const email = document.getElementById('profile-email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}
    `
    
}
function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softskills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile-skills-hardSkills'); 
 
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}
function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile-portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project =>
        `<li> 
            <h3 ${project.github ? 'class= "github"' : ''}>${project.name}</h3>
            <p align='justify'>${project.description}</p>
            <a href=${project.url} target="_blank">[CLIQUE AQUI PARA ACESSAR]</a>
        </li>`).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.experience')
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
        </li>`).join('')
}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()
