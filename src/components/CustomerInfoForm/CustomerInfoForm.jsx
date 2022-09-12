import react from 'react';
import { useState } from 'react';

import './CustomerInfoForm.css';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function CustomerInfoForm({setCustomerInfo}){
    console.log('In Customer Info Form');
    // setting local state
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [pickup_or_delivery, set_Pickup_or_delivery] = useState('pickup');

    const handleChange = (event) => {
        set_Pickup_or_delivery(event.target.value)
    }

    function onSubmitCustomer(event) {
        event.preventDefault();

        setCustomerInfo({
            name,
            address,
            city,
            zip,
            type: pickup_or_delivery,
        });

        console.log('customer info is', customerInfo);

        console.log('In on submit');


    }

    return (
        <>
            {/* Setting on submit funtion */}
            <form onSubmit={onSubmitCustomer}>


                <h3>Step 2: Customer Information</h3>
                <div className='inputContainer'>



                    <div className='textInputs'>
                        <div>
                            <input className='inputs' id="name" type="text" placeholder="Name"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div>
                            <input className='inputs' id="address" placeholder="Street Address"
                                onChange={e => setAddress(e.target.value)}
                                value={address}
                            />
                        </div>
                        <div>


                            <input className='inputs' id="city" type="text" placeholder="City"
                                onChange={e => setCity(e.target.value)}
                                value={city}
                            />
                        </div>

                        <div>
                            <input className='inputs' id="zip" type="number" placeholder="Zip"
                                onChange={e => setZip(e.target.value)}
                                value={zip}
                            />
                        </div>

                    </div>

                    <div className='radioBtnInputs' onChange={handleChange}>

                        <input className="radioInputs" type="radio" id="pickup" name="pickup_or_delivery"
                            value="Pickup"
                        />
                        <label htmlFor="pickup">Pickup</label><br />

                        <input className="radioInputs" type="radio" id="delivery" name="pickup_or_delivery"
                            value="Delivery"
                        />
                        <label htmlFor="delivery">Delivery</label><br />
                    </div>


                </div>
                <div className='formBtn'>
                    <Link to={'/checkout'} >
                        <Button type="submit" className="next-button" size="md" variant="primary">
                            Next
                        </Button>
                    </Link>
                </div>
            </form>
        </>
    )
}


export default CustomerInfoForm;