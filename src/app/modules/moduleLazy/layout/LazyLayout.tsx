import ChildrenNavigation from '@components/childrenNav'
import { Outlet } from 'react-router-dom'
import {Routes} from '@modules/moduleLazy/router'

const LazyLayout = () => {
    return <>
        <ChildrenNavigation Routes={ Routes }/>
        <Outlet/>
    </>
}

export default LazyLayout