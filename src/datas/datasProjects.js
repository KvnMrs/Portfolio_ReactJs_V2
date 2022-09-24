import img_Project1 from "../assets/img/imgProjects/img_Project1.png";
import img_Project2 from "../assets/img/imgProjects/img_Project2.png";

const dataProjects = [
  {
    img: img_Project2,
    link: "https://wcs-weather.netlify.app/",
    title: "WCS-Weather",
    category: "ReactJs / Tailwindcss",
    description:
      "Projet réalisé au cours de ma formation à la Wild Code School, en équipe de 4. Notre but était de développer un site web qui répertorie les indices de pollution et la météo sur une période de plusieurs mois, dans les villes où sont présents les campus de la Wild Code School ainsi que toutes les capitales européennes. ",
    note: "Le compte Supabase, utilisé pour l'authentification, n'étant plus actif vous aurez accès qu'aux pages Home et LogIn/SignUp donnant un aperçu du site.",
  },

  {
    img: img_Project1,
    link: "https://kvnmrs.github.io/WCS_Projet_1/",
    title: "NantesAutrement",
    category: "HTML/CSS",
    description:
      "Projet réalisé au cours de ma formation à la Wild Code School, en équipe de 4. Un site vitrine, non fonctionnel dont le but était de répertorier les endroits sympathiques de Nantes.",
  },
];

export default dataProjects;
