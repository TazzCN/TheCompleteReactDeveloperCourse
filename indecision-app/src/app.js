console.log('App.js is running');

//JSX

const App = {
    title: ' Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options:['One', 'Two']
};

 const template = ( 
    <div>
        <h1>{App.title}</h1>
        {App.subTitle && <p>{App.subTitle}</p>}
        <p>{App.options.length > 0 ? "Here are your options": "No options"}</p>
        <ol>
            <li>Item Three</li>
            <li>Item Two</li>
        </ol>
    </div>
 );

 let count = 0;

 const addOne = () => {
     console.log("addOne");
 };
 
 const minusOne = () => {
    console.log("minusOne");
};

const reset = () => {
    console.log("Reset");
};


 const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
 ); 

 console.log(templateTwo);

 const appRoot = document.getElementById("app");

 ReactDOM.render(templateTwo,appRoot); 