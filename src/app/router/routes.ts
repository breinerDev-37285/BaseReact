import { Children, lazy } from 'react';
import {Home, About, Users, NotFound} from '../pages';
import { IRoute } from './../interfaces/routes';
import { Routes as LazyRoutes } from '../modules/moduleLazy/router';

const LazyLayout = lazy(() => import('../modules/moduleLazy/layout/LazyLayout'))

export const Routes:IRoute[] = [{
    name: 'home',
    path: '/home',
    component: Home
},{
    name: 'About',
    path: '/about',
    component: About
},{
    name: 'Users',
    path: '/users',
    component: Users
},{
    name: 'Lazy',
    path: '/laziesd',
    component: LazyLayout,
    children: LazyRoutes 
},{
    name: 'notFound',
    path: '*',
    component: NotFound
}]