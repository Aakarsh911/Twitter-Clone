import React, { useState } from "react";

const Tweet = (props) => {
    const [counter, setCounter] = useState(0);
    const text = props.text;
    const author = props.author;
    const date = props.date;

    const incerement = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h3>{text.toUpperCase()}</h3>
            <h6>Written by {author} on {date}</h6>
            <h1>counter: {counter}</h1>
            <button onClick={incerement}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Tweet;