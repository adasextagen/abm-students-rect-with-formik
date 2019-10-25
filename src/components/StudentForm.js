import React from 'react'
import { Formik, Form, Field } from 'formik'

const StudentForm = (props) => {
	let { data, submit } = props
	return (
		<Formik initialValues={data} onSubmit={submit}>
			{(props) => {
				return (
					<Form>
						<Field type={'text'} name={'firstName'} placeholder={'nombre:'} />
						<Field type={'text'} name={'lastName'} placeholder={'apellido:'} />
						<Field type={'text'} name={'age'} placeholder={'edad:'} />
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
