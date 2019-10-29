import React from 'react'

const Modal = ({ isOpen, toggle, title, children }) => {
	return (
		<div className={`modal ${isOpen ? 'open' : ''}`}>
			<div className={'modal-content'}>
				<p>{title}</p>
				<button type="button" onClick={(e) => toggle(e)}>
					cerrar
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
