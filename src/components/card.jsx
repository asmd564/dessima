export const Card = ({ url, title, description,}) => {
    return (
        <div className="card__wrapper">
            <img src={url} alt="tv" />
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
        </div>
    );
}