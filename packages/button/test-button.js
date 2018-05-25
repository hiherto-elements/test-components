
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './test-element-style.js';
export class TestButton extends PolymerElement  {

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        notify: true, 
        reflectToAttribute: true
      }
    }
  }

  static get template() { 
    return html`
    <style include="test-button-style">
    </style>
    <button 
      disabled="[[disabled]]" 
      class="mdc-button">
      <slot><slot>
    </button>`;
  }

}

window.customElements.define('test-button', TestButton);
