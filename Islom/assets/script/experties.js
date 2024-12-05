const ExpertiseData = [

  {
    name: "HTMl",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "Css",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
  },
    {
    name: "Bootsrap",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
  },
  {
    name: "Javascript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
 

 

  {
    name :"Netlify",
    logo :"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
  },

  {
    name: "Sass",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  },



 
  {
    name: "Canva",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  },

  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },

];

const ExpertiseDataHTML = ExpertiseData.map(
  (item) => `
        <div class="expertise-card">
            <img loading="lazy" src="${item.logo}" alt="${item.name}">
            <span>${item.name}</span>
        </div>
    `
).join("");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('expertise-card-container').innerHTML = ExpertiseDataHTML;
});
