import { useState } from "react"
import axios from 'axios'
import './createemail.css'

const CreateEmail = () => {
    const [email, setEmail] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('/emails/api/emails/', { email }).then(async (e) => {

        })
    }
    return (
        <form id="createemailform" onSubmit={onSubmit}>
            <label id="createemaillabel">
                Enter email to receive notifications
                <input className="emailinput" type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder="Email Address"></input>
            </label>
            <button id="createemailbutton">Enter</button>
        </form>
    )
}

export default CreateEmail
