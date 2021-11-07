import React from 'react';
import Styled from 'styled-components';
import { Table } from 'reactstrap';
import { getFullIpList } from '../../services/servicesRoutes';

//shows all IP numbers by using services
//they are shown without repetition
const GetIpList = () => {

    const [ipList, setIpList] = React.useState([]);

    React.useEffect(() => {
        getFullIpList().then(result => {
            setIpList(result.data)
        })
    }, []);

    return (
        <Div>
                {ipList.map((ipNumber, i) => (
                    <Ul key={i}>
                        <Li>{ipNumber}</Li>
                    </Ul>
                ))}
        </Div>
    )
};

export default GetIpList;

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