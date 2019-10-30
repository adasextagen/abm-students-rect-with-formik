import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const studentValidationSchema = Yup.object().shape({
	firstName: Yup.string().required()
})

const StudentForm = ({ data, submit }) => {
	return (
		<Formik
			initialValues={data}
			onSubmit={submit}
			validationSchema={studentValidationSchema}
			enableReinitialize // permite que los valores iniciales del formulario cambien dinamicamente
			// validate={(values) => {
			// 	let errors = {}
			// 	if (!values.firstName) {
			// 		errors.firstName = 'debe ingresar el nombre'
			// 	}
			// 	if (!values.age) {
			// 		errors.age = 'debe ingresar la edad'
			// 	} else if (values.age < 18) errors.age = 'debe ser mayor de edad'

			// 	console.log(errors)
			// 	return errors
			// }}
		>
			{(props) => {
				//let { errors, touched } = props
				return (
					<Form>
						<Field type={'text'} name={'firstName'} placeholder={'nombre:'} />
						{/* {touched.firstName && <p>{errors.firstName}</p>} */}
						<ErrorMessage name={'firstName'} />
						<Field type={'text'} name={'lastName'} placeholder={'apellido:'} />
						<Field type={'number'} name={'age'} placeholder={'edad:'} />
						<Field type={'text'} name={'email'} placeholder={'email:'} />
						<Field type={'text'} name={'comission'} placeholder={'comisión:'} />
						<button type={'submit'}>Enviar</button>
					</Form>
				)
			}}
		</Formik>
	)
}

export default StudentForm
