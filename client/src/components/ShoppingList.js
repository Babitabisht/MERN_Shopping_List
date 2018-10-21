import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import "../App.css";
import {connect } from 'react-redux' ;
import {getItems,deleteItems} from '../actions/ItemAction';
import PropTypes from 'prop-types';


class ShoppingList extends Component {
  componentDidMount = () => {
    this.props.getItems();
  }

  onDeleteClick=(id)=>{
    this.props.deleteItems(id);
  }
  

  render() {
      const {items}=this.props.item;
    return (
      <Container>
       <ListGroup>
<TransitionGroup className="shopping-list">

{items.map( ({id,name})=>(
<CSSTransition key={id}
timeout={500} 
classNames="fade"
>
<ListGroupItem >
<Button
className="remove-btn"
color="danger"
size="sm"
onClick={this.onDeleteClick.bind(this,id) }

>
&times;
</Button> &nbsp;

{name}

</ListGroupItem>



</CSSTransition>
)  )


}


</TransitionGroup>

</ListGroup>

      </Container>
    );
  }
}

ShoppingList.propTypes={
  getItems:PropTypes.func.isRequired,
  deleteItems:PropTypes.func.isRequired,
  item:PropTypes.object.isRequired,
  
}

const mapStateToProp=(state)=>({
  item:state.item
})
export default connect(mapStateToProp,{getItems,deleteItems} )( ShoppingList);
