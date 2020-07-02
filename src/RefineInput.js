import React, { Component } from 'react'

const RefineInput = ({ refineInput }) => {

    return (
        <input type="text" name="refine" placeholder='Refine Results' onChange={refineInput} />
    )
}

export default RefineInput;

