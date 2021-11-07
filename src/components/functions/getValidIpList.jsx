import React from 'react';
import Styled from 'styled-components';
import { Table } from 'reactstrap';
import { getBansOutList } from '../../services/servicesRoutes';

//shows all valid IP numbers by using services and the database
//they are shown without repetition
const GetValidIpList = () => {

    const [validIpList, setValidIpList] = React.useState([]);

    React.useEffect(() => {
        getBansOutList().then(result => {
            setValidIpList(result.data)
        })
    }, []);

    return (
        <Div>
                {validIpList.map((ipNumber, i) => (
                    <Ul key={i}>
                        <Li>{ipNumber}</Li>
                    </Ul>
                ))}
                </Div>
    )
};

export default GetValidIpList;

const Div = Styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) ) ;
`

const Ul = Styled.ul`
column-fill: balance;
list-style-type:none;
text-align: center;
`

const Li = Styled.li`
color: #dfdfdf;
border-top: 1px solid grey;
border-right: 1px solid grey; 
border-left: 1px solid grey;
border-bottom: 1px solid grey;
padding:10px;
`