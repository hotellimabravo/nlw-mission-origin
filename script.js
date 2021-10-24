const linksSocialMedia = {
    github: 'hotellimabravo',
    linkedin: 'in/hugobalttazar',
    facebook: 'hotellimabravo',
    instagram: 'hbalttazar',
    twitter: 'hotellimabravo'
}

function changeSocialMediaLinks() {
    userName.textContent = "Hugo Baltazar";
    for (let li of socialLinks.children) {
       const social = li.getAttribute('class');
       li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
    }
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).then(response => response.json()).then(data => {
        userName.textContent = data.name;
        gitUser.textContent = data.login;
        userLink.href = data.html_url;
        gitHubBio.textContent = data.bio;
        avatarGit.src = data.avatar_url;
    }) 
}
getGitHubProfileInfos();
