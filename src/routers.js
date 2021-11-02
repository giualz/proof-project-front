import {Router} from '@reach/router'
import Layout from './components/layout/layout';
import Home from './components/views/home';
import FullIpList from './components/views/fullIpList';
import AddBan from './components/views/addBan';
import ValidIpList from './components/views/validIpList';

function Routers() {
    return(
        <Layout>
            <Router>
                <Home path='/' />
                <FullIpList exact path='/torlist/full' />
                <AddBan exact path='/torlist/addban' />
                <ValidIpList exact path='/torlist/bansout' />
            </Router>
        </Layout>
    )
}

export default Routers;