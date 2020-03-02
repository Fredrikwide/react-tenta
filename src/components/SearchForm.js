import React from 'react'

const SearchForm = (props)  => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="input-group">
                <input type="text" className="form-control form-control-lg" id="city" onChange={props.handleChange} />

                <div className="input-group-append">
                    <button className="btn btn-success btn-lg" onClick={props.onSubmit}>Search</button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm
