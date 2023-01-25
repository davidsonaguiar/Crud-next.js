import { Bundle } from "typescript"

interface ButtonProps {
    children: string,
    color: 'blue' | 'red' | 'green',
    handleClick?: () => void,
}

export default function Button(props: ButtonProps) {

    const color = {
        blue: 'bg-blue-700',
        red: 'bg-red-700',
        green: 'bg-green-700',
    }

    return(
        <div className={`flex justify-end`}>
            <button
                className={`
                px-4 py-2
                ${color[props.color]} rounded-md border border-gray-200 shadow-md
                text-slate-50 font-medium
                hover:brightness-110 active:brightness-125`}
                onClick={props.handleClick}>
                {props.children}
            </button>
        </div>
    )
}