// Components - CategoryList, CategoryCard
import { getCategories } from '../WebsiteService';
import {useState, useEffect}  from 'react';

function CategoryContainer() {

    const [message, setMessage] = useState("")


    useEffect(()=>{
        getCategories().then((result)=>{
          setMessage(result);
          
        })
      }, []);



      return (
        <>
        <p>{message[0].message}</p>
        </>
      )
}

export default CategoryContainer