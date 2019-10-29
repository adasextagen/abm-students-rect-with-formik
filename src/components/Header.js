import React from 'react'

const Header = ({ title, addStudent }) => (
	<div>
		<h1>{title}</h1>
		<button type={'button'} onClick={(e) => addStudent(e)}>
			+
		</button>
	</div>
)

export default Header
