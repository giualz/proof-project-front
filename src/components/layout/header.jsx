import styled from 'styled-components';
import NavBar from './navbar';
import proof from '../../images/proof.png'

const HeaderComponent = () => (
    <Header>
        <Img src={proof} alt="Logo" />
        <NavBar />
    </Header>
);

const Header = styled.header`
    background-color: white;
    height: 15vh;
    display: flex;
    justify-content: space-between;
`

const Img = styled.img`
    height: 10vh;
    margin-left: 15px;
    margin-top: 15px;
`

export default HeaderComponent;