import { observable, action } from 'mobx';

export default class AuthStore {
	construtor(stores = {}){
		this.stores = stores;
	}

	@observable token = null;
}