import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import LazyLoading from '@components/lazyloading'
import Navegation from '@components/Navegation'
import { Routes as RoutesConfig } from './routes'

const MainRouter = () => {

    return <Suspense fallback={<LazyLoading/>}>
        <Router>
            <Navegation />
            <Routes>
                {
                    RoutesConfig.map(({path,component:Component,children},i) => <Route 
                        key={i}
                        path={path} 
                        element={ <Component/> } 
                    >{
                        children && <>
                            {
                                children.map(({path:childrenPath,component:ChildrenComponent},j) => <Route
                                    key={j}
                                    path={childrenPath}
                                    element={<ChildrenComponent/>}
                                />)
                            }
                            <Route
                                path={path}
                                element={ <Navigate to={children[0].path}/>}
                            />
                        </>

                    }</Route>)
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