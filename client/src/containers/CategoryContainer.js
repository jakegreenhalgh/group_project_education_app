// Components - CategoryList, CategoryCard
import { getCategories } from '../WebsiteService';
import {useState, useEffect}  from 'react';


// constructs Category Container 
function CategoryContainer() {

    const [categories, setCategories] = useState([])

// on page load categories will be fetched and set as out state
    useEffect(()=>{
        getCategories().then((result)=>{
          setCategories(result);
        })
      }, []);


// passing down all the fetched categories as a prop to categories list
      return (
        <>
<<<<<<< HEAD
        {/* <p>{message[0].message}</p> */}
=======
          <CategoryList categories={categories}></CategoryList>
>>>>>>> main
        </>
      )
}

export default CategoryContainer;