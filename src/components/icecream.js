import React from 'react';

// the Orders file is imported here so that the orders are passed to this file to be displayed on the app page.
import { Orders } from './orders';
import axios from 'axios';

// I imported the alert package from bootstrap so that i could put coloured containers around selected components
import Alert from 'react-bootstrap/Alert'

//this class stores the read component
{/* the red text is all the information that will feature on the order page, including order name, flavor, size, toppings and picture. */ }
export class Icecream extends React.Component {

    // this event is called when an order is deleted so that the page can be reloaded with the new data.
    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        orders: []

    };

    //  Here is the url for the list of new orders that appear on the read page of the app. 
    //  The "then method" is used to update the orders property with the data from the given url.
    //  The "catch method" is used to log an error to the console of the browser. 
    //  A new api from localhost:4000 is used here so that the data is now gotten from there.
    componentDidMount() {
        axios.get('http://localhost:4000/api/orders')
            .then((response) => {
                this.setState({ orders: response.data })
            })
            .catch((error) => {
                console.log(error)
            });

    }

    // here with the reload data function, after an order is cancelled, the data from the 
    // database is sent back to the app with the cancelled order removed from it.
    ReloadData() {
        axios.get('http://localhost:4000/api/orders')
            .then((response) => {
                this.setState({ orders: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            // Here the alert tag is opened which puts a coloured box around the order form
            <Alert variant="info">
                {/* an alert header is used here to display a header text above the orders on the page */}
                <Alert.Heading>View our incoming orders here.</Alert.Heading>
                <div className="App">
                    {/* Here information about the orders is passed to the ice cream component */}
                    {/* Here the event is called with reload data*/}
                    <Orders orders={this.state.orders} ReloadData={this.ReloadData}></Orders>
                </div>
            </Alert>
        );
    }
}
{/*The tag above sends information about the orders to the component orders. */ }

