import React, {useEffect, useState} from "react";

const AddTechModal= () =>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName ] = useState("")


    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: '<P>Please enter a first and last name</P>' });
        } else {
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            };

            // addLog(newLog);

            M.toast({ html: `Log added by ${tech}` });

            // Clear Fields
            setFirstName('');
            setLastName('');
        }
    };

    return (

        //%%% wonderful inside window by materialize
        <div id='add-techs-modal' className='modal'>
            <div className='modal-content'>
                <h4>Enter System Log</h4>

                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor='firstName' className='active'>
                                First Name
                        </label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='lastName'
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor='lastName' className='active'>
                            Last Name
                        </label>
                    </div>
                </div>

            </div>
            <div className='modal-footer'>
                <a
                    href='#!'
                    onClick={onSubmit}
                    className='modal-close waves-effect blue waves-light btn-flat'
                >
                    Enter
                </a>
            </div>
        </div>
    );
};

export default AddTechModal;