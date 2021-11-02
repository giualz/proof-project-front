import React, { useState } from 'react'
import { Input, InputGroup, InputGroupText, Button, Container } from 'reactstrap'
import Styled from 'styled-components'

function AddBanForm({ handleSubmit }) {

    const [ipNumber, setIpNumber] = useState(
        {
            ipNumber: ''
        }
    )

    // const HandleChange = (index, event) => {

    //     const values = [...inputFields]
    //     values[index][event.target.name] = event.target.value;
    // }

    return (

        <SContainer>
            <InputGroup>
                <InputGroupText>Insert IP Number:</InputGroupText>
                <SInput
                    type='text'
                    name='ipNumber'
                    // value={user.userName}
                    // onChange={(e) => handleUser(e.target)}
                    placeholder='IP Number' />
                <SButton
                    onClick={() => handleSubmit(ipNumber)}
                >Add</SButton>
            </InputGroup>
        </SContainer>
    )
}

export default AddBanForm;

const SContainer = Styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 5vh;
    color: white;
`

const SInput = Styled(Input)`
    background-color: lightgrey;
    margin-left: 25px;
`

const SButton = Styled(Button)`
    margin-left: 25px
`