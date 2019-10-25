import React from 'react'

const StudentsList = (props) => {
	let { data } = props
	return data && data.map((e, i) => <p key={i}>{`${e.firstName} ${e.lastName}`}</p>)
}

export default StudentsList
