import ShoutOut from "../model/ShoutOut";

interface Props {
    shoutOut: ShoutOut;
}

function ShoutOutPost({shoutOut}: Props) {
    return (
        <div className="ShoutOutPost">
            <div className="ToFrom">
                <h3 className="To">Shout out to {shoutOut.to} </h3>
                <p className="From">- from {shoutOut.from} </p>
            </div>
            <div className="MessageContainer">
                <p className="Message"> {shoutOut.message} </p>
            </div>
        </div>
    )
}

export default ShoutOutPost;