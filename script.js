// script.js

document.addEventListener("DOMContentLoaded", () => {
    const username = "jR4dh3y";
    const profileDiv = document.getElementById("profile");

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            // Create elements to display the profile information
            const avatar = document.createElement("img");
            avatar.src = data.avatar_url;
            avatar.alt = `${username}'s Avatar`;

            const name = document.createElement("h2");
            name.textContent = data.name;

            const bio = document.createElement("p");
            bio.textContent = data.bio;

            const link = document.createElement("a");
            link.href = data.html_url;
            link.textContent = `Visit ${username}'s GitHub Profile`;

            // Append elements to the profileDiv
            profileDiv.appendChild(avatar);
            profileDiv.appendChild(name);
            profileDiv.appendChild(bio);
            profileDiv.appendChild(link);
        })
        .catch(error => {
            console.error("Error fetching GitHub profile data:", error);
        });
});
