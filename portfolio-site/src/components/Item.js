import React from 'react';

const Item = (props) => {
    return (
    <header>
       <h1>A Thing I've Done</h1>
        <p>This page is for the Item with id of: {props.match.params.id}</p>
    </header>
    );
}

export default Item;