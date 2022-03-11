export interface IRoute {
    name:string
    path:string
    Component:()=> JSX.Element
    children?: IRoute[]
}