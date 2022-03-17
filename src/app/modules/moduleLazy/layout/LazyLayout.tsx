import ChildrenNavigation from '@components/childrenNav'
import { Outlet } from 'react-router-dom'
import {Routes} from '@modules/moduleLazy/router'

const LazyLayout = () => {
    return  <div className="children-layout">
        <ChildrenNavigation Routes={ Routes }/>
        <Outlet/>
    </div>
}

export default LazyLayout