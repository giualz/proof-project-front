import { Link } from '@reach/router';
import Styled from 'styled-components';
import {
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';

const NavBar = () => (

    <SDiv>
        <SNav>
            <SNavItem>
                <SNavLink tag={Link} to='/'>Home</SNavLink>
            </SNavItem>
            <SNavItem>
                <SNavLink tag={Link} to='/torlist/full'>Full IP List</SNavLink>
            </SNavItem>
            <SNavItem>
                <SNavLink tag={Link} to='/torlist/addban'>Add New Ban</SNavLink>
            </SNavItem>
            <SNavItem>
                <SNavLink tag={Link} to='/torlist/bansout'>Valid IP List</SNavLink>
            </SNavItem>
        </SNav>
    </SDiv>
)

export default NavBar

const SDiv = Styled.div`
    background-color: white;
    display: flex;
`

const SNav = Styled(Nav)`
   display: flex;
   margin-top: 15px;
   color: #262626;
   height:500px;
   padding: 20px;
`

const SNavItem = Styled(NavItem)`
    text-decoration: none;
    list-style: none;
    width: 10vw;
    text-align: center;
`

const SNavLink = Styled(NavLink)`
    text-decoration: none;
    color: #262626;
    &:hover {
        color: red;
    }
`