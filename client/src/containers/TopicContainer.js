// Components - TopicList, TopicCard

import React, { useEffect, useState } from "react";
import TopicList from "../components/topic_components/TopicList";

const TopicContainer = (topics) => {

	const [topics, setTopics] = useState();	

	return (
		<>
			<TopicList topics={topics}/>
		</>
	);
};

export default TopicContainer;