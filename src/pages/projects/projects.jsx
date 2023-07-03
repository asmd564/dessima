import style from "./projects.module.css";
import project1 from "../../img/projects/biuro1.png";
import project2 from "../../img/projects/sushihero.png";
import project3 from "../../img/projects/urban.png";
import { Contacts } from "../../components/contacts/contacts";
import { useEffect } from "react";


export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <section class={style.projects}>
        <div class={style.sort__wrapper}>
            <div><button class={style.selector}>All</button></div>
            <div><button class={style.selector}>Houses</button></div>
            <div><button class={style.selector}>Commerce</button></div>
            <div><button class={style.selector}>Apartaments</button></div>
        </div>
        
        <div class={style.project__card}>
            <img src={project1} alt="project1"/>
            <h2>Victoria House, Ancoats (Salon) </h2>
            <p>Krakow</p>
        </div>
        <div class={style.project__card}>
            <img src={project2} alt="project2"/>
            <h2>Sushi Hero</h2>
            <p>Krakow</p>
        </div>
        <div class={style.project__card}>
            <img src={project3} alt="project3"/>
            <h2>Urban Coffee</h2>
            <p>Krakow</p>
        </div>
    </section>
    <Contacts/>
    </>
  )
}