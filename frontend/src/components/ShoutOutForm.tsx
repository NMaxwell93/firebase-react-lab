import { FormEvent, useState } from "react";
import ShoutOut from "../model/ShoutOut";

interface Props {
    onSubmit: (shoutOut: ShoutOut) => void
}

function ShoutOutForm({onSubmit}:Props) {
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event:FormEvent): void {
        event.preventDefault();
        const shoutOut: ShoutOut = {
            to: to,
            from: from,
            message: message
        }
        onSubmit(shoutOut)

        setTo("");
        setFrom("");
        setMessage("");
    }

    return (
        <form className="ShoutOutForm" onSubmit={handleSubmit}>
            <h3>Leave a Shout Out</h3>
            <p>
                <label htmlFor="To_form">To</label>
                <input id="To_form" value={to} onChange={e => setTo(e.target.value)} required />
            </p>
            <p>
                <label htmlFor="From_form">From</label>
                <input id="From_form" value={from} onChange={e => setFrom(e.target.value)} required />
            </p>
            <p>
                <label htmlFor="Message_form">Shout Out</label>
                <textarea id="Message_form" value={message} onChange={e => setMessage(e.target.value)} required />
            </p>
            <p>
                <button type="submit">Submit Shout Out!</button>
            </p>
        </form>
    )
}

export default ShoutOutForm;