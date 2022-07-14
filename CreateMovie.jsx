import React, { Component } from 'react';
import axios from 'axios';
class CreateMovie extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            rating: '',
            released_date: ''
        }
    }
    changename = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    changerating = (event) => {
        this.setState({
            rating: event.target.value
        })
    }
    changereleased_date = (event) => {
        this.setState({
            released_date: event.target.value
        })
    }
    formSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state);
        await axios.post("http://localhost:3000/movies", this.state);
        alert("Successfully Add");
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center d-flex">
                        <div className="col-8 alert alert-info text-center">
                            <h1>Create Movie</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center d-flex">
                        <div className="col-8  p-0 m-0">
                            <form onSubmit={this.formSubmit} className='bg-warning p-5'>
                                <div>
                                    <label className='m-0 mt-2'>Movie Name</label>
                                    <input type="text" className='form-control' name='name' onChange={this.changename} value={this.state.name} />
                                </div>
                                <div>
                                    <label className='m-0 mt-2'>Movie Rating</label>
                                    <input type="number" className='form-control' name='rating' onChange={this.changerating} value={this.state.rating}/>
                                    {/* <select name="rating" className='form-control' onSelect={this.changerating} value={this.state.rating}>
                                        <option value="">Choose</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select> */}
                                </div>
                                <div>
                                    <label className='m-0 mt-2'>Movie Released Date</label>
                                    <input type="date" className='form-control' name='released_date' onChange={this.changereleased_date} value={this.state.released_date} />
                                </div>
                                <div className='text-center'>
                                    <button className="btn btn-primary text-center mt-4">Save Details</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateMovie;
