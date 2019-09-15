import React from 'react';

//http://localhost:5000/build/asset-manifest.json
// http://localhost:5000/build/static/js/main.b78b9421.chunk.js

const importModule = async (url) => {
	if (window[url]) return window[url];

	window[url] = new Promise((resolve, reject) => {
		const script = document.createElement('script');
	    script.crossOrigin = '';
	    script.src = url;
	    script.onload = () => resolve();
	    script.addEventListener('error', () => {
	      reject(new Error(`Error loading ${url}`));
	    });
	    
	    document.head.appendChild(script);
	});

	return window[url];
}

const loadManifest = async (url) => {
	const data = await fetch(url);

	return data.json();
}


export default class Module extends React.Component {

	async componentDidMount(){
		if (!window['__LOADED_MICRO_MODULES__']['mortgage']) {
			const manifest = await loadManifest('http://localhost:5000/build/asset-manifest.json');

			const modulePath = manifest.files['main.js'];
			await importModule(`http://localhost:5000/build${modulePath}`);
			window.renderMortgage('mortgage-container');
		} else {
			window['__LOADED_MICRO_MODULES__']['mortgage'].render('mortgage-container');
		}
	}

	componentWillUnmount(){
		if (window['__LOADED_MICRO_MODULES__']['mortgage']) {
			window['__LOADED_MICRO_MODULES__']['mortgage'].unmount('mortgage-container');
		}
	}

	render(){
		return <div id="mortgage-container"></div>;
	}
}