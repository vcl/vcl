

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';


import './doc-nav.js';
import './doc-topbar.js';
import './doc-content.js';


export default class DocIndex extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="../styles.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

      <app-location route="{{route}}" use-hash-as-path ></app-location>
      <app-route route="{{route}}" pattern=":#page" ></app-route>
      <div class="app col">
        <header class="toolbar">
          <doc-topbar title="{{doc.name}}"></doc-topbar>
        </header>
        <div class="content-area row flex">
          <doc-nav class="col" items="{{navItems}}" selected-item="{{route.path}}" ></doc-nav>
          <div class="docContent scrollable flex max-h-100p" id="elements">
            <doc-content content="[[content]]"></doc-content>
          </div>
        </div>
      </div>
      `;
  }

  static get is() { return 'doc-index'; }

  static get properties() {
    return {
      doc: {
        type: Object,
        value: doc
      },
      navItems: {
        type: Array,
        readOnly: true,
        computed: 'computeNavItems(doc)'
      },
      content: {
        type: Object,
        readOnly: true,
        computed: 'computeContent(doc, route.path)'
      }
    };
  }

  computeContent(doc, path) {
    if (doc && path !==undefined) {
      const { parts } = doc;
      const itemsMatchingRoute = parts.filter((part) => {
        const name = part.name.split('@vcl/').pop();
        return name === path;
      });
      const itemsDocIndex = parts.filter((part) => {
        return part.docgen.docIndex;
      });
      const selectedItem = itemsMatchingRoute[0]
        ? itemsMatchingRoute[0] : itemsDocIndex[0];

      return selectedItem;
    }
    return undefined;
  }

  computeNavItems(doc) {
    const { parts } = doc;

    const navItems = parts.map((item) => {
      const itemIsCollection = item.docgen.categories === undefined;
      const itemIsDocIndex = item.docgen.docIndex === true;
      if (itemIsCollection || itemIsDocIndex) return undefined;

      const res = {
        title: item.title || item.name,
        name: item.name,
        description: item.description
      };

      if (item.docgen.categories && item.docgen.categories.length > 0) {
        res.primaryCategory = item.docgen.categories[0].title;
        res.priority = item.docgen.categories[0].priority;
        res.itemPriority = item.docgen.categories[0].itemPriority || 0;
      }

      return res;
    }).filter(part => part);
    return navItems;
  }
}

customElements.define(DocIndex.is, DocIndex);
