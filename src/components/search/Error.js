import React from 'react';


export default function Error(props) {
    const {error} = props
    return (
        error?
        <div className={`error ${error.type}`}>
            {error.message}
        </div>
        :null
    );
}
