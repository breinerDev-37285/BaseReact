import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import Navegation from '../components/nav/Navegation'
import { Routes as RoutesConfig } from './routes'

const MainRouter = () => {

    return <Router>
        <Navegation/>
        <Routes>
            {
                RoutesConfig.map(({path,Component},i) => <Route 
                    key={i}
                    path={path} 
                    element={ <Component/> } 
                />)
            }
            <Route
                path='/'
                element={ <Navigate to={RoutesConfig[0].path}/>}
            />
        </Routes>
    </Router>
}

export default MainRouter