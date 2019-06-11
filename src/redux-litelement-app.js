import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';

import { store } from './redux/store';

import './show-counter';
import './counter-user-interface';
import './app-admin';

class ReduxLitelementApp extends connect(store)(LitElement) {
	static get properties() {
		return {
			appName: { type: String },
			counter: { type: Number },
		};
	}

	render() {
		return html`
			<h1>${this.appName}</h1>
			<show-counter counter="${this.counter}"></show-counter>
			<counter-user-interface></counter-user-interface>
			<app-admin></app-admin>
		`;
	}

	stateChanged(state) {
		console.log('statechanged', state);
		this.appName = state.appName;
		this.counter = state.counter
	}
}

customElements.define('redux-litelement-app', ReduxLitelementApp);
