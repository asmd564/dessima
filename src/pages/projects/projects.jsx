import { useState } from "react";
import style from "./projects.module.css";
import project1 from "../../img/projects/biuro1.png";
import project2 from "../../img/projects/sushihero.png";
import project3 from "../../img/projects/urban.png";
import { Contacts } from "../../components/contacts/contacts";
import { useEffect } from "react";
import { Loader } from "../../components/loader/loader";

const data = [
  {id: 1, imgUrl: project1, title: "Victoria House, Ancoats (Salon)", city: "Kraków", type: "house" },
  {id: 2, imgUrl: project2, title: "Sushi Hero", city: "Kraków", type: "comercial" },
  {id: 3, imgUrl: project3, title: "Urban Coffee", city: "Kraków", type: "comercial" },
];


export const Projects = (props) => {
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [file, setFile] = useState(data);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredData = 
    selectedFilter === 'all'
      ? file
      : file.filter((item) => item.type === selectedFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  
  return (
    <>
    <section class={style.projects}>
      {loading ? 
        <Loader />
        :
        <>
        <div class={style.sort__wrapper}>
            <div><button onClick={() => handleFilterClick('all')} class={`${style.selector} ${selectedFilter === 'all' ? style.active : ''}`}>Wszystkie</button></div>
            <div><button onClick={() => handleFilterClick('house')} class={`${style.selector} ${selectedFilter === 'house' ? style.active : ''}`}>Domy</button></div>
            <div><button onClick={() => handleFilterClick('comercial')} class={`${style.selector} ${selectedFilter === 'comercial' ? style.active : ''}`}>Komercyjne</button></div>
            <div><button onClick={() => handleFilterClick('apartaments')} class={`${style.selector} ${selectedFilter === 'apartaments' ? style.active : ''}`}>Mieszkania</button></div>
        </div>
        
        {filteredData.map(item => (
           <div class={style.project__card} key={item.id}>
            <img src={item.imgUrl} alt="project"/>
            <h2>{item.title} </h2>
            <p>{item.city}</p>
           </div>
        ))}
        </>
    }
    </section>
    <Contacts callback={props.callback}/>
    </>
  )
}