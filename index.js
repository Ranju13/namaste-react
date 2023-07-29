const heading = React.createElement('div',{id:'heading__color'},
React.createElement('div',{id:'heading__color2'}, [React.createElement('h1',{id:'heading1'},'Hi This is my first own react code'),
React.createElement('h1',{id:'heading1'},'Hi This is my first own react code')]))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);


// <div id='heading__color'>
//     <div id='heading__color2'>
//         <h1 id='heading1'>Hi This is my first own react code</h1>
//         <h2 id='heading2'>Hi This is my first own react code2</h2>
//     </div>
// </div>