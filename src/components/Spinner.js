import React from 'react'

const Spinner = ({loading}) => {
    return loading ? (
        <div>
            <h5><i className="fa fa-spin fa-spinner"></i></h5>
        </div>
    ) : null
}

export default Spinner
