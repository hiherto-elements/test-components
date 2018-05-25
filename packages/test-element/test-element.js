import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import {MDCTextField} from '@material/textfield';
import './test-element-style.js';
export class TestElement extends PolymerElement {

static get properties() { return { mood: String }}
  ready() {
    super.ready();
    const textField = new MDCTextField(this.$['mdc-text-field']);  
  }
  static get properties() {
    return {
      value: {
        type: String,
        notify: true, 
        reflectToAttribute: true
      },
      label: {
        type: String
      }, 
      helperText: {
        type: String, 
        value: ''
      },
      placeHolder: {
        type: String, 
        value: ''
      },
      icon: {
        type: String
      }, 
      iconTrailing: {
        type: Boolean
      },
      box: {
        type: Boolean
      },
      outlined: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      fullWidth: {
        type: Boolean
      },  
      required: {
        type: Boolean
      },
      stylefoo: {
        type: String,
        value: 'mdc-text-field mdc-text-field--fullwidth'
      }
    };
  }

  _hasIcon() {
    return !!this.icon
  }

  _isOutlined() {
    return this.outlined === true
  }
  
  // ${!fullWidth && icon ? html`<i class="material-icons mdc-text-field__icon" tabindex="0">${icon}</i>` : ''}
  // Define optional shadow DOM template
  static get template() { 
    return html`
    <style include="test-component-style"></style>
    <div 
      id="mdc-text-field">

      <input 
          type="text" 
          id="my-text-field" 
          disabled="[[disabled]]" 
          value$="[[value]]" 
          required="[[required]]" 
          class="mdc-text-field__input ">
          
        <label 
          class="mdc-floating-label" 
          for="my-text-field">
          [[label]]
        </label>
      <div class="mdc-line-ripple"></div>
      </input>
    </div>
    `;
  }
}

window.customElements.define('test-element', TestElement);
