import { LitElement, html } from 'lit-element';

import { store } from './redux/store';
import { incrementarContador, decrementarContador } from './redux/actions/actions'
export class CounterUserInterface extends LitElement {

  render() {
    return html`
    <hr>
    <button @click="${this.incrementar}">Incrementar</button>
    <button @click="${this.decrementar}">Decrementar</button>
    `;
  }

  incrementar() {
    store.dispatch(incrementarContador());
  }
  decrementar() {
    store.dispatch(decrementarContador());
  }
}
customElements.define('counter-user-interface', CounterUserInterface);