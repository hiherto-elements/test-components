
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
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
    <style include="test-card-style"></style>
    <div class="mdc-card--outlined">
        <slot></slot>
    </div>`;
  }
}

window.customElements.define('test-card', TestCard);
