import React from 'react';
import Styled from 'styled-components';
import {
    Table,
    Button
} from 'reactstrap';

const GetValidIpList = () => {

    return (
        <STable>
            <thead>
                <tr>
                    <th>Valid IPs</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>IP NUMBER</td>
                </tr>
                {/* se stockOrders estiver definida, faz map; caso contrário, nao faz nada
                {stockOrders?.map(({ stock, orderQuantity, stockPrice, id }, i) => (
                    <tr key={i}>
                        <td>{stock}</td>
                        <td>{orderQuantity}</td>
                        <td>{stockPrice}</td>
                        <td>total</td>

                    </tr>
                )
                )} */}
            </tbody>
        </STable>
    )
}

export default GetValidIpList;

const STable = Styled(Table)`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`