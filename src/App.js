import React, { Fragment } from 'react'
import StudentForm from './components/StudentForm'
import StudentsList from './components/StudentsList'
import idGen from './helpers/idGen'

const Header = (props) => <h1>{props.title}</h1>

//TODO:
//  - validar el formulario 1
//  - acciones sobre el studiantes (editar, ver, eliminar)
//  - persistir los datos   0
//  - crear desde modal     0
//  - editar estudiante     0
//  - eliminnar (fun())     0

class App extends React.Component {
	state = {
		studentModel: {
			firstName: '', // requerido - min 3
			lastName: '', // requerido - min 8 - max 20
			age: '', // requerido - min 2 - > 18 & < 72
			comission: '', // opcional
			email: '', // email valido
			id: ''
		},
		studentsList: []
	}

	addStudent = (values) => {
		let newStudentsList = [ ...this.state.studentsList, { ...values, id: idGen('stu') } ]
		this.setState({ studentsList: newStudentsList })
	}

	render() {
		return (
			<Fragment>
				<Header title={'none'} />
				<StudentForm data={this.state.studentModel} submit={this.addStudent} />
				<StudentsList data={this.state.studentsList} />
			</Fragment>
		)
	}
}

export default App
