import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ProductList from "./ProductList";
import rootReducer from "./reducers/rootReducer";

function App() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
