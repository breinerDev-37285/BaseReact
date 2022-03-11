import { LazyThree } from '../pages/lazy3';
import { LazyTwo } from '../pages/lazy2';
import { IRoute } from '../../../interfaces/routes';
import { LazyOne } from '../pages';

export const Routes:IRoute[] = [{
    name: 'lazy1',
    path: 'lazy1',
    component: LazyOne
},{
    name: 'lazy2',
    path: 'lazy2',
    component: LazyTwo
},{
    name: 'lazy3',
    path: 'lazy3',
    component: LazyThree
}]