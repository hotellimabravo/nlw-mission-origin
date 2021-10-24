const linksSocialMedia = {
    github: 'hotellimabravo',
    youtube: 'UCafkYu491JF-grSh1-0fUdA',
    facebook: 'hotellimabravo',
    instagram: 'gabiambiental',
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
    
}

getGitHubProfileInfos();
