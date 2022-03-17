import { useField,ErrorMessage } from "formik"
import { IPropsinputSelect } from "@modules/forms/interfaces/inputs"

export const InputSelect = ({label,...props}:IPropsinputSelect) => {

    const [ field ] = useField(props)

    return <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field}{...props}/>
        <ErrorMessage name={ props.name } component='span'/>
    </>
}

export default InputSelect
