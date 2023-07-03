import { useEffect } from "react";
import style from "./about.module.css";

export const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <section className={style.header__content}>
            <div className={style.header__content_wrapper}>
                <img src="img/dotup.png" alt="" />
                <div className={style.header__content_tittle}>
                    <h1>Our interiors are comfortable and pleasant, thanks to the fact that we use a soft, warm range of colors with the addition of color accents, most often in the form of accessories</h1>
                </div>
                <img src="img/dotdown.png" alt=""/>
                </div>
        </section><section className={style.description}>
                <div className={style.description__wrapper}>
                    <div className={style.description__tittle}>
                        <h2>Mari Guminilovych</h2>
                        <p>Interior designer</p>
                        <p>Nice to meet you, my name is Mari and I am developing the DESSIMA Interior design studio. <br/>
                            I am an interior designer by education, a graduate of the Faculty of Design and Interior Architecture at the Academy of Fine Arts in Łódź (BA) and the Faculty of Interior Architecture at the Jan Matejko Academy in Krakow (MA)</p>
                    </div>
                    <img src="img/desc.png" alt="" />
                </div>
                <div className={style.description__wrapper}>
                    <img src="img/desc2.png" alt="" />
                    <div className={style.description__tittle}>
                        <div className={style.tittle__exp}>
                            <div className={style.exp}>
                                <h2>4+</h2>
                                <p>years of experience</p>
                            </div>
                            <div className={style.exp}>
                                <h2>48</h2>
                                <p>finished projects</p>
                            </div>
                            <div className={style.exp}>
                                <h2>8+</h2>
                                <p>partner companies</p>
                            </div>
                            <div className={style.exp}>
                                <h2>2018</h2>
                                <p>year of establishment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section className={style.howto__order}>

                <h2>How to order interior design</h2>
                <p>Six simple steps for your updated interior look like this</p>
                <div className={style.howto__wrapper}>
                    <div className={style.howto__card_wrapper}>
                        <div className={style.howto_card}>
                            <img className={style.howto__img} src="img/wtatto1.png" alt="" />
                            <p>REGISTRATION OF APPLICATION</p>
                        </div>
                        <div className={style.howto_card}>
                            <img src="img/whatto2.png" alt="" />
                            <p>ROOM MEASUREMENT</p>
                        </div>
                        <div className={style.howto_card}>
                            <img src="img/whatto3.png" alt="" />
                            <p>LAYOUT</p>
                        </div>
                    </div>
                    <div className={style.howto__card_wrapper}>
                        <div className={style.howto_card}>
                            <img src="img/whatto4.png" alt="" />
                            <p>CREATING A CONCEPT</p>
                        </div>
                        <div className={style.howto_card}>
                            <img src="img/whatto5.png" alt="" />
                            <p>DEVELOPMENT OF THE PROJECT</p>
                        </div>
                        <div className={style.howto_card}>
                            <img src="img/whatto6.png" alt="" />
                            <p>AUTHOR'S SUPERVISION</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}