import { Bundle } from "typescript"

interface ButtonProps {
    children: string,
    color: 'blue' | 'red' | 'green',
    handleClick?: () => void,
}

export default function Button(props: ButtonProps) {

    return(
        <div className={`flex justify-end`}>
            <button
                className={`
                px-4 py-2
                bg-blue-500 rounded-md shadow-md
                text-slate-50 font-medium
                active:bg-blue-400 hover:bg-blue-600`}
                onClick={props.handleClick}>
                {props.children}
            </button>
        </div>
    )
}