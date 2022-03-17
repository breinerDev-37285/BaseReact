import { FormikAbstract,
    FormikComponents,
    FormikYup,
    BasicFormik,
    RegisterForm,
    DynamicForm 
} from '@modules/forms/pages';
import { IRoute } from '@interfaces/routes';


export const Routes:IRoute[] = [{
    name: 'Basic form',
    path: 'basic',
    component: RegisterForm
},{
    name: 'Basic Formik',
    path: 'formik',
    component: BasicFormik
},{
    name: 'Formik Yup',
    path: 'formikyup',
    component: FormikYup
},{
    name: 'Formik Components',
    path: 'formikcomponents',
    component: FormikComponents
},{
    name: 'Formik Abstract',
    path: 'formikabstract',
    component: FormikAbstract
},{ 
    name: 'Dinamic Form',
    path: 'dinamic',
    component: DynamicForm
}]