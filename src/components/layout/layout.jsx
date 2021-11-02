import HeaderComponent from './header';
import FooterComponent from './footer';
import Styled from 'styled-components';

const Layout = ({ children }) => (

    <SContainer>
        <HeaderComponent />
        <Main>
            <Div>
                {children}
            </Div>
        </Main>
        <FooterComponent />
    </SContainer>
)

export default Layout;

const SContainer = Styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Div = Styled.div`
    width: 100%;
    padding: 2%;
    background-color: #262626;
    color: white;
`

const Main = Styled.main`
    display: flex;
    flex: 1;
`