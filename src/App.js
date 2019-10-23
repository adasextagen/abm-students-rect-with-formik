import React from 'react'

const Header = (props) => <h1>{props.title}</h1>

class App extends React.Component {
	state = {
		students: [
			{ firstName: 'Liu', lastName: 'Paul', age: '27', comission: '6ta', email: 'lu@oli.com' },
			{ firstName: 'Nat', lastName: 'Barco', age: '26', comission: '6ta', email: 'nat@oli.com' }
		]
	}

	render() {
		return (
      <>
        <Header title={'none'} />
        {/*this.state.students.map( (e,i) => <p key={i}>{`${e.firstName} ${e.lastName}`}</p>) */}
      </>
    )
	}
}

export default App
