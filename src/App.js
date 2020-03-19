import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(users => this.setState({ employees: users }))
    );
  }

  render() {
    const { employees, searchField } = this.state;
    const filteredEmployees = employees.filter(employee =>
      employee.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Staff library</h1>

        <SearchBox
          placeholder="Employee name"
          handleChange={e => this.setState({ searchField: e.target.value })}
        ></SearchBox>
        <CardList employees={filteredEmployees}></CardList>
      </div>
    );
  }
}

export default App;
