import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>User Management</h1>
          <UserList />
        </header>
      </div>
    </Provider>
  );
};

export default App;
