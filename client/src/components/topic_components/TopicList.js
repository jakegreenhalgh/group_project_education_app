import TopicCard from "./TopicCard"

const TopicList = ({topics, categoryId}) => {


    const TopicNodes = topics.map((topic, i) => {
        return <TopicCard topic={topic} index={i} key={topic._id} categoryId={categoryId}/>
    })

    return (
        <>
            {TopicNodes}
        </>
    )
}

export default TopicList