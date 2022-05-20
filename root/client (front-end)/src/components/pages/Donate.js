import React, { useState } from "react";
import Footer from '../Footer'
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import {} from '../../styles/pages/Donate.css'

const Donate = () => {
    const [itemName, setItemName] = useState ("");
    const [expDate, setExpDate] = useState ("");
    const [dateOfDonation, setDateofDonation] = useState ("");
    const [companyName, setCompanyName] = useState ("");
    const [itemType, setItemType] = useState ("");
    const[errorPresentMoney, setErrorPresentMoney] = useState(false);
    const[errorValue, setErrorValue] = useState('');
    const[successfulIngredient, setSuccessfulIngredient] = useState(false);
    const[successfulMoney, setSuccessfulIMoney] = useState(false);
    const[isLoading, setIsLoading] = useState(false);
    const[donateAs, setDonateAs] = useState('');
    const[nameOnCard, setNameOnCard] = useState('');
    const[cardNumber, setCardNumber] = useState('');
    const[cardExpDate, setCardExpDate] = useState('');
    const[amount, setAmount] = useState('');

    const ingredients = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const ingredients_url = "http://localhost:8080/api/donation/createForm";
        axios.post(ingredients_url, {
            itemName: itemName,
            expiryDate: expDate,
            dateOfDonation: dateOfDonation,
            companyName: companyName,
            itemType: itemType
        }).then(function (response) {
            console.log(response.data);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
            if(response.status === 200) {
                setErrorValue("Donation Successful");
                setSuccessfulIngredient(true);
                setTimeout(() => {
                    setSuccessfulIngredient(false);
                }, 1500);
            }
        }).catch(err => {
            setErrorValue(JSON.stringify(err.response));
            console.log(JSON.stringify(err.response));
        })
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    };

    const moneyDonation = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const money_url = "http://localhost:8080/api/moneyDonation/addDonation";
        axios.post(money_url, {
            donateAs: donateAs,
            nameOnCard: nameOnCard,
            cardNumber: cardNumber,
            cardExpDate: cardExpDate,
            amount: amount
        }).then(function (response) {
            console.log(response.data);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
            if(response.status === 200) {
                setErrorValue("Donation Successful");
                setSuccessfulIMoney(true);
                setTimeout(() => {
                    setSuccessfulIMoney(false);
                }, 1500);
            }
        }).catch(err => {
            setErrorValue(JSON.stringify(err.response.data));
            setErrorPresentMoney(true);
            setTimeout(() => {
                setErrorPresentMoney(false);
            }, 5000);
        })
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    };


    return (
        <div className={"helpPageDonation"}>
            <div className = "donationBackround">
                <div className = "IngredientFormPage">
                    <form className="IngredientForm" onSubmit={ingredients}>
                        <h1 className = "donHeader">Donate Ingredients/Foods</h1>
                        <label>Ingredient/Food: (*)</label>
                        <input className="donInput" type="text" required minLength={3} maxLength={20}
                               onChange={e => setItemName(e.target.value)}
                        />

                        <label>Expiration Date: (*)</label>
                        <input className="donInput" type="date" required
                               onChange={e => setExpDate(e.target.value)}
                        />

                        <label>Date of Donation: (*)</label>
                        <input className="donInput" type="date" required
                               onChange={e => setDateofDonation(e.target.value)}
                        />

                        <label>Company Name:</label>
                        <input className="donInput" type="text" minLength={3} maxLength={20}
                               onChange={e => setCompanyName(e.target.value)}
                        />

                        <label>Donation Type: (*)</label>
                        <input className="donInput" type="text" required min={3} maxLength={10}
                               onChange={e => setItemType(e.target.value)}
                        />
                        <div>
                            {successfulIngredient
                                ? <Alert variant="danger" style={{
                                    textAlign: "center", marginTop: "0px", color: "lightGreen",
                                    fontSize: "17px", marginLeft: "-20%", marginRight: "-20%", textTransform: "none"
                                }}>{errorValue}</Alert>
                                : <Alert variant="success"/>
                            }
                        </div>
                        <button className="donateSubmitButton" type="submit" disabled={isLoading}>
                            {isLoading && <i className="fas fa-spinner fa-pulse"/>}
                            {!isLoading && <p>Submit</p>}
                        </button>
                    </form>
                </div>
                <div className = "MoneyFormPage">
                    <form className="MoneyForm" onSubmit={moneyDonation}>
                        <h1 className = "donHeader">Donate Money Today</h1>
                        <label>Donate As:</label>
                        <input className="donInput" type="text" required minLength={3} maxLength={20}
                               onChange={e => setDonateAs(e.target.value)}
                        />

                        <label>Name On Card:</label>
                        <input className="donInput" type="text" required minLength={3} maxLength={20}
                               style={{height: '43px'}} onChange={e => setNameOnCard(e.target.value)}
                        />

                        <label>Card Number:</label>
                        <input className="donInput" type="text" required minLength={16} maxLength={19}
                               style={{height: '43px'}} onChange={e => setCardNumber(e.target.value)}
                        />

                        <label>Expiration Date:</label>
                        <input className="donInput" type="month" required
                               style={{height: '37px'}} onChange={e => setCardExpDate(e.target.value)}
                        />

                        <label>Amount:</label>
                        <input className="donInput" type="number" required min={1}
                               onChange={e => setAmount(e.target.value)}
                        />
                        <div>
                            {errorPresentMoney
                                ? <Alert variant="danger" style={{
                                    textAlign: "center", marginTop: "0px", color: "red",
                                    fontSize: "17px", marginLeft: "-20%", marginRight: "-20%", textTransform: "none"
                                }}>Error : {errorValue}</Alert>
                                : <Alert variant="success"/>
                            }
                            {successfulMoney
                                ? <Alert variant="danger" style={{
                                    textAlign: "center", marginTop: "0px", color: "lightGreen",
                                    fontSize: "17px", marginLeft: "-20%", marginRight: "-20%", textTransform: "none"
                                }}>{errorValue}</Alert>
                                : <Alert variant="success"/>
                            }
                        </div>
                        <button className="donateSubmitButton" type="submit" disabled={isLoading}>
                            {isLoading && <i className="fas fa-spinner fa-pulse"/>}
                            {!isLoading && <p>Donate</p>}
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
            </div>
    );
}

export default Donate;
