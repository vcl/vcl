
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


export default class DocTopbar extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="../vcl.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <div  class="vclLayoutHorizontal vclLayoutJustified"> 
      <h1 class="vclNoMargin">
        <a href="#" title="to index">[[title]]</a>
      </h1>
      <div>
        <a href="https://github.com/vcl/doc" target="_blank" title="to Github">
          <span class="vclIcon fa fa-github fa-3x"></span>
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
