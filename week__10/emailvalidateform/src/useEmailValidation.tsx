import React from 'react'

const useEmailValidation = () => {
    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState(false)

    function handleValidation(email: string) {
        const regex = /\S+@\S+\.\S+/
        if(email === '') {
            setError(false)
        } else if(regex.test(email)) {       
            setEmail(email)
            setError(false)
        } else {
            setError(true)
        }
    }
  return (
    [email, error, handleValidation]
  )
}

export default useEmailValidation