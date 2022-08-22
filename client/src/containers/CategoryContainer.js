// Components - CategoryList, CategoryCard
import { getCategories } from '../WebsiteService';
import {useState, useEffect}  from 'react';
import CategoryList from '../components/category_components/CategoryList';


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
          <CategoryList categories={categories}/>
        </>
      )
}

export default CategoryContainer;

