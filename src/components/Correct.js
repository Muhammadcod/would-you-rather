import React, {useState} from "react";
import {handleInputChange} from "react-select/src/utils";

function Correct()  {
    const {selectedOption,  setSelectedOption} = useState('select')
    const {redirectToRefer,  setRedirectToRefer} = useState(false)

    function handleInputChange(event) {
        this.setState({selectedOption: event.target.value});

    }
        return (
            <>

            </>
        );

}

export  default Correct
