import React, { useState } from "react";

const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Authenticate({ token, setToken }) {
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [dataUser, setDataUser] = useState(null)

    async function handleClick() {
        try {
            const response = await fetch(`${BASE_URL}/users`, {
                method: "POSt",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })

            const result = await response.json()
            console.log(result)
            setSuccessMessage(result.message)
            console.log(result.data)
            setDataUser(result.data.username)
            setToken(result.token)

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
        <h2>Token</h2>
        { dataUser && <p><b>Welcome </b>{dataUser}!</p> }
        { successMessage && <p>{successMessage}</p> }
        { error && <p>{error}</p> }

        <button onClick={handleClick}>Token</button>
        </>
    )
}


// const PostsURL = await fetch (`${BASE_URL}/posts`)

// export async function getToken(token) {
//     try {
//       const response = await fetch(`${BASE_URL}/posts`, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({ 
//           username
//          })
//       });
//         const result = await response.json();
//         console.log(result);
//         return result
//     } catch (error) {
//       console.error(error);
//     }
// }