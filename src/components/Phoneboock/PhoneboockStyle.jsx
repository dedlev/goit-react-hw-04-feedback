import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const id = nanoid(4);

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addContact;

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          padding: '40px 100px',
          fontSize: '30px',
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            outline: '1px solid',
            fontSize: '20px',
            padding: '10px 80px 10px 10px',
          }}
        >
          <label htmlFor={id}>Name</label>
          <input
            style={{
              outline: '2px solid blue',
              borderRadius: '4px',
              margin: '5px 0 40px',
              height: '20px',
            }}
            id={id}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label htmlFor={id}>Number</label>
          <input
            style={{
              outline: '2px solid blue',
              borderRadius: '4px',
              margin: '5px 0 40px',
              height: '20px',
            }}
            id={id}
            type="tel"
            name="contacts"
            value={this.state.contacts}
            onChange={this.handleChange}
            required
          />
          <button
            style={{ width: '60%' }}
            type="button"
            addContact={this.addContact}
          >
            Add contact
          </button>
        </form>

        <h2 style={{ marginBottom: 0 }}>Contacts</h2>
        {this.state.name && (
          <ul>
            <li>
              <p>
                {this.state.name}: {this.state.contacts}
              </p>
            </li>
          </ul>
        )}
      </div>
    );
  }
}
