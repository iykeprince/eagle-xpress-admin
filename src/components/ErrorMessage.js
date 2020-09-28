import React from 'react'

const ErrorMessage = ({errorMessage}) => {
    return (
        errorMessage && (<div className="alert alert-danger">{errorMessage}</div>)
    )
}

export default ErrorMessage
