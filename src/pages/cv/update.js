import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import AppLayout from "@/components/Layouts/AppLayout";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";


export default function manage() {
    const { user } = useAuth({ middleware: 'guest' })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({ name, email, password, password_confirmation, setErrors })
    }
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>User CV</title>
            </Head>


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                             role="alert">
                            <strong className="font-bold">Pls try again!</strong>
                            <span className="block sm:inline">Something  bad happened.</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"><title>Close</title><path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                        </div>
                        <form className='lg:px-3' >
                            {/* Name */}
                            <div>
                                <Label htmlFor="name">Full Name</Label>

                                <Input
                                    id="name"
                                    type="text"
                                    value={name}
                                    className="block mt-1 w-full"
                                    onChange={event => setName(event.target.value)}
                                    required
                                    autoFocus
                                />
                            </div>

                            {/* Email Address */}
                            <div className="mt-4">
                                <Label htmlFor="email">Email</Label>

                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="block mt-1 w-full"
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="mt-4">
                                <Label htmlFor="password">Phone</Label>

                                <Input
                                    id="password"
                                    type="text"
                                    value={password}
                                    className="block mt-1 w-full"
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                    autoComplete="new-password"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mt-4">
                                <Label htmlFor="password_confirmation">
                                   Address
                                </Label>

                                <Input
                                    id="password_confirmation"
                                    type="text"
                                    value={password_confirmation}
                                    className="block mt-1 w-full"
                                    onChange={event =>
                                        setPasswordConfirmation(event.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-end mt-4">

                                <Input
                                    id="password_confirmation"
                                    type="text"
                                    value={password_confirmation}
                                    className="block mt-1 w-full"
                                    onChange={event =>
                                        setPasswordConfirmation(event.target.value)
                                    }
                                    required
                                />
                                <Button className="ml-4">Add Skill</Button>



                            </div>
                            <div className="flex items-center justify-start mt-4">
                                <p>
                                    <label>html </label>
                                    <label>Css </label>
                                    <label>js </label>
                                </p>
                            </div>
                            <div className="flex items-center justify-end mt-4">

                                <Input
                                    id="password_confirmation"
                                    type="text"
                                    placeholder="years"
                                    className="block mt-1 w-full"

                                />
                                <Input
                                    id="password_confirmation"
                                    type="text"
                                    placeholder="Position"
                                    className="block mt-1 w-full"

                                />
                                <Input
                                    id="password_confirmation"
                                    type="text"
                                    placeholder="Organization"
                                    className="block mt-1 w-full"

                                />

                                <Button className="ml-4">Add Experince</Button>
                                    <br/>


                            </div>
                            <div className="flex items-center justify-start mt-4">
                                <p>2 years | ABC Pvt Ltd | Web Developer</p>
                            </div>

                            <div className="flex items-center justify-end mt-4">


                                <Button className="ml-4">Update</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
