import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { IBasicFormik } from '@modules/forms/interfaces/basicFormik'

export const FormikComponents = () => {

    const initForm:IBasicFormik = {
        fistName: '',
        lastName: '',
        email: '',
        terms: false,
        jobType: ''
    }

    const yupValSchema = Yup.object({
        fistName: Yup.string()
                    .max(15, 'at least 15 characters')
                    .required('required'),
        lastName: Yup.string()
                    .max(10, 'at least 10 characters')
                    .required('required'),
        email: Yup.string()
                .email('format is invalid')
                .required('required'),
        terms: Yup.boolean()
                .oneOf([true], 'You must accept the conditions'),
        jobType: Yup.string() 
                    .notOneOf(['it-jr'], 'You should not select this job')      
                    .required('required')
    })

    return <div>
        <h1>Formik Components</h1>

        <Formik
            initialValues={initForm}
            onSubmit={ val => console.log(val)}
            validationSchema={ yupValSchema }
        >
            <Form>
                <Field type='text'name='fistName' />
                <ErrorMessage name='fistName' component='span'/>

                <Field type='text' name='lastName'/>
                <ErrorMessage name='lastName' component='span'/>

                <Field type='text' name='email'/>
                <ErrorMessage name='email' component='span'/>

            
                <label htmlFor='jobType'>Job Type</label>
                <Field 
                    id='jobType' 
                    name='jobType' 
                    as='select' 
                >
                    <option value="">Select One</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-sr">IT SR</option>
                    <option value="it-jr">IT JR</option>    
                </Field>
                <ErrorMessage name='jobType' component='span'/>
                    
                <br />
                <label>
                    <Field name='terms' type='checkbox' />
                    Terms and Conditions
                </label>
                <ErrorMessage name='terms' component='span'/>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
}


export default FormikComponents

