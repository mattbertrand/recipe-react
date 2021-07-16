import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const APP_ID = 'aef66a74';
  const APP_KEY = '3a3fe067527bc8fee6ca2a2bc5e17340';

  const exampleRequest = `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  )
}

export default App;
