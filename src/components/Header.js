import React from 'react'

const Header = ({ title, newStudentModal }) => (
	<div>
		<h1>{title}</h1>
		<button type={'button'} onClick={(e) => newStudentModal(e)}>
			añadir +
		</button>
	</div>
)

export default Header
