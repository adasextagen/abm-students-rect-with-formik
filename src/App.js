import React, { Fragment } from 'react'
import StudentForm from './components/StudentForm'
import StudentsList from './components/StudentsList'
import idGen from './helpers/idGen'

const Header = (props) => <h1>{props.title}</h1>

//TODO:
//  - validar el formulario
//  - persistir los datos
//  - crear desde modal
//  - editar estudiante
//  - eliminnar

class App extends React.Component {
	state = {
		studentModel: {
			firstName: '',
			lastName: '',
			age: '',
			comission: '',
			email: '',
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
