import React from 'react'

const StudentsList = ({ data, editStudent }) => {
	return (
		<table>
			<thead>
				<tr>
					<td>nombre</td>
					<td>apellido</td>
					<td>comisión</td>
					<td>Acciones</td>
				</tr>
			</thead>
			<tbody>
				{data &&
					data.map((student) => (
						<tr key={student.id}>
							<td>{student.firstName}</td>
							<td>{student.lastName}</td>
							<td>{student.comission}</td>
							<td>
								<button type={'button'} onClick={() => editStudent(student.id)}>
									editar
								</button>
							</td>
						</tr>
					))}
			</tbody>
		</table>
	)
}

export default StudentsList
