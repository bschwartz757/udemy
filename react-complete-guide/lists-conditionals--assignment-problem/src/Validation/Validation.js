import React from 'react'

const validation = (props) => {

	const message = (props.inputLength >= 5) ? 'Text long enough' : 'Text too short'

	return (
		<div>
			<p className="validation">{message}</p>
		</div>
	)
}

export default validation