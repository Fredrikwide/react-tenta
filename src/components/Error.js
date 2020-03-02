import React from 'react'

const Error = (props) => {
    return (
        <div style={{backgroundColor: 'warning'}}>
            <h1 style={{}}>{props.msg}</h1>
        </div>
    )
}

export default Error