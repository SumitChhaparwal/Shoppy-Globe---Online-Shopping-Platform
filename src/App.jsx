import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import store from "./Utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
