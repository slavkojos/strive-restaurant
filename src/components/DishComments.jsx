import { ListGroup } from "react-bootstrap";
import React from "react";

class DishComments extends React.Component {
  render() {
    return this.state.selectedDish ? (
      <ListGroup>
        <h2>Comments for {this.state.selectedDish.name}</h2>
        {this.state.selectedDish.comments.map((c) => (
          <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
        ))}
      </ListGroup>
    ) : (
      <h1>NOTHING YET</h1>
    );
  }
}
/* const DishComments = (props) =>
    props.selectedDish
        ? <ListGroup>
            <h2>Comments for {props.selectedDish.name}</h2>
            {
                props.selectedDish.comments.map(c => (
                    <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                ))
            }
        </ListGroup>
        : <h1>NOTHING YET</h1> */

export default DishComments;

// mapping props.selectedDish.comments
