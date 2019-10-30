import React, { Fragment } from 'react'

import idGen from './helpers/idGen'
import Modal from './components/Modal'
import Header from './components/Header'
import StudentForm from './components/StudentForm'
import StudentsList from './components/StudentsList'
import './App.scss'

//TODO:
//  - validar el formulario +
//  - acciones sobre el studiantes (editar, ver, eliminar)
//  - persistir los datos   0
//  - crear desde modal     0
//  - editar estudiante     0
//  - eliminnar (fun())     0
//  - editar la funcion add student

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
		currentStudent: '',
		studentsList: [
			{
				firstName: 'Pepa',
				lastName: 'Perez',
				age: '32',
				comission: 'sexta',
				email: 'pepa@perez.com',
				id: 'stu-09800918505580112'
			}
		],
		isModalOpen: false
	}

	openStudentModal = () => {
		this.toggleModal()
	}

	addStudent = (values) => {
		console.log(values)
		// let newStudentsList = [ ...this.state.studentsList, { ...values, id: idGen('stu') } ]
		// this.setState({ studentsList: newStudentsList })
		// this.toggleModal()
	}

	editStudent = (id) => {
		this.setState({ currentStudent: id, isModalOpen: true })
	}

	toggleModal = (e) => {
		e && e.preventDefault()
		this.setState({ isModalOpen: !this.state.isModalOpen })
	}

	render() {
		let { currentStudent, studentsList, isModalOpen, studentModel } = this.state
		let modelData = currentStudent ? studentsList.find((e) => e.id === currentStudent) : studentModel
		return (
			<Fragment>
				<Header title={'Abm estudiantes'} addStudent={this.openStudentModal} />
				<StudentsList data={studentsList} editStudent={this.editStudent} />
				<Modal isOpen={isModalOpen} toggle={this.toggleModal} title={'ola ke ase'}>
					<StudentForm data={modelData} submit={this.addStudent} />
				</Modal>
			</Fragment>
		)
	}
}

export default App
