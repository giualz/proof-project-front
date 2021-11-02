import Styled from "styled-components";
import { List } from "reactstrap";

const Homepage = () => (
    <Div>
        <h1>What we can do for you</h1>
        <SList type="unstyled">
            <li>
                Go to <b>Full IP List</b> if you wish to get our complete list of monitored IP numbers
            </li>

            <li>
                Go to <b>Add New Ban</b> if you wish to restrict an IP number
            </li>

            <li>
                Go to <b>Valid IP List</b> if you wish to see our list of IPs excluding the banned ones
            </li>
        </SList>
    </Div>
);

export default Homepage

const Div = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
`

const SList = Styled(List)`
    margin-top: 15px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`