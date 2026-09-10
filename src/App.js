import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header/>
        <Body />
      </div>
    </Provider>
  );
}

export default App;