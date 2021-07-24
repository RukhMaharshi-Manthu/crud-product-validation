import React, { Component } from "react";
import { Form, Modal, Button } from "semantic-ui-react";

class Add extends Component {
  initialState = {
    form: {
      name: "",
      username: "",
      image: ""
    }
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    this.setState({
      form: { ...this.state.form, [name]: value }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, username, image } = this.state.form;
    console.log(name);
    console.log(username);
    console.log(image);
    const { addRow } = this.props;
    console.log("details of add row");
    console.log(addRow);
    const newUser = {
      image,
      name,
      username
    };

    addRow(newUser);
    this.setState(this.initialState);
    console.log(this.initialState);
  };

  render() {
    const { name, username, image } = this.state.form;

    return (
      <Modal trigger={<Button content="Add New User" />} closeIcon>
        <Modal.Header>Add New User</Modal.Header>
        <Modal.Content>
          <Form
            onSubmit={this.handleSubmit}
            style={{
              marginLeft: "300px",
              border: "2px solid black",
              width: "300px",
              height: "300px"
            }}
          >
            <Form.Field style={{ width: "100px", height: "50px" }}>
              <Form.Input
                label="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
                autoFocus={true}
              />
            </Form.Field>

            <Form.Field style={{ width: "100px", height: "50px" }}>
              <Form.Input
                label="image"
                name="image"
                value={image}
                onChange={this.handleChange}
                autoFocus={true}
              />
            </Form.Field>

            <Form.Field style={{ width: "100px", height: "50px" }}>
              <Form.Input
                label="Username"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </Form.Field>
<br/>
            <Button style={{marginLeft:"20px"}}
              type="submit"
              content="Submit"
              disabled={!name || !username}
            />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Add;
