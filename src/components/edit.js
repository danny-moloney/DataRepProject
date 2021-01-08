// After the edit button on the ice cream page is selected, the code from this page appears on
// a new web page that lets you change the data from the orders.
import React from 'react';
import axios from 'axios';

// I imported the alert package from bootstrap so that i could put coloured containers around selected components
import Alert from 'react-bootstrap/Alert'

// This class stores the create component. 
export class Edit extends React.Component {

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

        // the constructor allows all of the edited data from these six fields pass up to the server.
        this.state = {
            Name: '',
            Flavor: '',
            Size: '',
            Toppings: '',
            Picture: ''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        // Here the data that is being edited is displayed in the boxes so that you can 
        // see what the data is before it is edited to something different.
        axios.get('http://localhost:4000/api/orders/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Name:response.data.name,
                Flavor:response.data.flavor,
                Size:response.data.size,
                Toppings:response.data.toppings,
                Picture:response.data.picture
            });
        })
        .catch( (error)=> {
            console.log(error);
        })
        
    }
    // The onChange method is used to edit the choosen orders and pass the new information up to the database.
    // the method takes the choosen input values from the create file and changes them using this.setState.
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeFlavor(e) {
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

    onSubmit(e) {
        // the preventdefault is used to stop the method from being called multiple times if the button is clicked more than once
        e.preventDefault();
        alert("Ice-cream: " + this.state.Name + " " + this.state.Flavor + " "+ this.state.Size + " "+ this.state.Toppings + " " + this.state.Picture);

    

            // The name, flavor, size, toppings and picture are used here to make an object 
            // to be passed up to the server.
            const newOrder = {
                name: this.state.Name,
                flavor: this.state.Flavor,
                size: this.state.Size,
                toppings: this.state.Toppings,
                picture: this.state.Picture,
                _id: this.state._id
            }

            // Here the new data that has just been edited is passed up to the icecream page through the url 
            // it is resent to the ice-cream page so that the old data can be replaced with the new edited data
            axios.put('http://localhost:4000/api/orders/'+this.state._id, newOrder)
            .then(res =>{
                console.log(res.data)
            })
            .catch();
    
            // Here the post request is made asynchronously to send data onto the server.
            // axios.post('http://localhost:4000/api/orders', newOrder)
            
            // // The .then method is the happy path and the .catch method is called if there is a bug.
            // .then((res)=>{
            //     console.log(res)
            // })
            // .catch((err)=>{
            //     console.log(err);
            // });
    
        }

    render() {
        return (
            <Alert variant="info">
                {/* Here the alert tag is opened which puts a coloured box around the order form */}
                <Alert.Heading>Edit your order here</Alert.Heading>
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                     {/* The class name form-group is used so that all the data with that class name 
                         is grouped together after the from is complete, this includes the new data that 
                         has been changed and the old data that remains the same and the data from the 
                         order is shown on the ice-cream page*/}
                    <div className="form-group">
                         {/* the label tag is used to show text from the form on the app */}
                        <label>Edit Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Edit Flavor: </label>
                        {/* input type text is used so that textbox appears under the label text that
                              allows users to enter text that then becoves that labels value */}
                        <input type='text'
                        className='form-control'
                        value={this.state.Flavor}
                        onChange={this.onChangeFlavor}></input>
                    </div>
                    <div className="form-group">
                        <label>Edit Size: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Size}
                        onChange={this.onChangeSize}></input>
                    </div>
                    <div className="form-group">
                        <label>Edit Toppings: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Toppings}
                        onChange={this.onChangeToppings}></input>
                    </div>

                <div className='form-group'>
                    <label>Edit Ice-cream Picture:</label>
                    <textarea type='text'
                    className='form-control'
                    value={this.state.Picture}
                    onChange={this.onChangePicture}></textarea>


                </div>

                    <div className="form-group">
                        <input type='submit'
                        // Here is the edit order button, this is clicked to submit the 
                        // order and display it on the ice-cream page 
                            value='Edit Order'
                            // btn-primary is used to give the button a blue colour
                            className='btn btn-primary'></input>
                    </div>
                </form>



            </div>
            </Alert>
        );
    }
}