import { LazyOne,LazyTwo,LazyThree } from '../modules/moduleLazy/pages'
import NotFound from '../pages/NotFound';
import { IRoute } from './../interfaces/routes';



export const Routes:IRoute[] = [{
    name: 'lazyPage1',
    path: '/lazy',
    Component: LazyOne
},{
    name: 'lazyPage2',
    path: '/lazy2',
    Component: LazyTwo
},{
    name: 'lazyPage3',
    path: '/lazy3',
    Component: LazyThree
},{
    name: 'notFound',
    path: '*',
    Component: NotFound
}]