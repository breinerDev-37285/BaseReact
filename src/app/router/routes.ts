import { Children, lazy } from 'react';
import {Home, About, Users, NotFound} from '@pages/index';
import { IRoute } from '@interfaces/routes';
import { Routes as LazyRoutes } from '@modules/moduleLazy/router';
import Forms from '@modules/forms/layout/form'
import { Routes as FormRoutes } from '@modules/forms/router/index'

const LazyLayout = lazy(() => import('@modules/moduleLazy/layout/LazyLayout'))

export const Routes:IRoute[] = [{
    name: 'Home',
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
    name: 'Forms',
    path: '/forms',
    component: Forms,
    children: FormRoutes
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