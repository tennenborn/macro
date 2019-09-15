import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import AuthStore from './stores/auth';
import App from './App';
import './index.css';

window['__LOADED_MICRO_MODULES__'] = {};

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {};
stores.routingStore = routingStore;
stores.authStore = new AuthStore(stores);

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
	<Provider { ...stores }>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);