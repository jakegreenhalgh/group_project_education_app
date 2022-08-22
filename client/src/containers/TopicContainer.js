// Components - TopicList, TopicCard

import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams,} from "react-router-dom";
import TopicList from "../components/topic_components/TopicList";
import { showCategory } from "../WebsiteService";

const TopicContainer = () => {
	const [topics, setTopics] = useState([]);

	const {categoryId} = useParams();


    useEffect(()=>{
        showCategory(categoryId).then((result)=>{
          setTopics(result.content);
        })
      }, []);


	return (
		<>
			<TopicList topics={topics} categoryId={categoryId}/>
		</>
	);
};

export default TopicContainer;