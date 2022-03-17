import ChildrenNavigation from "@components/childrenNav"
import { Routes } from '@modules/forms/router'
import { Outlet } from 'react-router-dom'

const Forms = () => {
    return <>
        <ChildrenNavigation Routes={ Routes }/>
        <Outlet/>
    </>
}


export default Forms