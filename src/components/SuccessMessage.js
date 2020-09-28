import React from 'react'

const SuccessMessage = ({successMessage}) => {
    return (
        successMessage && (<div className="alert alert-success">{successMessage}</div>)
    )
}

export default SuccessMessage
