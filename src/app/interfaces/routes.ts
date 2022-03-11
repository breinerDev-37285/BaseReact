import { LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

export interface IRoute {
    name:string
    path:string
    component: LazyExoticComponent<JSXComponent> | JSXComponent
    children?: IRoute[]
}