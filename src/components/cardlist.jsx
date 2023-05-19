import { Card } from "./card";



export const CardList = ({products}) => {
    return (
        <div className="wrapper">
            {products.map(({id , image , name, description}) => (
        <Card 
            key={id} 
            url={image}
            title={name}
            description={description}
        />
    ))}
    </div>
    );
}