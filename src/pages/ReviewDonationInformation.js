import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch,
    useNavigate
} from "react-router-dom";

export const ReviewDonationInformation = () => {
    const navigate = useNavigate()

    return (
        <>
            <p id="donate-title" >
                MAKE OR EDIT YOUR DONATIONS
            </p>

            <div id='review-form'>

            <div>
                <p id="review-subtitle">Review information before submitting</p>
                <div id="review--items--container">
                    <div id="review--items--container__items">
                        <p id="review--menu--subject">Amount</p>
                        <p id="review--menu--subject">Frequency</p>
                        <p id="review--menu--subject">Donating via</p>
                        <p id="review--menu--subject">LDAP</p>
                        <p id="review--menu--subject">Name</p>
                        <p id="review--menu--subject">Date</p>
                    </div>
                    <div id="review--items--container__items">
                        <button id="review--menu--item">$5</button>
                        <button id="review--menu--item">Every pay period</button>
                        <button id="review--menu--item">Paycheck</button>
                        <button id="review--menu--item">tab3s1m</button>
                        <button id="review--menu--item">Trey Banks</button>
                        <button id="review--menu--item">06/01/2022</button>
                    </div>
                </div>
                
            </div>

            <div id="review-buttons">
                <div id="next">
                    <button onClick={() => navigate('/donate')}  id='edit__button' >EDIT</button>
                </div>
                <div id="next">
                    <button id='next__button' >SUBMIT</button>
                </div>
            </div>


            </div>
        </>
        
    )
  }
  