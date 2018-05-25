import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {MDCTextField} from '@material/textfield';
import './test-element-style.js';
export class TestElement extends PolymerElement {

static get properties() { return { mood: String }}
  ready() {
    super.ready();
    const textField = new MDCTextField(this.$['mdc-text-field']);
  }

  getStyle() {
    return style
  }

  // Define optional shadow DOM template
  static get template() { 
    return html`
    <style include="test-component-style">
    </style>
    <div id="mdc-text-field" class="mdc-text-field" data-mdc-auto-init="MDCTextField">
      <input class="mdc-text-field__input" type="text" id="input">
      <label for="input" class="mdc-floating-label">[[label]]</label>
      <div class="mdc-line-ripple"></div>
    </div>
    `;
  }
}

window.customElements.define('test-element', TestElement);
