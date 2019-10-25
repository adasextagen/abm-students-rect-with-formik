import React from 'react'

const StudentsList = (props) => {
	let { data } = props
	return (
		<table>
			<thead>
				<tr>
					<td>nombre</td>
					<td>apellido</td>
					<td>comisión</td>
				</tr>
			</thead>
			<tbody>
				{data &&
					data.map((student) => (
						<tr key={student.id}>
							<td>{student.firstName}</td>
							<td>{student.lastName}</td>
							<td>{student.comission}</td>
						</tr>
					))}
			</tbody>
		</table>
	)
}

export default StudentsList
