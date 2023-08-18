import { useEffect } from 'react';
import style from './notFound.module.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <div className={style.not__found}>
            <h1 className={style.title}>OOPS, Strona nie zanleziona</h1>
            <Link to="/" className={style.link}>Wróć na główną</Link>

        </div>
    );
}