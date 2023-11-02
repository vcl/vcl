
import { PolymerElement, html } from '@polymer/polymer/polymer-element';


export default class DocTopbar extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="../styles.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css">

    <div  class="row justify-between">
      <h1 class="m-0">
        <a href="#" title="to index">[[title]]</a>
      </h1>
      <div>
        <a href="https://github.com/vcl/vcl" target="_blank" title="The VCL on Github">
          <span class="icon fab fa-github fa-3x"></span>
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
