// Components - TopicList, TopicCard

import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams,} from "react-router-dom";
import TopicList from "../components/topic_components/TopicList";
import { showCategory } from "../WebsiteService";

const TopicContainer = () => {
	const [topics, setTopics] = useState([]);

	const {id} = useParams();


    useEffect(()=>{
        showCategory(id).then((result)=>{
          setTopics(result.content);
        })
      }, []);


	return (
		<>
			<TopicList topics={topics}/>
<<<<<<< HEAD
		</
=======
			<p>Work pls ty</p>
		</>
>>>>>>> 081423fa661d33025d2ef525b36c44da968dc85e
	);
};

export default TopicContainer;