import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navegation from '../components/nav/Navegation'
import About from '../pages/About'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Users from '../pages/Users'

const MainRouter = () => {
    return <Router>
        <Navegation/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='*' element={ <NotFound/>} />
        </Routes>
    </Router>
}

export default MainRouter