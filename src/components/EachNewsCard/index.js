import './index.css';


function EachNewsCard({eachNewsDetailsObj}) {

    const {author , content , description} = eachNewsDetailsObj;
    return (
        <li className = "eachNewsCardContainer">
        <div className = "innerContainer">
            <div className = "authorNameContainer">
                <p>{author}</p>
            </div>
            <div className = "contentContainer">
                <p>{`${content === null ? 'Content unavailable' : content}`}</p>
            </div>
            <div className = "cardOptionsContainer">
                <button type = "button">Save</button>
                <button type = "button">Full details</button>
            </div>
        </div>
        </li>
    )
}

export default EachNewsCard;