import { useEffect, useState } from 'react';
import './payment.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import upi from '../../assets/payment/upi-payment-icon.webp'
import razorpay from '../../assets/payment/razorpay-icon.webp'
import paytm from '../../assets/payment/paytm-icon.webp'
import Button from '@mui/material/Button';

const Payment = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
    ]

    useEffect(() => {
        // Fetch countries from an API
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setCountries(data.map(country => country.name.common));
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        // Fetch states based on the selected country
        // fetch(`https://api.first.org/data/v1/states?country=${event.target.value}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         setStates(data.data.map(state => state.name));
        //     })
        //     .catch(error => console.error('Error fetching states:', error));
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };
    const baseprice = 29;

    const padZero = (value) => {
        return value < 10 ? `0${value}` : value;
    };

    const calculateDate = (offset) => {
        const currentDate = new Date();
        const targetDate = new Date(currentDate.getTime());

        // Calculate target date based on offset
        if (offset === '1 week') {
            targetDate.setDate(currentDate.getDate() + 7);
        } else if (offset === '1 month') {
            targetDate.setMonth(currentDate.getMonth() + 1);
        } else if (offset === '3 months') {
            targetDate.setMonth(currentDate.getMonth() + 3);
        } else if (offset === '6 months') {
            targetDate.setMonth(currentDate.getMonth() + 6);
        }

        const day = padZero(targetDate.getDate());
        const month = padZero(targetDate.getMonth() + 1);
        const year = targetDate.getFullYear();

        return `${day}/${month}/${year}`;
    };
    const colore = '#2f1c6a';
    const changeactive = (ind) => {
        let card = document.querySelectorAll('.cards .card');
        for (let i = 0; i < card.length; i++) {
            card[i].classList.remove('active');
        }
        card[ind].classList.add('active')
        // console.log(card[ind].classList);
    }
    return (
        <>
            <div className="payment">
                <div className="mater">
                    <h1>Choose a Period</h1>
                    <div className="cards">
                        <div className="card active" onClick={() => changeactive(0)}>
                            <span>SAVE ₹1500.00</span>
                            <div className='period'>1 WEEK</div>
                            <div className='not'> ₹0 </div>
                            <div className='price'>₹{baseprice}.00</div>
                            <div className='des'>INR/week</div>
                            <div className="renew">Plan renews at ₹29.00/week on {calculateDate('1 week')}</div>
                        </div>
                        <div className="card" onClick={() => changeactive(1)}>
                            <span>SAVE ₹30.00</span>
                            <div className='period'>1 Month</div>
                            <div className='not'> ₹100 </div>
                            <div className='price'>₹70.00</div>
                            <div className='des'>INR/Month</div>
                            <div className="renew">Plan renews at ₹29.00/week on {calculateDate('1 month')}</div>
                        </div>
                        <div className="card" onClick={() => changeactive(2)}>
                            <span>SAVE ₹50.00</span>
                            <div className='period'>3 Months</div>
                            <div className='not'> ₹300 </div>
                            <div className='price'>₹250.00</div>
                            <div className='des'>INR/Month</div>
                            <div className="renew">Plan renews at ₹29.00/week on {calculateDate('3 months')}</div>
                        </div>
                        <div className="card" onClick={() => changeactive(3)}>
                            <span>SAVE ₹300.00</span>
                            <div className='period'>6 Months</div>
                            <div className='not'> ₹600 </div>
                            <div className='price'>₹300.00</div>
                            <div className='des'>INR/Month</div>
                            <div className="renew">Plan renews at ₹29.00/week on {calculateDate('6 months')}</div>
                        </div>

                    </div>

                    <h1>Select Payment</h1>
                    <div className="paymentgateway">
                        <div className="method">
                            <div className="card">
                                <span>UPI</span>
                                <span><img src={upi} alt="" /></span>
                            </div>
                            <div className="card active">
                                <span>Razorpay</span>
                                <span><img src={razorpay} alt="" /></span>
                            </div>
                            <div className="card">
                                <span>PayTM</span>
                                <span><img src={paytm} alt="" /></span>
                            </div>
                        </div>
                        <div className="paymentdetail">
                            <form action="#">
                                <div className='initial'>
                                    <b> <p>BattleFiesta - 1 Week Plan</p></b>
                                    <span> <b>₹500.00</b></span>
                                </div>
                                <Divider variant="middle" />
                                <div className='half'>
                                    <TextField required size='small' id="outlined-basic" label="Full Name" variant="outlined" sx={{ width: '47%' }} />
                                    <TextField required size='small' id="outlined-basic" label="Phone Number" variant="outlined" sx={{ width: '47%' }} />
                                </div>
                                <div className='half'>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        size='small'
                                        required
                                        options={top100Films}
                                        sx={{ width: '47%' }}
                                        renderInput={(params) => <TextField {...params} label="Country" />}
                                    />
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        size='small'
                                        options={top100Films}
                                        required
                                        sx={{ width: '47%' }}
                                        renderInput={(params) => <TextField {...params} label="State" />}
                                    />
                                </div>
                                <div className='half'>
                                    <TextField required size='small' id="outlined-basic" label="City" variant="outlined" sx={{ width: '47%' }} />
                                    <TextField required size='small' id="outlined-basic" label="Pin Code" variant="outlined" sx={{ width: '47%' }} />
                                </div>
                                <Divider variant="middle" />
                                <div className='full'>
                                    <div className="under">
                                        <span>Plan</span>
                                        <span>₹1200.00</span>
                                    </div>
                                    <div className="under">
                                        <span>Tax</span>
                                        <span>₹100.00</span>
                                    </div>
                                    <div className="under">
                                        <span>Coupon</span>
                                        <span style={{ color: 'green' }}>- ₹400.00</span>
                                    </div>
                                </div>
                                <div className='full'>
                                    <div className="under">
                                        <b><span>Final Price</span></b>
                                        <span> <b>₹900.00</b></span>
                                    </div>
                                </div>
                                <Divider variant="middle" />
                                <div style={{ padding: '10px 0px' }}>
                                    <h2>Have a coupon code?</h2>
                                    <div style={{ padding: '10px 0px' }}>
                                        <TextField size='small' id="outlined-basic" label="Enter a coupon code" variant="outlined" />
                                        <Button className='btn' sx={{ ml: 4, background: '#2980b9' }} variant="contained">Apply</Button>
                                    </div>
                                </div>
                                <Divider variant="middle" />
                                <div style={{ padding: '10px 0px' }}>
                                    <input required type="checkbox" name="" id="termsCheckbox" />
                                    <label style={{ marginLeft: 8, cursor: 'pointer' }} htmlFor="termsCheckbox">I Agree to the Terms and Conditions</label>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <Button className='btn' type='submit' sx={{ mt: 1 }} variant="contained">Proceed to Payment</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Payment;