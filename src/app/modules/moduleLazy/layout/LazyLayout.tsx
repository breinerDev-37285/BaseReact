import { Outlet } from 'react-router-dom'
import LazyNavigation from "../components/nav"

const LazyLayout = () => {
    return <>
        <LazyNavigation/>
        <Outlet/>
    </>
}

export default LazyLayout