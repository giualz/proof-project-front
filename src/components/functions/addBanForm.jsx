import React, { useState } from 'react'
import { Input, InputGroup, InputGroupText, Button, Container } from 'reactstrap'
import Styled from 'styled-components'
import {postAddBan} from '../../services/servicesRoutes'

function AddBanForm() {

    const [data, setData] = useState()

    const handleSubmit = async (data) => {

        await postAddBan(data)
        //try, catch, tostify

    }

    const HandleChange = (event) => {
        const number = event.target.value;
        setData(() => number)
    }

    return (

        <SContainer>
            <InputGroup>
                <InputGroupText>Insert IP Number:</InputGroupText>
                <SInput
                    type='text'
                    name='ipNumber'
                    value={data}
                    onChange={event => HandleChange(event)}
                    placeholder='IP Number' />
                <SButton
                    onClick={() => handleSubmit(data)}
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