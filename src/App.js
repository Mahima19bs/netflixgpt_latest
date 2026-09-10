import logo from "./logo.svg";
import "./App.css";
import {Provider} from 'react-redux';
import Header from "./components/Header/Header";
import Body from '../src/components/Body/Body.js'
import appStore from "./utils/appStore.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={appStore}><Body/></Provider>
    </div>
  );
}

export default App;
