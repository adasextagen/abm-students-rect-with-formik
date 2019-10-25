import React, { Fragment } from 'react'
import StudentForm from './components/StudentForm'
import StudentsList from './components/StudentsList'

const Header = (props) => <h1>{props.title}</h1>

class App extends React.Component {
	state = {
		studentModel: {
			firstName: '',
			lastName: '',
			age: '',
			comission: '',
			email: '',
			asignatures: []
		},
		studentsList: []
	}

	addStudent = (values) => {
		let newStudentsList = [ ...this.state.studentsList, values ]
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
