import { FormEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Client from "@/core/client";
import { nanoid } from "nanoid"

interface FormProps {
    client? : Client
    cancelForm : () => void
    submitForm: (client: Client) => void
} 

export default function Form(props: FormProps) {

    const [ inputs, setInputs ] = useState({
        name: props.client? props.client.name: '',
        age: props.client? props.client.age: 0,
    })  

    function handleInput(value: string, name: string) {
        setInputs({
            ...inputs,
            [name]: name === 'age'? +value: value
        })
    }

    function handleSubmit(e: FormEvent) {

        e.preventDefault()


        props.submitForm(new Client(
            inputs.name,
            inputs.age,
            props.client?.id
        ))

        props.cancelForm()
    }

    return(
        <div 
            className={`
            fixed top-0 left-0
            w-full h-full
            bg-purple-100 bg-opacity-50 backdrop-blur-sm
            flex justify-center items-center`}>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className={`
                w-full max-w-2xl mx-auto my-4 p-8
                bg-gradient-to-r from-purple-600 to-purple-800
                border rounded-md overflow-hidden shadow-xl`}>

                <h2 className="mb-4 text-2xl font-bold text-slate-50">
                    {props.client? `Edit Client - ${props.client.id}`: "New Client"}
                </h2>

                <Input 
                    name="name"
                    label="Name:"
                    type="text"
                    value={inputs.name}
                    handleValue={handleInput}/>

                <Input 
                    name="age"
                    label="Age:"
                    type="number"
                    min={14}
                    max={130}
                    value={inputs.age}
                    handleValue={handleInput}/>
                    
                <div
                    className={`
                    flex justify-start gap-3
                    `}>
                    <Button color="blue">Salve</Button>
                    <Button 
                        color="red"
                        handleClick={() => props.cancelForm()}>Cancel</Button>
                </div>
            </form>
        </div>
    )
}