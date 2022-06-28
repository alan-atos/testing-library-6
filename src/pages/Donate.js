import { Confirm } from '../pages/Confirm';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
useNavigate
} from "react-router-dom";
import { useState } from 'react';

export const Donate = () => {

    const navigate = useNavigate()

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }

  return (
    <>
        <p id="donate-title" >
            MAKE OR EDIT YOUR DONATIONS
        </p>
        <div>
            <p id="donating-associate-title">
                        DONATING ASSOCIATE
            </p>
            <div id="associate-data">
                <TextField
                    label="Associate name"
                    id="outlined-size-small"
                    defaultValue="Trey Banks"
                    size="small"
                    disabled
                />
                <TextField
                    label="LDAP"
                    id="outlined-size-small"
                    defaultValue="tab3s1m"
                    size="small"
                    disabled
                />
            </div>
            
            <div id='enter-amount-form'>
            <div id="amount-title">SELECT OR ENTER AN AMOUNT</div>
                <div class="radio-toolbar">
                    <input type="radio" id="radioApple" name="radioFruit" value="5" />
                    <label for="radioApple">5</label>

                    <input type="radio" id="radioBanana" name="radioFruit" value="10"/>
                    <label for="radioBanana">10</label>

                    <input type="radio" id="radioOrange" name="radioFruit" value="15"/>
                    <label for="radioOrange">15</label> 
                    
                    <input type="radio" id="radioTwenty" name="radioFruit" value="20"/>
                    <label for="radioTwenty">20</label> 
                    
                    <input type="radio" id="radioTwentyFive" name="radioFruit" value="orange"/>
                    <label for="radioTwentyFive">25</label> 

                    <input type="radio" id="radioFifty" name="radioFruit" value="orange"/>
                    <label for="radioFifty">50</label> 

                    <input type="radio" id="radioSeventyFive" name="radioFruit" value="orange"/>
                    <label for="radioSeventyFive">75</label> 
                    
                    <input type="radio" id="radioOneHundred" name="radioFruit" value="orange"/>
                    <label for="radioOneHundred">100</label> 
                    
                    <input type="radio" id="radioOneHundredFifty" name="radioFruit" value="orange"/>
                    <label for="radioOneHundredFifty">150</label> 
                </div>
                
                <div id='enter-amount'>
                    <label id='enter-amount-label'>$
                    <input id='enter-amount-input' type="text" name="name" placeholder="Enter different amount" onfocus="this.placeholder = ''" />
                    </label>
                </div>
                <div id="next">
                    <button onClick={() => navigate('/confirm')} id='next__button' >Next</button>
                </div>


            </div>
            
        </div>

  </>
  )
}
