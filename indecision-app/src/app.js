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
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
 );

 const user = {
     age: 10
 };

 function getLocation(location) {
     if (location){
         return <p>Location: {location}</p>;
     }
 }

 const templateTwo = (
     <div>
         <h1>{user.name?user.name:'Anonymous'}</h1>
         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
         {getLocation(user.location)}
     </div>
 );

 const appRoot = document.getElementById("app");

 ReactDOM.render(template,appRoot); 