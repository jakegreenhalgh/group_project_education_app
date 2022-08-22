import TopicCard from "./TopicCard"

const TopicList = ({topics}) => {
    const TopicNodes = topics.map((topic) => {
return <TopicCard topic={topic} key={topic._id} />
    })

    return (
        <>
            {TopicNodes}
        </>
    )
}

export default TopicList