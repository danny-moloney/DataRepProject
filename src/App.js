// Here is where all the components from their respective pages are imported into the app.js file
// This is so that they can be used to connect the navbar code in the file to the app
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Icecream } from './components/icecream';
import { Create } from "./components/create";
import { Edit } from './components/edit';
import { Gallery } from './components/gallery';
import { Home } from './components/home';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          {/* Here is where the navbar tag starts the navbar component. the navbar links are used to create button links on the navbar that when pressed will lead to their respective pages */}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Ice-Cream Online </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/gallery">Menu</Nav.Link>
              <Nav.Link href="/icecream">ice-cream</Nav.Link>
              <Nav.Link href="/create">Add Order</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            {/* The exported classes from each file are passed to the app.js file using the route tag. */}
            <Route path="/home" component={Home} exact />
            <Route path="/gallery" component={Gallery} exact />
            <Route path="/icecream" component={Icecream} exact />
            <Route path="/create" component={Create} exact />

            {/* Here i include the id tag so that each order in the database can be indetified using it's id when i want to edit the orders. */}
            <Route path="/edit/:id" component={Edit} exact />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
