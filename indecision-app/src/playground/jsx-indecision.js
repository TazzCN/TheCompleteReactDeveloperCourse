console.log('App.js is running');

//JSX

const App = {
    title: ' Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        App.options.push(option);
        e.target.elements.option.value = '';
     render();
    }
};

const removeAll = () => {
    App.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * App.options.length);
    const option = App.options[randomNum];
    alert(option)
    console.log(randomNum);
};

 const appRoot = document.getElementById("app");

 const render = () => {
    const template = ( 
        <div>
            <h1>{App.title}</h1>
            {App.subTitle && <p>{App.subTitle}</p>}
            <p>{App.options.length > 0 ? "Here are your options": "No options"}</p>
            <button disabled={App.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    App.options.map((opt) => <li key = {opt}>{opt}</li>)
                }
            </ol>
            <form  onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
     );

     ReactDOM.render(template,appRoot);
 };

 render();

