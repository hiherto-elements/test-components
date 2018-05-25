
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import './test-element-style.js';
export class TestCard extends PolymerElement  {

  _hasTitle() {
    return !!this.title
  }

  static get properties() {
    return {
      title: {
        type: String,
        notify: true, 
        reflectToAttribute: true
      }
    }
  }
  
  static get template(){
    return html`
      <style include="test-component-style"></style>
    <div class="mdc-card">
      <template is="dom-if" if="{{_hasTitle()}}">
        <div class="mdc-card">
          <div class="mdc-card__media-content">
            [[title]]
          </div>
        </div>
        <slot></slot>
      </template>
    </div>`;
  }
}

window.customElements.define('test-card', TestCard);
