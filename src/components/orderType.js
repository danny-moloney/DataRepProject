import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// Imported card and button from bootstrap so that we could implement the stlye into our app

export class OrderType extends React.Component {

    constructor() {
        super();

        this.DeleteOrder = this.DeleteOrder.bind(this);
    }
    // Here a function is called from where we created the delete button
    // Here a method is called to cancel an order, the order id is logged to the console
    DeleteOrder(e) {
        e.preventDefault();
        console.log("Cancel: " + this.props.order._id);
        // Here we have our call to go to the server and cancel an order with a particular id
        axios.delete("http://localhost:4000/api/orders/" + this.props.order._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            <div>
                {/* Here i used code from bootstrap to make the orders page of my app look nicer, and the card is imported at the top of this file.*/}
                <Card>
                    <Card.Header>{this.props.order.name}</Card.Header>
                    <Card.Body>
                        <blockquote classname="blockquote mb-0">
                            {/*Width and height tags used to decide the size of the ice-cream pictures */}
                            <img src={this.props.order.picture} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.order.flavor}</p>
                                <p>{this.props.order.size}</p>
                                <p>{this.props.order.toppings}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>

                    {/* This link will pass the id of the order that i am editing from the app to the database */}
                    <Link to={"/edit/" + this.props.order._id} className="btn btn-primary">Edit</Link>
                    {/* here a red cancel button is added to the icecream page that is used to cancel orders */}
                    <Button variant="danger" onClick={this.DeleteOrder}>Cancel</Button>
                </Card>
            </div>

        );
    }

}


export default OrderType;