import ShoutOut from "../model/ShoutOut";
import "./ShoutOutPost.css"

interface Props {
    shoutOut: ShoutOut;
    onDelete: () => void;
}

function ShoutOutPost({shoutOut, onDelete}: Props) {
    return (
        <div className="ShoutOutPost">
            <div className="ToFrom">
                <h3 className="To">Shout out to {shoutOut.to} </h3>
                <p className="From">- from {shoutOut.from} </p>
            </div>
            <div className="MessageContainer">
                <p className="Message"> {shoutOut.message} </p>
            </div>
            <div className="DeleteButtonDiv">
                <button className="DeleteButton" onClick={onDelete} >Un Shout</button>
            </div>
        </div>
    )
}

export default ShoutOutPost;