import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
	return (
		<div className="userOutput">
			<h3>Hello {props.name}, here's your stuff:</h3>
			<p>Spicy jalapeno bacon ipsum dolor amet buffalo elit aute nisi pork belly. Irure laboris eu aliqua. Minim exercitation ipsum biltong, cillum do landjaeger. Ea fatback t-bone qui, cupim shankle swine filet mignon short loin cupidatat consequat quis. Biltong anim et, pork belly andouille t-bone reprehenderit beef chuck qui rump shoulder. Ground round beef ut capicola shank exercitation, pork nostrud ribeye ex pork loin andouille.</p>
			<p>Consequat hamburger shank brisket. Do pig occaecat adipisicing. Incididunt flank commodo tongue anim quis pancetta landjaeger dolor turkey sirloin fugiat. Ipsum cupidatat biltong bresaola, tail turkey labore magna nulla mollit sed elit sirloin.</p>
		</div>
	)
}

export default UserOutput