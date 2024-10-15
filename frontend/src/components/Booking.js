import React, { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import axios from 'axios';
import "./Booking.css"; // Ensure this contains your responsive styles

const Booking = () => {
    const location = useLocation();
    const { eventName, eventPrice } = location.state || {};

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tickets, setTickets] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');

    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const totalPrice = eventPrice * tickets;

        const bookingDetails = {
            name,
            email,
            eventName,
            tickets,
            totalPrice,
            paymentMethod
        };

        try {
            const response = await axios.post('http://localhost:5000/api/bookings', bookingDetails);
            if (response.status === 200) {
                alert('Booking successful!');
                Navigate('/');

            } else {
                alert('Error in booking. Please try again.');
            }
        } catch (error) {
            console.error('Error booking the event:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="booking-main">
            <center>
                <form className="bookform" onSubmit={handleSubmit}>
                    <h2>Booking</h2>
                    
                    <div>
                        <label>NAME:</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>

                    <div>
                        <label>EMAIL:</label>
                        <input 
                            type="" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>

                    <div>
                        <label>EVENT NAME:</label>
                        <input 
                            type="text" 
                            value={eventName} 
                            readOnly 
                        />
                    </div>

                    <div>
                        <label>TICKETS:</label>
                        <input 
                            type="number" 
                            value={tickets} 
                            onChange={(e) => setTickets(Number(e.target.value))} 
                            min="1" 
                            required 
                        />
                    </div>

                    <div>
                        <label>PRICE:</label>
                        <input 
                            type="text" 
                            value={`₹${eventPrice * tickets}`} 
                            readOnly 
                        />
                    </div>

                    <div className="payment-method">
                        <label>PAYMENT METHOD:</label>
                        <select 
                            value={paymentMethod} 
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="Credit Card">Credit Card</option>
                            <option value="Gpay">Gpay</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                    </div>

                    <button type="submit">BUY TICKET</button>
                </form>
            </center>
        </div>
    );
};

export default Booking;
