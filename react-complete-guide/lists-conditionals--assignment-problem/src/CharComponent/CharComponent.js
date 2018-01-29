import React from 'react'
import './charComponent.css'

const charComponent = (props) => {
	return (
		<span className="charComponent" onClick={props.click}>
			{props.value}
		</span>
	)
}

export default charComponent