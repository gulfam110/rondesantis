import React from 'react'
import './JoinTheFight.css'

const JoinTheFight = () => {
  return (
    <div className='container'>
        <div className='fight-width'>
          <div className='fight-form'>
            <div className='form-div'>
                <div className='first-name'>
                    <input type='text' placeholder='First Name'  required = "required"/>
                </div>
                <div className='last-name'>
                <input type='text' placeholder='Last Name'  required = "required"/>

                </div>
                <div>
                <input type='text' placeholder='Email'  required = "required"/>

                </div>
                <div>
                <input type='text' placeholder='Zip'  required = "required"/>

                </div>
                <div>
                <input type='text' placeholder='Mobile Phone'  required = "required"/>

                </div>
                <div>
                  <button type='submit' className='button-submit'>Join the fight</button>
                </div>

            </div>

            <div className='check-div'>
              <div className='check'>
                <span>
                  <input type='checkbox'/>
                  <label style={{color: 'white'}}> I want to receive text messages from the Ron Desantis Campaign</label>
                </span>
              </div>
            </div>
            <div className='text-div'>
                <p>
                By providing your mobile phone number, 
                you are giving your express written consent to receive 
                calls and SMS/MMS messages, including autodialed and 
                automated calls and texts, to that number from Ron DeSantis 
                for Governor. Msg frequency varies. Msg & data rates 
                may apply.. Text STOP to stop receiving messages. 
                Text HELP for support or e-mail 
                </p>
            </div>
            </div>
        </div>
    </div>
  )

  
}

export default JoinTheFight