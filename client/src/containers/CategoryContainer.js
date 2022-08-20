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

      // <CategoryList categories={categories}></CategoryList>
// passing down all the fetched categories as a prop to categories list
      return (
        <>
          <p>Test if work</p>
        </>
      )
}

export default CategoryContainer