
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

export default class DocDemo extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="../styles.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <div id="docDemo">
      <div class="tabbable">
        <div class="tabs tab-style-uni" role="tablist">
          <div class$="tab {{getDemoTabClass(codeVisible)}}" on-click="showDemo" role="tab">
            <div class="icogram">
              <div class="icon icon fas fa-eye" aria-hidden="true" aria-label="account" role="img"></div>
              <div class="text">Demo</div>
            </div>
          </div>
          <div class$="tab {{getCodeTabClass(codeVisible)}}" on-click="showCode" role="tab">
            <div class="icogram">
              <div class="icon icon fas fa-code" aria-hidden="true" aria-label="account" role="img"></div>
              <div class="text">Code</div>
            </div>
          </div>

          <form class$="docEditDemoButton half-transparent {{getCodeTextClass(codeVisible)}}" action="https://codepen.io/pen/define" method="POST" target="_blank">
            <input type="hidden" name="data" value$="{{codePen}}">
            <button class="button half-transparent">
              <div class="icogram">
                <div class="icon fab fa-codepen" aria-hidden="true" role="img"></div>
                <span class="text">Edit on CodePen</span>
              </div>
            </button>
          </form>
        </div>
        <div class="tab-content">
          <div on-click="demoClick" id="ninja" name="ninja" role="tabpanel" class$="tab-panel docDemoContent transparent shadow {{getDemoClass(codeVisible)}}"></div>
          <div role="tabpanel" class$="tab-panel code {{getCodeTextClass(codeVisible)}}">
            <pre ref="source" name="source">[[markdown]]</pre>
          </div>
        </div>
      </div>
    </div>`;
  }

  static get is() { return 'doc-demo'; }

  static get properties() {
    return {
      markdown: {
        type: Object,
        observer: 'renderNinja'
      },
      style: {
        observer: 'updateCss'
      },
      codePen: {
        computed:'computeCodePen(markdown,style)'
      }

    };
  }

  constructor() {
    super();
    this.codeVisible = false;
  }
  computeCodePen(markdown, style) {
    const codePen = {
      html:markdown,
      css: style
    }
    return codePen;
  }
  updateCss(style){
    const celanStyle = this.removeBodyProps(style); // fix for firefox
    const cont = document.createElement('template');
    cont.innerHTML = `<style>${celanStyle}</style> `
    this.$.docDemo.appendChild(cont.content);
  }

  renderNinja(markdown) {
    insertAndExecute(this.$.ninja, markdown);
  }

  getCodeTextClass(codeVisible) {
    return !codeVisible ? 'hide' : '';
  }

  getDemoClass(codeVisible) {
    return codeVisible ? 'hide' : '';
  }

  getDemoTabClass(codeVisible) {
    return !codeVisible ? 'selected' : '';
  }

  getCodeTabClass(codeVisible) {
    return codeVisible ? 'selected' : '';
  }

  showCode() {
    this.codeVisible = true;
  }

  showDemo() {
    this.codeVisible = false;
  }
  removeBodyProps(styles){
    const cleanStyles = styles.replace(/body {([\s\S]*?)}/g, '')
    .replace(/.viewport {([\s\S]*?)}/g, '');
    return cleanStyles

  }
}
customElements.define(DocDemo.is, DocDemo);


function insertAndExecute(domelement, text) {
  domelement.innerHTML = text;
//   var scripts = [];

//   var ret = domelement.childNodes;
//   for ( var i = 0; ret[i]; i++ ) {
//     if ( scripts && nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
//       scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );
//     }
//   }

//   for(var script in scripts)
//   {
//     setTimeout(() => {
//       evalScript(domelement, scripts[script]);
//     }, 1);
//   }
// }

// function nodeName( elem, name ) {
//   return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
// }

// function evalScript(domelement, elem ) {
//   var data = ( elem.text || elem.textContent || elem.innerHTML || "" );

//   // var head = document.getElementsByTagName("head")[0] || document.documentElement;
//   var script = document.createElement("script");
//   script.type = "text/javascript";
//   script.appendChild( document.createTextNode( data ) );
//   domelement.insertBefore( script, domelement.firstChild );
//   domelement.removeChild( script );

//   if ( elem.parentNode ) {
//     elem.parentNode.removeChild( elem );
//   }
}
