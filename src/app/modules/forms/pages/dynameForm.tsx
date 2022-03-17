import React from 'react'
import dataJson from '@modules/forms/data/custom-form.json'
import { Formik,Form } from 'formik'
import { InputSelect, InputText } from '@modules/forms/components'
import { IDynamicForm } from '@modules/forms/interfaces/dinamic'
import * as Yup from 'yup'


export const DynamicForm = () => {
    
    const init:IDynamicForm = {}
    const validations:IDynamicForm = []
    
    for (const input of dataJson) {
        init[input.name] = input.value
        
        
        if( !input.validations ) continue
        
        let schema = Yup.string()

        if( input.validations.required ) {
            schema = schema.required('required')
        } 

        if( input.validations.maxLength ) {
            schema = schema.max(Number(input.validations.maxLength))
        }

        if( input.validations.minLenght ) {
            schema = schema.min(Number(input.validations.minLenght))
        }

        if( input.type === 'email' ) {
            schema = schema.email()
        }

        validations[input.name] = schema
    }
    
    const yupValSchema = Yup.object({...validations})


    return <div>
        <h1>Dynamic Form</h1>
        <Formik
            initialValues={ init }
            onSubmit= {val => console.log(val)}
            validationSchema={ yupValSchema }
        >{ 
            (formik) => (
                <Form>
                    {dataJson.map(({label,name, type, placeholder,options}, i) => {

                        switch( type ){
                            case 'select':
                                return <InputSelect key={i} label={label} name={name}>
                                    <option value="">Select an option</option>
                                    <>{
                                        options?.map(({id, name}) => <option key={id} value={id}>
                                            {name}
                                        </option>)
                                    }</>    
                                </InputSelect>
                            default:
                                return <InputText 
                                    key={i} 
                                    label={label} 
                                    name={name} 
                                    type={(type as any)} 
                                    placeholder={ placeholder }
                                />
                        }
                    })}
                    <button type="submit">Enviar</button>
                    <button type="reset" onClick={ formik.handleReset }>Reset</button>
                </Form>
            )
        }</Formik>
    </div>
  
}

export default DynamicForm
