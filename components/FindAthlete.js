import Autocomplete from "react-autocomplete";
import React from "react";
import Router from "next/router";
import { debounce } from "lodash";
import { fetchData } from "../lib/fetch";

export default class FindAthlete extends React.Component {
  state = {
    athletes: [],
    value: ""
  };

  delayedCallback = debounce(this.updateAthletes, 400);

  render() {
    return (
      <>
        <Autocomplete
          inputProps={{
            className: "input",
            placeholder: "Search for athlete"
          }}
          getItemValue={item => item.name}
          items={this.state.athletes}
          renderItem={(item, isHighlighted) => (
            <div
              key={item.id}
              className="item"
              style={{ background: isHighlighted ? "#666666" : "#888888" }}
            >
              {item.name}
            </div>
          )}
          placeholder="Search for an athlete"
          menuStyle={{
            borderRadius: "3px",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
            background: "transparent",
            padding: "0 0 2px",
            fontSize: "90%",
            position: "fixed",
            overflow: "auto",
            maxHeight: "50%" // TODO: don't cheat, let it flow to the bottom
          }}
          value={this.state.value}
          onChange={this.onChange}
          onSelect={this.onSelect}
        />
        <style jsx>{`
          :global(.input) {
            padding: 0.5em;
            background-color: #444;
            border: 0;
            font-size: 0.8em;
            color: #efefef;
            font-family: "Source Sans", sans-serif;
          }

          :global(.input:focus) {
            outline-color: #336699;
          }

          .item {
            padding: 0.5em;
            background-color: #666;
            cursor: pointer;
          }

          .menu {
            padding-top: 0 !important;
          }
        `}</style>
      </>
    );
  }

  onSelect = (value, item) => {
    value => this.setState({ value });
    Router.push({ pathname: "/athlete", query: { id: item.id } });
  };

  onChange = async e => {
    e.persist();
    const q = e.target.value;

    if (q && q.length > 2) {
      this.delayedCallback(q);
    }

    this.setState({ value: q });
  };

  async updateAthletes(query) {
    const response = await fetchData(`2018/athletes?term=${query}`);

    if (!response.ok) {
      console.log(`Error ${response.status}: ${response.statusText}`);
      return;
    }

    const athletes = await response.json();
    this.setState({ athletes });
  }
}
