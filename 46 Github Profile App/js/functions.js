import * as v from "./variables.js";

//Get users

export async function getUser(username) {
    const response = await fetch(v.api_url + username);
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
        errorMessage('User not found, try another');
    } else {
        displayData(data);
        getRepos(username);
    }
}

export function errorMessage(msg) {
    v.el_profile.innerHTML = "";
    document.querySelector('.hide').style.display = "none";
    return v.el_repos.innerHTML = `<p class="alert alert-danger">
    ${msg}
  </p>`;

}

 function displayData(user){
    const html = `
    <img src="${user.avatar_url}" alt="${user.name}" class="hero-image">
            <h2>${user.name}</h2>
            <p>${user.login}</p>
            <div class="d-grid">
              <a href="https://github.com/${user.login}" 
              class="btn btnoutline-secondary" target="_blank" rel="noopener">View Profile</a>
            </div>
            <p class="pt-2">
              <span>${user.followers} Followers</span>
              <span>${user.following} Following</span>
            </p>
            <p>${user.public_repos} Repos</p>
            <p>
              <i class="fas fa-marker-alt"></i>
              ${user.location}
            </p>
    `;
    v.el_profile.innerHTML = html;
}

//get repos

 async function getRepos(username) {
    const response = await fetch(v.api_url + username + "/repos");
    const data = await response.json();

    console.log(data);
    displayRepos(data);
}


function displayRepos(repoData){
    let repo_data = repoData.map((repo)=>{
        return `<span class="repo border-rounded p3">
        <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
        <p>
          <strong>Stars: ${repo.stargazers_count} |</strong>
          <strong>Watchers: ${repo.watchers_count} |</strong>
          <strong>Forks: ${repo.forks_count} |</strong>
        </p>
      </span>`;
    });
    v.el_repos.innerHTML = repo_data.slice(0,8).join("");
    document.querySelector('.hide').style.display = "block";
}