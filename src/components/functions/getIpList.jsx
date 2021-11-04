import React from 'react';
import Styled from 'styled-components';
import {
    Table,
    Button
} from 'reactstrap';

const GetIpList = () => {

    return (
        <STable>
            <thead>
                <tr>
                    <th>All IPs</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>IP NUMBER</td>
                </tr>
                {/* {stockOrders?.map(({ ipNumber }, i) => (
                    <tr key={i}>
                        <td>{ipNumber}</td>
                    </tr>
                )
                )} */}
            </tbody>
        </STable>
    )
}

export default GetIpList;

const STable = Styled(Table)`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`