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
		studentsList: [],
		isModalOpen: false
	}

	newStudentModal = () => {
		this.setState({ currentStudent: '', isModalOpen: true })
	}

	saveStudent = (values) => {
		let newList = [ ...this.state.studentsList ]
		if (values.id) {
			newList[newList.indexOf(newList.find((e) => e.id === values.id))] = { ...values }
		} else {
			newList.push({ ...values, id: idGen('stu') })
		}
		this.setState({ studentsList: newList, isModalOpen: false })
	}

	editStudent = (id) => {
		this.setState({ currentStudent: id, isModalOpen: true })
	}

	deleteStudent = (id) => {
		let newList = [ ...this.state.studentsList ]
		newList.splice(newList.indexOf(newList.find((e) => e.id === id)), 1)
		this.setState({ studentsList: newList })
	}

	toggleModal = (e) => {
		e && e.preventDefault()
		this.setState({ isModalOpen: !this.state.isModalOpen })
	}

	componentDidMount = () => {
		const persistedState = window.localStorage.getItem('abm-state')
		this.setState({ ...(JSON.parse(persistedState) || { studentsList: [] }) })
	}

	componentDidUpdate = () => {
		let { studentsList } = this.state
		let persisted = { studentsList }
		window.localStorage.setItem('abm-state', JSON.stringify(persisted))
	}

	render() {
		let { currentStudent, studentsList, isModalOpen, studentModel } = this.state
		let modelData = currentStudent ? studentsList.find((e) => e.id === currentStudent) : studentModel
		return (
			<Fragment>
				<Header title={'Abm estudiantes'} newStudentModal={this.newStudentModal} />
				<StudentsList data={studentsList} editStudent={this.editStudent} deleteStudent={this.deleteStudent} />
				<Modal isOpen={isModalOpen} toggle={this.toggleModal} title={currentStudent ? 'Editar' : 'Añadir'}>
					<StudentForm data={modelData} submit={this.saveStudent} />
				</Modal>
			</Fragment>
		)
	}
}

export default App
