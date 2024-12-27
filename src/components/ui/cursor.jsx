import React from 'react'
import { cursor } from '../../utils'

const Cursor = ({ position }) => {
    return (
        <div
            className="absolute pointer-events-none"
            style={{
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <img src={cursor} alt="custom cursor" className="w-16 h-16" />
        </div>
    )
}

export default Cursor