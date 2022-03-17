import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import { IBasicFormik } from '@modules/forms/interfaces/basicFormik'
import { InputSelect, InputCheckbox, InputText} from '@modules/forms/components'

export const FormikAbstract = () => {

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
        <h1>FormikAbstract</h1>

        <Formik
            initialValues={initForm}
            onSubmit={ val => console.log(val)}
            validationSchema={ yupValSchema }
        >
            {  formik => (
                <Form>
                    <InputText 
                        label='First Name' 
                        name='fistName'
                        placeholder='First Name'
                    />

                    <InputText 
                        label='Last Name' 
                        name='lastName'
                        placeholder='Last Name'
                    />

                    <InputText 
                        label='Email' 
                        name='email'
                        placeholder='example@mail.com'
                        type='email'
                    />
                    
                    <InputSelect 
                        id='jobType'
                        name='jobType'
                        as='select' 
                        label='Job Type'
                    >
                        <option value="">Select One</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-sr">IT SR</option>
                        <option value="it-jr">IT JR</option>    
                    </InputSelect>
                        
                    <br />
                    
                    <InputCheckbox label='Terms & Conditions' name='terms' />

                    <button type="submit">Submit</button>
                    <button type="button" onClick={formik.handleReset} >Reset</button>
                </Form>
            )}
        </Formik>
    </div>
}


export default FormikAbstract

