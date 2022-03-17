import { useState, ChangeEvent } from "react"


const useForm = <T>(init: T) => {
    const [ value, setValue ] = useState(init)

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { value, name, checked, type, files } = e.target
        let val:any

        switch(type) {
            case 'checkbox':
                val = checked
                break
            case 'file':
                val = files
                break
            default:
                val = value
        }

        setValue(prev => ({
            ...prev,
            [name]: val
        }))
    }  

    const reset = () => setValue(init)

    return {
        value, 
        ...value,
        handleInputChange,
        reset
    }
}

export default useForm