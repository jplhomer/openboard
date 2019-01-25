import Autocomplete from "react-autocomplete";
import React from "react";

export default class FindAthlete extends React.Component {
  state = {
    athletes: [],
    value: ''
  }

  render() {
    return (
      <Autocomplete
        placeholder="Enter an athlete name"
        getItemValue={(item) => item.name}
        items={this.state.athletes}
        renderItem={(item, isHighlighted) =>
          <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.name}
          </div>
        }
        value={this.state.value}
        onChange={this.onChange}
        onSelect={(value) => this.setState({ value })}
      />
    )
  }

  onChange = async (e) => {
    const q = e.target.value;

    if (q && q.length > 2) {
      this.updateAthletes(q);
    }

    this.setState({ value: q });
  }

  async updateAthletes(query) {
    const endpoint = `/2019/athletes?term=${query}`;
    const proxy = process.env.IS_NOW ?
      `/proxy/` : `http://localhost:3001/proxy/`;

    const response = await fetch(proxy + endpoint);

    if (!response.ok) {
      console.log(`Error ${response.status}: ${response.statusText}`);
      return;
    }

    const athletes = await response.json();
    this.setState({ athletes })
  }
}
