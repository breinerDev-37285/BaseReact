import React from 'react'
import { useFormik,FormikErrors } from 'formik'
import { IBasicFormik } from '../interfaces/basicFormik'

export const BasicFormik = () => {


    const validate = ({fistName, lastName, email}:IBasicFormik) => {

        const errors: FormikErrors<IBasicFormik> = {}

        if (!fistName) {
            errors.fistName = 'Required'
        } else if (fistName.trim().length >= 15) {
            errors.fistName = 'At least 15 characters'
        }
        
        
        if (!lastName) {
            errors.lastName = 'Required'
        } else if (lastName.trim().length >= 10) {
            errors.lastName = 'At least 10 characters'
        } 


        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors
    }

    const { handleChange,values,handleSubmit,errors, handleBlur } = useFormik({
        initialValues: {
            fistName: '',
            lastName: '',
            email: '',
        },
        onSubmit: val => {
            console.log(val)
        },
        validate
    })

    return <div>
        <h1>BasicFormik</h1>

        <form noValidate onSubmit={ handleSubmit }>
            <div>
                <input 
                    type="text" 
                    placeholder='firstname'
                    name='fistName'
                    onChange={ handleChange }
                    value={ values.fistName }
                    onBlur={ handleBlur }
                />  
                { errors.fistName && <span>{ errors.fistName }</span>}
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder='lastname'
                    name='lastName'
                    onChange={ handleChange }
                    value={ values.lastName }
                    onBlur={ handleBlur }
                />  

                { errors.lastName && <span>{ errors.lastName }</span>}
            </div>

            <div>
                <input 
                    type="email" 
                    placeholder='example@email.com'
                    name='email'
                    onChange={ handleChange }
                    value={ values.email }
                    onBlur={ handleBlur }
                />  
                { errors.email && <span>{errors.email}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
}


export default BasicFormik
