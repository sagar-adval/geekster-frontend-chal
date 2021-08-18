import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export const RestaurantFindForm = () => {

    const [address, setAddress] = useState('');
    const [outlet, setOutlet] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://geekster-task.herokuapp.com/restaurants/nearby?address=${address}`)
        .then(response => {
            if(response.data.message === 'Outlet not found') window.alert('No outlet found!');
            else window.alert(`Restaurant found: ${response.data.restaurant}`);
            setAddress('');
        });
}

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Restaurant Finder</h1>
                        <form className="form" onSubmit = {e => onSubmit(e)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Enter your address"
                                    name="address"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                                <input type="submit" className="btn btn-primary" value="Find" />
                            </div>
                        </form>
                </div>
                
            </div>
        </section>
    )
};

export default RestaurantFindForm
