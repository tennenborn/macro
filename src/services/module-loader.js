class ModuleLoader {
	async load(host){
		const manifest = await this.fetchManifest(`${host}/build/asset-manifest.json`);
		const scriptUrls = Object.values(manifest.files)
			.filter(path => path.includes('/static/js/'))
			.map(path => `${host}${path}`)
		;

		await Promise.all(
			scriptUrls.map(url => this.fetchScript(url)),
		);
	}

	async fetchManifest(url) {
		const data = await fetch(url);

		return data.json();
	}

	async fetchScript(url) {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
		    script.crossOrigin = '';
		    script.src = url;
		    script.onload = () => resolve();
		    script.onerror = (err) => reject(err);
		    
		    document.head.appendChild(script);
		});
	}
}

export default new ModuleLoader();