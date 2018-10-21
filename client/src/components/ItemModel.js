import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemMoal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange=e=>{
      this.setState({ [e.target.name]:e.target.value })
  }

  onSubmit= e=>{

    e.preventDefault();
    const newItem={
        id:uuid,
        name:this.state.name
    }

    //add item via action


    this.props.addItem(newItem);

    this.toggle();

  }

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBotton: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <input type="text" name="name" id="item"
                placeholder="Add Shopping list"
                onChange={this.onChange}
                />
                <Button  
                color="dark"
                style={{marginTop:'2rem'}}
                block
                >
                Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state =>{
    item:state.item
}

export default connect(mapStateToProps , {addItem})(ItemMoal);
