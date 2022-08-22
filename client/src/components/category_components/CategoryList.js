import CategoryCard from "./CategoryCard"
// mapping each category to a single entity 
const CategoryList = (({categories}) => {
    const categoriesArray = categories.map((category) => {
        // passing each category down to categoryCard as a prop
        return <CategoryCard
            category={category}
            key={category._id}
            />
    })
    // returning the full array of Categories which CategoryCard will render
    return(
        <ul>
            {categoriesArray}
        </ul>

    )
})


export default CategoryList;