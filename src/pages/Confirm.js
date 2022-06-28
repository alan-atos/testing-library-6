import { ReviewDonationInformation } from '../pages/ReviewDonationInformation';
import { TextField } from "@mui/material"
import {
useNavigate
} from "react-router-dom";

export const Confirm = () => {
    
    const navigate = useNavigate()
    
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

                    <div id="amount-title">How frequently do you want to donate this amount</div>

                    <div class="radio-toolbar frequency">
                        <div>
                            <input type="radio" id="radioEvery" name="radioFruit" value="5" />
                            <label for="radioEvery">EVERY PAY PERIOD</label>  
                        </div>
                        <div>
                            <input type="radio" id="radioOne" name="radioFruit" value="10"/>
                            <label for="radioOne">ONE TIME ONLY</label>
                        </div>
                    </div>

                    <div id="next">
                        <button onClick={() => navigate('/review')} id='next__button' >Next</button>
                    </div>
                    <div id="test"></div>

                    </div>
            </div>
        </>
    )
  }
  