import React, { Fragment } from 'react'
import { Formik } from 'formik'

const Header = (props) => <h1>{props.title}</h1>

class App extends React.Component {
	state = {
		studentModel: {
			firstName: '',
			lastName: '',
			age: '',
			comission: '',
			email: '',
			asignatures: ''
		},
		studentsList: []
	}

	render() {
		return (
			<Fragment>
				<Header title={'none'} />

				<Formik initialValues={this.state.studentModel} onSubmit={(e) => console.log(e)}>
					{(props) => {
						let { values, handleChange, handleSubmit } = props
						return (
							<form onSubmit={handleSubmit}>
								<input
									type={'text'}
									name={'firstName'}
									placeholder={'Nombre:'}
									value={values.firstName}
									onChange={handleChange}
								/>
								<input
									type={'text'}
									name={'lastName'}
									placeholder={'Apellido:'}
									value={values.lastName}
									onChange={handleChange}
								/>
								<button type={'submit'}>Enviar</button>
							</form>
						)
					}}
				</Formik>

				{/* {this.state.students.map( (e,i) => <p key={i}>{`${e.firstName} ${e.lastName}`}</p>)} */}
				{/* <form>
					<input
						type={'text'}
						name={'firstName'}
						placeholder={'Nombre:'}
						value={this.state.studentModel.firstName}
						onChange={(e) => this.handleInput(e)}
					/>
					<input
						type={'text'}
						name={'lastName'}
						placeholder={'Apellido:'}
						value={this.state.studentModel.lastName}
						onChange={(e) => this.handleInput(e)}
					/>
				</form> */}
			</Fragment>
		)
	}
}

export default App
