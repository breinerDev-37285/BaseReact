import { IRoute } from '@interfaces/routes'
import { Link } from 'react-router-dom'

const ChildrenNavigation = ({Routes}:{Routes:IRoute[]}) => {

    return <div>
        <ul>{
            Routes.map(({name,path},i) => <Link 
                key={i}    
                to={path}
                style={{
                    marginRight: '1em',
                    textDecoration: 'none',
                    color: 'red'
                }}
            >{name}</Link>)
        }</ul>
    </div>
}

export default ChildrenNavigation