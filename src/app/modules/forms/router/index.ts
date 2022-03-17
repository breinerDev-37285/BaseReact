import { BasicFormik } from './../pages/basicFormik';
import { RegisterForm } from './../pages/registerForm';
import { IRoute } from '@interfaces/routes';


export const Routes:IRoute[] = [{
    name: 'Basic form',
    path: 'basic',
    component: RegisterForm
},{
    name: 'Basic Formik',
    path: 'formik',
    component: BasicFormik
}]