import { useField,ErrorMessage } from "formik"
import { IPropsinputCheckbox } from "@modules/forms/interfaces/inputs"

export const InputCheckbox = ({label,...props}:IPropsinputCheckbox) => {

    const [ field, meta ] = useField({...props, type: 'checkbox'})

    return <>
        <label htmlFor={props.id || props.name}>
            <input type="checkbox" {...field} {...props}/>
            {label}    
        </label>
        <ErrorMessage name={ props.name } component='span'/>
    </>
}

export default InputCheckbox
