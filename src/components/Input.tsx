interface InputProps {
    label: string,
    name: string,
    type: 'text' | 'number',
    value: string | number,
    handleValue: (value: string, name: string) => void
}

export default function Input(props: InputProps) {
    return(
        <label 
            htmlFor={props.name}
            className={`
            mb-2 last-of-type:mb-4
            text-slate-50 text-lg font-normal
            flex flex-col`}>
                
            {props.label}

            <input
                className={`
                w-full mt-1 p-2
                bg-purple-50 rounded-sm outline-none
                text-gray-600 font-normal
                autofill:bg-none`}

                id={props.name}
                type={props.type}
                value={props.value}
                onChange={(e) => props.handleValue(e.target.value, props.name)} 
                required
                autoComplete="off"/>
        </label>
    )
}