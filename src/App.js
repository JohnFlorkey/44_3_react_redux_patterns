import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import rootReducer from "./reducers/rootReducer";
import Routes from "./Routes";

function App() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Container>
        <h1 className="text-center">SHOPLY</h1>
        <Routes />
      </Container>
    </Provider>
  );
}

export default App;
