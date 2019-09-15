import { observable, action } from 'mobx';
import moduleLoader from '../services/module-loader';

export default class ModuleStore {
	constructor(stores = {}) {
		this.stores = stores;
	}

	@observable isLoading = false;
	@observable.shallow items = new Map();

	@action
	loadModule(url, name) {
		this.isLoading = true;

		try {
			await moduleLoader.load(url);
			this.items.set(name, );
		} catch (err) {
			console.log(err);
		} finally {
			this.isLoading = false;
		}
	}

}