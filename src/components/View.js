import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import Edit from "./Edit.js";

class View extends Component {
  state = {
    isOpen: false,
    id: ""
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  onOpen = () => {
    this.setState({ isOpen: true, id: this.props.id });
  };

  render() {
    const { isOpen, id } = this.state;
    const { data, deleteRow, updateRow, getUserById } = this.props;
    const imgstyle = { width: "200px", height: "200px" };
    return (
      <div>
        <Edit
          onClose={this.onClose}
          isOpen={isOpen}
          id={id}
          updateRow={updateRow}
          getUserById={getUserById}
        />
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body >
            {data.map((row) => (
              <Table.Row key={row.name} >
                <Table.Cell>
                  <img src={row.image} style={imgstyle} />
                </Table.Cell>
                <Table.Cell style={{ padding: "50px" }}>
                  <h3>{row.name}</h3>
                </Table.Cell>
                <Table.Cell style={{ padding: "50px", color: "grey" }}>
                  <h4>{row.username}</h4>
                </Table.Cell>
                <Table.Cell style={{ padding: "50px" }}>
                  <Button
                    content="Edit"
                    style={{ backgroundColor: "blue" }}
                    onClick={() => {
                      this.setState({ isOpen: true, id: row.name });
                    }}
                  />
                  &nbsp;&nbsp;
                  <Button
                    content="Delete"
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      deleteRow(row.name);
                    }}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default View;
