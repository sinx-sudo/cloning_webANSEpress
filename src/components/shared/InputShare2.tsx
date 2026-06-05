import React from 'react'

interface inputProp 
 extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name?: string,
    placeholder?: string,
    disabled?: boolean,
    type: string,

    defaultValue?: string,
    required?: boolean,
    error?: string,
}

const InputShare2 = ({
    label, name, placeholder, disabled,
    type, defaultValue, required, error, ...rest}: inputProp) => {
    return (
        <>
            <div className="flex flex-col gap-1">
                <div>
                    <label htmlFor={name}>{label}</label>
                    {required && (<span className='font-semibold text-md px-2 text-red-500'>*</span>) }
                </div>
                <div>
                    <input name={name} id={name} type={type} defaultValue={defaultValue}
                    placeholder={placeholder} disabled={disabled} {...rest}
                    className='border border-gray-400 p-2 w-full rounded-md focus:outline-none'/>
                    {error && (<span className='font-semibold text-red-500 text-[12px]'>{error}</span>)}
                </div>
            </div>
        </>
    )
}

export default InputShare2