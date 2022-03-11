import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import LazyLoading from '../components/lazyloading'
import Navegation from '../components/Navegation'
import { Routes as RoutesConfig } from './routes'

const MainRouter = () => {

    return <Suspense fallback={<LazyLoading/>}>
        <Router>
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
    </Suspense>
}

export default MainRouter