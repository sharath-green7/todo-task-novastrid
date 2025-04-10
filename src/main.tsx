import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import './index.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Suspense>
    <Provider store={store}>
      <App title="My ToDos"/>
    </Provider>
  </Suspense>
);