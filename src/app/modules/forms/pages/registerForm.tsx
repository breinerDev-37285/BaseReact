import { FormEvent } from 'react'
import useForm from '@hooks/useForm'
import { IBaseForm } from '@modules/forms/interfaces/basic'

export const RegisterForm = () => {

    const { 
        value, 
        handleInputChange,
        reset,
        name, 
        email, 
        password, 
        password2 
    } = useForm<IBaseForm>({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(value)

        reset()
    }

    return <div >
        <h1>RegisterForm</h1>

        <form onSubmit={ handleSubmit }>

            <input 
                className='input'
                type="text" 
                placeholder='name'
                name='name'
                onChange={ handleInputChange }
                value={ name }
            />
            <>{
                name.trim().length <= 0 && <span>Este campo es necesario</span>
            }</>

            <input 
                type="email" 
                placeholder='email'
                name='email'
                onChange={ handleInputChange }
                value={ email }
            />

            <input 
                type="password" 
                placeholder='password'
                name='password'
                onChange={ handleInputChange }
                value={ password }
            />

            <input 
                type="password" 
                placeholder='repeat password'
                name='password2'
                onChange={ handleInputChange }
                value={ password2 }
            />

            <button 
                type="submit"
                >CREATE
            </button>

        </form>
    </div>
  
}


export default RegisterForm
