
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-if.js';


export default class DocMetadata extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="../styles.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <div class="docMetadataControls">
    <button on-click="toggle" class="button half-transparent" type="button" name="button" title="Package information">
      <div class="icogram">
        <template is="dom-if" if="{{hidden}}">
          <span class="icon fas fa-chevron-left"></span>
        </template >
        <template is="dom-if" if="{{!hidden}}">
          <span class="icon fas fa-chevron-right"></span>
        </template >
        <span class="icon fas fa-info"></span>
      </div>
    </button>
  </div>
  <aside class$="data-list docMetadata {{getHidenCLass(hidden)}}">
    <header class="data-list-header p-0">
      <h3>Package Information</h3>
    </header>
    <ul class="data-list-body" role="listbox">
      <li class="data-list-item row justify-between">
        <span class="w-gcb" role="gridcell"><b>Name</b></span>
        <span class="w-gca" role="gridcell">[[package.name]]</span>
      </li>
      <template is="dom-if" if="{{package.repository}}">
        <li class="data-list-item row justify-between" >
          <span class="w-gcb" role="gridcell"><b>Repository</b></span>
          <span class="w-gca" role="gridcell">
            <a href=[[pack.repository]] target="_blank">[[package.repository.url]]</a>
          </span>
        </li>
      </template>
      <template is="dom-if" if="{{package.author}}">
        <li class="data-list-item row justify-between" >
          <span class="w-gcb" role="gridcell"><b>Author</b></span>
          <span class="w-gca" role="gridcell">[[package.author.name]]</span>
        </li>
      </template>
      <template is="dom-if" if="{{package.version}}">
      <li class="data-list-item row justify-between" >
        <span class="w-gcb" role="gridcell"><b>Version</b></span>
        <span class="w-gca" role="gridcell">[[package.version]]</span>
      </li>
      </template>
      <template is="dom-if" if="{{package.license}}">
        <li class="data-list-item row justify-between" >
          <span class="w-gcb" role="gridcell"><b>License</b></span>
          <span class="w-gca" role="gridcell">[[package.license]]</span>
        </li>
      </template>
      <template is="dom-if" if="{{false}}">
        <li class="data-list-item row justify-between" >
          <span class="w-gcb" role="gridcell"><b>Aprox. size</b></span>
          <span class="w-gca" role="gridcell">2kb</span>
        </li>
      </template>
      <template is="dom-if" if="{{package.docgen}}">
      <li class="data-list-item row justify-between" >
        <span class="w-gcb" role="gridcell"><b>Categories</b></span>
        <span class="w-gca" role="gridcell">
        <template is="dom-repeat"  items="{{package.docgen.categories}}" as="category">
          <span class="badge">[[category.title]]</span>
        </template>
        </span>
      </li>
      </template>
      <template is="dom-if" if="{{false}}">
        <li >
          <span class="w-gcb" role="gridcell"><b>Description</b></span>
          <span class="w-gca" role="gridcell">[[package.description]]</span>
        </li>
      </template>
    </ul>
  </aside>`;
  }

  static get is() { return 'doc-metadata'; }

  static get properties() {
    return {
      package: {
        type: Object
      },
      hidden: {
        value: true
      }
    };
  }

  toggle() {
    this.hidden = !this.hidden;
  }

  getHidenCLass(hidden) {
    return hidden ? 'hide' : '';
  }
}

customElements.define(DocMetadata.is, DocMetadata);
