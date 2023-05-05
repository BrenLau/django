import { getDefaultNormalizer } from "@testing-library/react"
import { useState } from "react"
import axios from 'axios'

const CreateEmail = () => {
    const [email, setEmail] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('/emails/api/emails/', { email }).then(async (e) => {
            console.log(e)

        }).then(async (e) => {
            await axios.put(`/emails/${e.data.id}/`, {
                email
            })
        })
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
