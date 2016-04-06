import React, { Component } from 'react';

import Footer from 'components/footer';
import Header from 'components/header';

import 'app.scss';


class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Footer/>
			</div>
		)
	}
}

export default App
