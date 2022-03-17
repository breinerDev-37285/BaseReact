import { useField } from "formik"
import { IPropsinputText } from "@modules/forms/interfaces/inputs"

export const InputText = ({label,...props}:IPropsinputText) => {

    const [ field, meta ] = useField(props)

    return <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input type="text" {...field}{...props}/>
        {
            meta.touched && meta.error && (
                <span>{meta.error}</span>
            )
        }
    </>
}

export default InputText
