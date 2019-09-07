'use strict';

console.log('App.js is running');

//JSX

var App = {
    title: ' Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        App.title
    ),
    App.subTitle && React.createElement(
        'p',
        null,
        App.subTitle
    ),
    React.createElement(
        'p',
        null,
        App.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item Three'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var count = 0;

var addOne = function addOne() {
    console.log("addOne");
};

var minusOne = function minusOne() {
    console.log("minusOne");
};

var reset = function reset() {
    console.log("Reset");
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);

console.log(templateTwo);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
