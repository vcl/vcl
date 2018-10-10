
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-if.js';


export default class DocMetadata extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="../vcl.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <div class="docMetadataControls">
    <button on-click="toggle" class="vclButton vclHalfTransparent" type="button" name="button" title="Package information">
      <div class="vclIcogram">
        <template is="dom-if" if="{{hidden}}">
          <span class="vclIcon fa fa-chevron-left"></span>
        </template >
        <template is="dom-if" if="{{!hidden}}">
          <span class="vclIcon fa fa-chevron-right"></span>
        </template >
        <span class="vclIcon fa fa-info"></span>
      </div>
    </button>
  </div>
  <aside class$="vclDataList docMetadata {{getHidenCLass(hidden)}}">
    <header class="vclDataListHeader vclNoPadding">
      <h3>Package Information</h3>
    </header>
    <ul class="vclDataListBody" role="listbox">
      <li class="vclDataListItem" horizontal center layout>
        <span class="vclGridSpan-gcb" role="gridcell"><b>Name</b></span>
        <span class="vclGridSpan-gca" role="gridcell">[[package.name]]</span>
      </li>
      <template is="dom-if" if="{{package.repository}}">
        <li class="vclDataListItem" horizontal center layout >
          <span class="vclGridSpan-gcb" role="gridcell"><b>Repository</b></span>
          <span class="vclGridSpan-gca" role="gridcell">
            <a href=[[pack.repository]] target="_blank">[[package.repository.url]]</a>
          </span>
        </li>
      </template>
      <template is="dom-if" if="{{package.author}}">
        <li class="vclDataListItem" horizontal center layout >
          <span class="vclGridSpan-gcb" role="gridcell"><b>Author</b></span>
          <span class="vclGridSpan-gca" role="gridcell">[[package.author.name]]</span>
        </li>
      </template>
      <template is="dom-if" if="{{package.version}}">
      <li class="vclDataListItem" horizontal center layout >
        <span class="vclGridSpan-gcb" role="gridcell"><b>Version</b></span>
        <span class="vclGridSpan-gca" role="gridcell">[[package.version]]</span>
      </li>
      </template>
      <template is="dom-if" if="{{package.license}}">
        <li class="vclDataListItem" horizontal center layout >
          <span class="vclGridSpan-gcb" role="gridcell"><b>License</b></span>
          <span class="vclGridSpan-gca" role="gridcell">[[package.license]]</span>
        </li>
      </template>
      <template is="dom-if" if="{{false}}">
        <li class="vclDataListItem" horizontal center layout >
          <span class="vclGridSpan-gcb" role="gridcell"><b>Aprox. size</b></span>
          <span class="vclGridSpan-gca" role="gridcell">2kb</span>
        </li>
      </template>
      <template is="dom-if" if="{{package.docgen}}">
      <li class="vclDataListItem" horizontal center layout >
        <span class="vclGridSpan-gcb" role="gridcell"><b>Categories</b></span>
        <span class="vclGridSpan-gca" role="gridcell">
        <template is="dom-repeat"  items="{{package.docgen.categories}}" as="category">
          <span class="vclLabel">[[category.title]]</span>
        </template>
        </span>
      </li>
      </template>
      <template is="dom-if" if="{{false}}">
        <li >
          <span class="vclGridSpan-gcb" role="gridcell"><b>Description</b></span>
          <span class="vclGridSpan-gca" role="gridcell">[[package.description]]</span>
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
    return hidden ? 'vclDisplayNone' : '';
  }
}

customElements.define(DocMetadata.is, DocMetadata);
