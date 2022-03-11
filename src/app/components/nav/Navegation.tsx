import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Routes as RoutesConfig } from '../nav/../../router/routes'

const Navegation = () => {
    return <nav>
        <img src={ logo } alt="React Logo" />
        <ul>{
            RoutesConfig.map(({name, path}) => {
                if(name === 'notFound') return 
                return <li>
                    <NavLink 
                        to={path} 
                        className={({isActive}) => `${isActive && 'nav-active'}`}
                        >{name}
                    </NavLink>
                </li>
            })
        }</ul>
    </nav>
}

export default Navegation