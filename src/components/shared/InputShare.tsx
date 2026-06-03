interface inputProp{
    label: string,
    name?: string,
    placeholder?: string,
    disabled?: boolean
    type: string,
    required: boolean

}

const InputShare = ({label, name, placeholder, type, required, disabled}:inputProp) => {
  return (
    <div className="flex flex-col gap-1">
        <div>
            <label htmlFor="text">{label}</label>
           {required ? <span className="font-semibold text-md text-red-500 px-2">*</span> : ""} 
        </div>
        <div>
            <input name={name} type={type} placeholder={placeholder} disabled={disabled}
            className="border border-gray-400 p-2 w-full rounded-md focus:outline-gray-500"/>
        </div>
    </div>
  )
}

export default InputShare