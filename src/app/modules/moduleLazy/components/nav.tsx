import { Routes } from '../router'
import { Link } from 'react-router-dom'

const LazyNavigation = () => {

    return <div>
        <ul>{
            Routes.map(({name,path},i) => <Link 
                key={i}    
                to={path}
            >{name}</Link>)
        }</ul>
    </div>
}

export default LazyNavigation