
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';


import DocDemo from './doc-demo.js';
import './doc-metadata.js';

export default class DocContent extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="../styles.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">


    <div class$="docPart vclLayoutHorizontal {{getContentClass(hasContent)}}">
      <div class="vclLayoutFlex">
        <h2 id$="docpart-{{content.name}}" class="vclArticleHeader">
            [[content.title]]
            <small class="vclArticleSubHeader">[[content.name]]</small>
        </h2>
        <div id="readme" name="readme" class="docText"></div>

      </div>
      <template is="dom-if" if="{{hasContent}}">
        <doc-metadata class="docMetadata" package="{{content}}"></doc-metadata>
      </template>
    </div>

    <div class$="docWelcome {{getDefTextClass(hasContent)}}">
      <h3>Welcome to the doc client</h3>
      <div>
      If you see this, you have no package which provides
      <code>doc-index</code>. The readme of this package would
      be shown here otherwise.
      </div>
    </div>`;
  }

  static get is() { return 'doc-content'; }

  static get properties() {
    return {
      content: {
        type: Object,
        observer: 'renderReadme'
      },
      hasContent: {
        computed: 'computeHasContent(content)'
      }
    };
  }

  renderReadme(content) {
    const { readme, demos, style } = content;
    this.$.readme.innerHTML = readme;
    Object.keys(demos).forEach((demoName) => {
      const markdown = demos[demoName];
      const demoNode = new DocDemo();
      demoNode.markdown = markdown;
      demoNode.style = style;
      this.$.readme.querySelector(`#demo-${demoName}`).appendChild(demoNode);
    });
    const lists = this.$.readme.querySelectorAll('ul')
    lists.forEach(listElem => {
      listElem.classList.add('vclList')
      const listItems = listElem.querySelectorAll('li')
      listItems.forEach(listItem => {
        listItem.classList.add('vclListItem')
      });
    });
    const tables = this.$.readme.querySelectorAll('table')
    tables.forEach(table => {
      table.classList.add('vclTable')
    });
  }

  computeHasContent(content) {
    const has = content !== undefined;
    return has;
  }

  getDefTextClass(hasContent) {
    return hasContent ? 'vclDisplayNone' : '';
  }

  getContentClass(hasContent) {
    return !hasContent ? 'vclDisplayNone' : '';
  }
}

customElements.define(DocContent.is, DocContent);
