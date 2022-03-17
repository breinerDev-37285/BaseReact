export interface IPropsinputText {
    label: string
    name: string 
    type?: TtypeInput
    placeholder?: string
    [x: string]: any
}


export interface IPropsinputSelect{
    label: string
    name: string 
    placeholder?: string
    [x: string]: any
}


export interface IPropsinputCheckbox{
    label: string
    name: string 
    [x: string]: any
}





type TtypeInput = 'email' | 'text' | 'password'