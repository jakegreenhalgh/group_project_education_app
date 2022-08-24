import FavouritesCard from "./FavouritesCard"
const FavouritesList = (({favourites}) => {
    const favouritesNodes = favourites.map((favourite) => {
        return <FavouritesCard
            favourite={favourite}
            key={favourite._id}
            />
    })
    return(
        <ul>
            {favouritesNodes}
        </ul>

    )
})


export default FavouritesList;
