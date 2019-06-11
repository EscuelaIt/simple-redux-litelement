import { LitElement, html } from 'lit-element';
import 'dile-input/dile-input';

import { connect } from 'pwa-helpers';
import { store } from './redux/store';
import { cambiarAppName } from './redux/actions/actions';

export class AppAdmin extends connect(store)(LitElement) {

  static get properties() {
    return {
      appName: { type: String }
    };
  }

  render() {
    return html`
      <hr>
      <dile-input .value="${this.appName}" @input="${this.appNameChanged}"></dile-input> <button @click="${this.save}">Guardar</button>
    `;
  }

  stateChanged(state) {
    this.appName = state.appName;
  }

  appNameChanged(e) {
    console.log(e.target.value);
    this.appName = e.target.value;
  }

  save() {
    store.dispatch(cambiarAppName(this.appName));
  }
}
customElements.define('app-admin', AppAdmin);