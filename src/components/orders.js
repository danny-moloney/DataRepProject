import React from 'react';

// the order type component is imported into this file so that the information can be passed through
import { OrderType } from './orderType';

export class Orders extends React.Component {
    // the order array is passed down here, split apart and a new order type is 
    // created for each of the new orders entered
    render() {
        // the props tag is used to access the orders information being passed to the order component, and logs the information into the console.
        return this.props.orders.map((order) => {
            return <OrderType order={order} ReloadData={this.props.ReloadData}></OrderType>;
        });
    }
}


export default Orders;