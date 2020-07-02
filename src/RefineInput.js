import React from 'react'

const RefineInput = ({ refineInput }) => {
    return (
        <input id="refine" type="text" name="refine" placeholder="Type here to refine results..." onChange={refineInput} />
    )
}

export default RefineInput;

