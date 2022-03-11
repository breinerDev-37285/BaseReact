import { lazy } from 'react';
// import { LazyOne,LazyTwo,LazyThree } from '../modules/moduleLazy/pages'
import NotFound from '../pages/NotFound';
import { IRoute } from './../interfaces/routes';

const LazyPageOne = lazy(() => import(/*  */'../modules/moduleLazy/pages/lazy1'))
const LazyPageTwo = lazy(() => import(/*  */'../modules/moduleLazy/pages/lazy2'))
const LazyPageThree = lazy(() => import(/*  */'../modules/moduleLazy/pages/lazy3'))


export const Routes:IRoute[] = [{
    name: 'lazyPage1',
    path: '/lazy1',
    Component: LazyPageOne
},{
    name: 'lazyPage2',
    path: '/lazy2',
    Component: LazyPageTwo
},{
    name: 'lazyPage3',
    path: '/lazy3',
    Component: LazyPageThree
},{
    name: 'notFound',
    path: '*',
    Component: NotFound
}]