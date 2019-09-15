import moduleLoader from './module-loader';

class ModuleRegistry {
	constructor(loader = moduleLoader){
		this.modules = {};
		this.loader = loader;
	}

	register(name, host){
		this.modules[name] = async () => this.loader.load(host);
	}

	get(name){
		await this.modules[name]();
	}

}

export default new ModuleRegistry();