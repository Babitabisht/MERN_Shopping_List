import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/AppNavBar";

import ShoppingList from "./components/ShoppingList";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/ItemModel";

import { Container } from "reactstrap";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <ItemModal />
            <Container>
            <ShoppingList />
            </Container>
            
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
