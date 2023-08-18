import React, { useState } from "react";

const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Signup({ setToken }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault()

        if (username.length === 0) {
            setToken("")
            setError("Username cannot be empty!")
            setUsername("")
            setPassword("")
            return
        }

        try {
            const response = await fetch(`${BASE_URL}/users/register`, {
                method: "POST",
                body: JSON.stringify({
                    username, 
                    password 
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            console.log(result)
            setToken(result.token)

        } catch (error) {
            setError(error.message)
        }
    }
    
    return (
        <div>
        <h2>Sign Up</h2>
        { error && <p>{error}</p> }
        <form onSubmit={handleSubmit}>
            <label><b>Username: </b>{""} 
            <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label><br />
            
            <label> <b>Password: </b>{""} 
            <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label><br />< br/>

            <button>Submit</button>
        </form>
        </div>
    )
}