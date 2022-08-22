import TopicCard from "./TopicCard"

const TopicList = ({topics}) => {


    console.log(topics);

    const TopicNodes = topics.map((topic, i) => {
        return <TopicCard topic={topic} index={i} key={topic._id} />
    })

    return (
        <>
            {TopicNodes}
        </>
    )
}

export default TopicList