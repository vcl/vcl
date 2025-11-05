import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-if.js';

export default class DocMetadata extends PolymerElement {
  connectedCallback() {
    super.connectedCallback();
    const cssHref = new URL('styles.css', document.baseURI).href;
    this.shadowRoot.getElementById('siteStyles').setAttribute('href', cssHref);
  }

  static get template() {
    return html` <link
        id="siteStyles"
        rel="stylesheet"
        media="screen"
        href=""
        charset="utf-8"
      />

      <div class="docMetadataControls">
        <button
          on-click="toggle"
          class="button half-transparent"
          type="button"
          name="button"
          title="Component information"
        >
          <div class="icogram">
            <template is="dom-if" if="{{hidden}}">
              <span class="icon mdi mdi-chevron-left"></span>
            </template>
            <template is="dom-if" if="{{!hidden}}">
              <span class="icon mdi mdi-chevron-right"></span>
            </template>
            <span class="icon mdi mdi-information"></span>
          </div>
<<<<<<< HEAD
          <aside class$="data-list docMetadata {{getHidenCLass(hidden)}}">
            <header class="data-list-header p-0">
              <h3>Component Information</h3>
            </header>
            <ul class="data-list-body" role="listbox">
              <li class="data-list-item row justify-between flex-no-wrap">
                <div class="w-gcb gutter-margin" role="gridcell">
                  <b>Name</b>
                </div>
                <div class="w-gca gutter-margin" role="gridcell">
                  [[package.name]]
                </div>
              </li>
              <template is="dom-if" if="{{package.docgen}}">
                <li class="data-list-item row justify-between flex-no-wrap">
                  <div class="w-gcb gutter-margin" role="gridcell">
                    <b>Categories</b>
                  </div>
                  <div class="w-gca gutter-margin" role="gridcell">
                    <template
                      is="dom-repeat"
                      items="{{package.docgen.categories}}"
                      as="category"
                    >
                      <span class="badge">[[category.title]]</span>
                    </template>
                  </div>
                </li>
              </template>
              <template is="dom-if" if="{{false}}">
                <li class="data-list-item row justify-between flex-no-wrap">
                  <div class="w-gcb gutter-margin" role="gridcell">
                    <b>Description</b>
                  </div>
                  <div class="w-gca gutter-margin" role="gridcell">
                    [[package.description]]
                  </div>
                </li>
              </template>
            </ul>
          </aside>
        </button>
      </div>`;
=======
        </button>
      </div>
      <aside class$="data-list docMetadata {{getHidenCLass(hidden)}}">
        <header class="data-list-header p-0">
          <h3>Component Information</h3>
        </header>
        <ul class="data-list-body" role="listbox">
          <li class="data-list-item row justify-between flex-no-wrap">
            <div class="w-gcb gutter-margin" role="gridcell"><b>Name</b></div>
            <div class="w-gca gutter-margin" role="gridcell">
              [[package.name]]
            </div>
          </li>
          <template is="dom-if" if="{{package.docgen}}">
            <li class="data-list-item row justify-between flex-no-wrap">
              <div class="w-gcb gutter-margin" role="gridcell">
                <b>Categories</b>
              </div>
              <div class="w-gca gutter-margin" role="gridcell">
                <template
                  is="dom-repeat"
                  items="{{package.docgen.categories}}"
                  as="category"
                >
                  <span class="badge">[[category.title]]</span>
                </template>
              </div>
            </li>
          </template>
          <template is="dom-if" if="{{false}}">
            <li class="data-list-item row justify-between flex-no-wrap">
              <div class="w-gcb gutter-margin" role="gridcell">
                <b>Description</b>
              </div>
              <div class="w-gca gutter-margin" role="gridcell">
                [[package.description]]
              </div>
            </li>
          </template>
        </ul>
      </aside>`;
>>>>>>> master
  }

  static get is() {
    return 'doc-metadata';
  }

  static get properties() {
    return {
      package: {
        type: Object,
      },
      hidden: {
        value: true,
      },
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
