

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';


import './doc-nav.js';
import './doc-topbar.js';
import './doc-content.js';

export default class DocIndex extends PolymerElement {
  static get template() {
    return html`

    <link rel="stylesheet" href="../vcl.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

      <app-location route="{{route}}"></app-location>
      <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <div class="vclApp vclLayoutVertical">
        <header class="vclToolbar">
          <doc-topbar title="{{doc.name}}"></doc-topbar>
        </header>
        <div class="vclContentArea vclLayoutHorizontal vclLayoutFlex">
          <doc-nav class="vclLayoutVertical" items="{{navItems}}" selected-item="{{routeData.page}}" ></doc-nav>
          <div class="docContent vclScrollable vclLayoutFlex" id="elements">
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
        computed: 'computeContent(doc, routeData)'
      }
    };
  }

  computeContent(doc, routeData) {
    if (doc && routeData && (routeData.hasOwnProperty('page'))) {
      const { parts } = doc;
      const itemsMatchingRoute = parts.filter((part) => {
        const name = part.name.split('@vcl/').pop();
        return name === routeData.page;
      });
      const itemsDocIndex = parts.filter((part) => {
        const name = part.docgen.provides[0];
        return name === 'doc-index';
      });
      const selectedItem = itemsMatchingRoute[0] 
        ? itemsMatchingRoute[0] : itemsDocIndex[0]

      return selectedItem;
    }
    return undefined;
  }

  computeNavItems(doc) {
    const { parts } = doc;

    const navItems = parts.map((item) => {
      const itemIsColection = item.docgen.categories === undefined;
      const itemIsDocIndex = item.docgen.provides[0] === 'doc-index'; 
      if (itemIsColection ||itemIsDocIndex) return undefined; 
      
      const withoutPrefixName = /@vcl\/(.+)/.exec(item.name);

      const res = {
        title: item.title || item.name,
        name: withoutPrefixName[1],
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
