import React from 'react'
import './char.css'

const charComponent = (props) => {
	return (
		<span className="charComponent" onClick={props.click}>
			{props.value}
		</span>
	)
}

export default charComponent