import { getDefaultNormalizer } from "@testing-library/react"
import { useState } from "react"
import axios from 'axios'

const CreateEmail = () => {
    const [email, setEmail] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        axios.post('/emails/api/emails/', { email })
        // await fetch("/emails/api/emails/", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: (email)
        // })
    }
    return (
        <form onSubmit={onSubmit}>
            <label>
                Enter email to receive notifications
                <input type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder="Email Address"></input>
            </label>
            <button>Enter</button>
        </form>
    )
}

export default CreateEmail
