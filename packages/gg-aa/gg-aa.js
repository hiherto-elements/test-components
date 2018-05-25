
import {LitElement, html} from './node_modules/@polymer/lit-element/lit-element.js';

export class GgAa extends LitElement {

static get properties() { return { mood: String }}

  _render({mood}) {
    return html`<style> .mood { color: green; } </style>
    Web Components are <span class="mood">${mood}</span>!`;
  }

}

window.customElements.define('gg-aa', GgAa);
