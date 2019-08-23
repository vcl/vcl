
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


export default class DocTopbar extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="../styles.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <div  class="vclHor vclJustifyBetween">
      <h1 class="vclM-0">
        <a href="#" title="to index">[[title]]</a>
      </h1>
      <div>
        <a href="https://github.com/vcl/vcl" target="_blank" title="The VCL on Github">
          <span class="vclIcon fab fa-github fa-3x"></span>
        </a>
      </div>
    </div>`;
  }

  static get is() { return 'doc-topbar'; }

  static get properties() {
    return {
      title: {
        type: String
      },
    };
  }
}

customElements.define(DocTopbar.is, DocTopbar);
