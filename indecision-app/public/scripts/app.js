'use strict';

console.log('App.js is running');

//JSX

var App = {
    title: ' Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        App.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var removeAll = function removeAll() {
    App.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * App.options.length);
    var option = App.options[randomNum];
    alert(option);
    console.log(randomNum);
};

var appRoot = document.getElementById("app");

var render = function render() {
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
            'button',
            { disabled: App.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            App.options.map(function (opt) {
                return React.createElement(
                    'li',
                    { key: opt },
                    opt
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
