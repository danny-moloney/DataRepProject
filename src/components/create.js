import React from 'react';
import axios from 'axios';

// Importing the alert from bootstrap allows me to put a coloured alert box around the components on my app
import Alert from 'react-bootstrap/Alert'

// This class stores the create component. 
export class Create extends React.Component {

    constructor() {
        // We use super() in the constructor to invoke the constructor of the parent class.
        super();

        // the .bind is used to bind the data to the particular instance it is used in
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFlavor = this.onChangeFlavor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeToppings = this.onChangeToppings.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);

        // the constructor allows all of the data from these six fields pass up to the server.
        this.state = {
            Name: '',
            Flavor: '',
            Size: '',
            Toppings: '',
            Picture: ''
        }
    }

    // Here i have the onChange method that is called when the value of the input control changes.
    // There is a method for each of the five inputs.
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeFlavor(e) {
        // setState is used to update the order when the value changes.
        this.setState({
            Flavor: e.target.value
        });
    }

    onChangeSize(e) {
        this.setState({
            Size: e.target.value
        });
    }

    onChangeToppings(e) {
        this.setState({
            Toppings: e.target.value
        });
    }

    onChangePicture(e) {
        this.setState({
            Picture: e.target.value
        });
    }

    // the onsubmit method is called when the submit button is clicked
    onSubmit(e) {

        // the preventdefault is used to stop the method from being called multiple times if the button is clicked more than once
        e.preventDefault();
        alert("Ice-cream: " + this.state.Name + " " + this.state.Flavor + " " + this.state.Size + " " + this.state.Toppings + " " + this.state.Picture);



        //  The name, flavor, size, toppings and picture are used here to make an object
        //  to be passed up to the server.
        const newOrder = {
            name: this.state.Name,
            flavor: this.state.Flavor,
            size: this.state.Size,
            toppings: this.state.Toppings,
            picture: this.state.Picture
        }

        //  Here the post request is made asynchronously to send data onto the server.
        axios.post('http://localhost:4000/api/orders', newOrder)

            //  The .then method is the happy path and the .catch method is called if there is a bug.
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            });

    }

    render() {
        return (

            // Here the alert tag is opened which puts a coloured box around the order form
            <Alert variant="info">
                <Alert.Heading>Place your order here</Alert.Heading>
                <div className='App'>
                    <form onSubmit={this.onSubmit}>

                        {/* This is the add order form that appears on the add order page of my app */}
                        <div className="form-group">
                            {/* the label tag is used to show text from the form on the app */}
                            <label>Add Name: </label>
                            <input type='text'
                                className='form-control'
                                // The onChange tag connects to the tag on the edit page. it links with 
                                //that page for when part of the order is being changed on the edit form.
                                value={this.state.Name}
                                onChange={this.onChangeName}></input>
                        </div>
                        {/* The class name form-group is used so that all the data with that class name is 
                         grouped together after the from is complete and the data from the order is shown 
                         on the ice-cream page*/}
                        <div className="form-group">
                            <label>Add Flavor: </label>
                            <input type='text'
                                className='form-control'
                                value={this.state.Flavor}
                                onChange={this.onChangeFlavor}></input>
                        </div>
                        <div className="form-group">
                            <label>Add Size: </label>
                            {/* input type text is used so that textbox appears under the label text that
                              allows users to enter text that then becoves that labels value */}
                            <input type='text'
                                className='form-control'
                                value={this.state.Size}
                                onChange={this.onChangeSize}></input>
                        </div>
                        <div className="form-group">
                            <label>Add Toppings: </label>
                            <input type='text'
                                className='form-control'
                                value={this.state.Toppings}
                                onChange={this.onChangeToppings}></input>
                        </div>

                        <div className='form-group'>
                            <label>Ice-cream Picture:</label>
                            <textarea type='text'
                                className='form-control'
                                value={this.state.Picture}
                                onChange={this.onChangePicture}></textarea>


                        </div>

                        <div className="form-group">
                            {/* Here is the add order button, this is clicked to submit the 
                            order and display it on the ice-cream page */}
                            <input type='submit'
                                value='Add Order'
                                // btn-primary is used to give the button a blue colour
                                className='btn btn-primary'></input>
                        </div>
                    </form>



                </div>
            </Alert>
        );
    }
}