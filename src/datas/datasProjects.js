// Projects

import img_Project1 from "../assets/img/imgProjects/img_Project1.png";
import img_Project2 from "../assets/img/imgProjects/img_Project2.png";

// Technologies / Tools
import img_HTML from "../assets/img/imgHardSkills/html.png";
import img_CSS from "../assets/img/imgHardSkills/css-3.png";
import img_ReactJs from "../assets/img/imgHardSkills/ReactJs.png";
import img_tailwindcss from "../assets/img/imgHardSkills/Tailwindcss.png";
import img_Git from "../assets/img/imgTools/Git.png";
import img_GitHub from "../assets/img/imgTools/GitHub.png";

const dataProjects = [
  {
    id: 0,
    img: img_Project2,
    link: "https://wcs-weather.netlify.app/",
    title: "WCS-Weather",
    technologies: [img_ReactJs, img_tailwindcss, img_Git, img_GitHub],
    description:
      "Projet réalisé au cours de ma formation à la Wild Code School, en équipe de 4. Notre but était de développer un site web qui répertorie les indices de pollution et la météo sur une période de plusieurs mois, dans les villes où sont présents les campus de la Wild Code School ainsi que toutes les capitales européennes. ",
    note: "- Le compte Supabase, utilisé pour l'authentification, n'étant plus actif vous aurez accès qu'aux pages Home et LogIn/SignUp donnant un aperçu du site.",
  },

  {
    id: 1,
    img: img_Project1,
    link: "https://kvnmrs.github.io/WCS_Projet_1/",
    title: "NantesAutrement",
    technologies: [img_HTML, img_CSS, img_Git, img_GitHub],
    description:
      "Projet réalisé en entrée en formation, en équipe de 4. Un site vitrine, dont le but était de répertorier les endroits sympathiques et insolites de Nantes.",
    note: "- Non fonctionnel",
  },
  {
    id: 2,
    img: img_Project1,
    link: "https://kvnmrs.github.io/WCS_Projet_1/",
    title: "NantesAutrement",
    technologies: [img_HTML, img_CSS, img_Git, img_GitHub],
    description:
      "Projet réalisé en entrée en formation, en équipe de 4. Un site vitrine, dont le but était de répertorier les endroits sympathiques et insolites de Nantes.",
    note: "- Non fonctionnel",
  },
];

export default dataProjects;
