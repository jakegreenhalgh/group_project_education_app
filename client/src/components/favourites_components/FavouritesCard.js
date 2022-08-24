import { Link } from "react-router-dom";

const FavouritesCard = ({favourite}) => {
    const passData = [favourite.topic, favourite.catId]

    return (
        <Link to={`/categories/${favourite.catId}/${favourite.id}`} state={passData} ><p>{favourite.name}</p></Link>
    )
}

export default FavouritesCard
