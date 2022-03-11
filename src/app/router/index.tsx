import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navegation from '../components/nav/Navegation'
import About from '../pages/About'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Users from '../pages/Users'
import { Routes as RoutesConfig } from './routes'

const MainRouter = () => {

    return <Router>
        <Navegation/>
        <Routes>{
            RoutesConfig.map(({path,Component}) => <Route path={path} element={ <Component/> } />)
        }</Routes>
    </Router>
}

export default MainRouter