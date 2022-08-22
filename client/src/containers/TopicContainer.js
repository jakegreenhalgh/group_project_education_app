// Components - TopicList, TopicCard

import React, { useEffect, useState } from "react";
import TopicList from "../components/topic_components/TopicList";

const TopicContainer = (topics) => {

	return (
		<>
			<TopicList topics={topics}/>
			<p>Work pls ty</p>
		</>
	);
};

export default TopicContainer;