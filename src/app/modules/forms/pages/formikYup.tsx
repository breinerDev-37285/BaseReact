import { useFormik } from 'formik'
import * as Yup from 'yup'

export const FormikYup = () => {

    const { 
        handleSubmit,errors,getFieldProps 
    } = useFormik({
        initialValues: {
            fistName: '',
            lastName: '',
            email: '',
        },
        onSubmit: val => {
            console.log(val)
        },
        validationSchema: Yup.object({
            fistName: Yup.string()
                        .max(15, 'at least 15 characters')
                        .required('required'),
            lastName: Yup.string()
                        .max(10, 'at least 10 characters')
                        .required('required'),
            email: Yup.string()
                    .email('format is invalid')
                    .required('required')
                    
        })
    })

    return <div>
        <h1>FormikYup</h1>

        <form noValidate onSubmit={ handleSubmit }>
            <>
                <input 
                    type="text" 
                    placeholder='firstname'
                    { ...getFieldProps('fistName') }
                />  
                { errors.fistName && <span>{ errors.fistName }</span>}
            </>

            <>
                <input 
                    type="text" 
                    placeholder='lastname'
                    { ...getFieldProps('lastName') }
                />  

                { errors.lastName && <span>{ errors.lastName }</span>}
            </>

            <>
                <input 
                    type="email" 
                    placeholder='example@email.com'
                    { ...getFieldProps('email') }
                />  
                { errors.email && <span>{errors.email}</span>}
            </>

            <button type="submit">Submit</button>
        </form>
    </div>
}


export default FormikYup
