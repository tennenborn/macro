import React from 'react';
import { inject } from 'mobx-react';

export default @inject('moduleStore')
class MicroModule extends React.Component {
	componentDidMount(){
		const { name, host, document } = this.props;
		const scriptId = `micro-frontend-script-${name}`;

		if (document.getElementById(scriptId)) {
			return this.renderMicroFrontend();
		}



	}

	async loadModule(host) {
		const url = `${host}/asset-manifest.json`;
		const data = await fetch(url);

		const manifest = data.json();



	}


	render(){
		const id = `${this.props.name}-container`; 

		return <main id={ id } />
	}
};