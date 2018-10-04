
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-if.js';

const KEYCODE_UP = 38;
const KEYCODE_DOWN = 40;
const KEYCODE_ENTER = 13;

export default class DocNav extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="../vcl.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
        <nav class="docNav vclNavigation vclVertical vclLayoutVertical vclLayoutFlex">
            <div class="vclInputGroupEmb">
              <span class="vclPrepended">
                  <div class="vclIcon fa fa-search"></div>
              </span>
              <input
                  type="search"
                  name="search"
                  id="search"
                  on-input="searchUpdate"
                  on-keydown="searchKey"
                  placeholder="Search Modules"
                  class="vclInput vclNoBorder vclPrepItem vclAppItem searchInput"
                  value=""
                  autocomplete="off"
                  autofocus />
              <button on-click="clearSearch" class$="vclButton vclTransparent vclSquare vclAppended {{getDisplayNoneClearBtn(searchedText)}} ">
                  <div class="vclIcogram">
                  <div class="vclIcon fa fa-times-circle" aria-hidden="true" aria-label="Clear" role="img"></div>
                  </div>
              </button>
            </div>
            <template is="dom-if" if="[[!searchedText]]">
            <ul class=" vclScrollable vclYOnHover vclLayoutFlex" id="nav-items">
              <template is="dom-repeat" items="{{groupedOnCategories}}" as="category">

                <li on-click="toggleCathegory" role="presentation" class="vclNavigationItem docNavHeading" >
                  <span style="font-weight: bold;"  class="vclNavigationItemLabel vclIcogram" href="#">
                    <span class$="vclIcon fa {{getCathegoryClass(index,openedCathegories)}}" aria-hidden="true" aria-label="angle-right" role="img"></span>
                    <span>[[category.title]]</span>
                  </span>
                </li>
                <template is="dom-if" if="[[getCathegoryIsOpen(index,openedCathegories)]]">
                  <div class="vclAnimContainer" >
                    <template is="dom-repeat" items="{{category.items}}" as="item">
                      <li class$="vclNavigationItem docNavItem {{getSelectedClass(item.name,selectedItem)}}" role="presentation">
                      <a class="vclNavigationItemLabel vclIcogram"  href$="{{item.name}}">
                        <span class="vclText">[[item.title]]</span>
                      </a>
                      </li>
                    </template>
                  </div>
                </template>

              </template>
            </ul>
            </template>

            <template is="dom-if" if="[[searchedText]]">
              <ul class="vclScrollable vclYOnHover vclLayoutFlex"id="nav-items">
                <template is="dom-repeat" items="{{searchResults}}" as="item">
                  <li class$="vclNavigationItem {{getSelectedClass(item.name,selectedItem)}}" role="presentation">
                    <a class="vclNavigationItemLabel vclIcogram"  href$="{{item.name}}" >
                      <span class="vclText">[[item.title]]</span>
                    </a>
                  </li>
                </template>
              </ul>
            </template>

        </nav>
  `;
  }

  static get is() { return 'doc-nav'; }

  static get properties() {
    return {
      items: {
        type: Array
      },
      selectedItem: {
        type: String,
        notify: true
      },
      searchedText: {
        type: String,
        value: ''
      },
      searchResults: {
        type: Array,
        readOnly: true,
        computed: 'computeSearchResults(items,searchedText)'
      },
      groupedOnCategories: {
        type: Array,
        readOnly: true,
        computed: 'computeGroupedOnCategories(items)'
      },
    };
  }

  constructor() {
    super();
    this.openedCathegories = [];
  }

  computeSearchResults(cats, searchedText) {
    if (cats && searchedText !== undefined) {
      const searchResults = cats.filter((cat) => {
        const { title, description } = cat;
        const lowerCaseText = searchedText.toLowerCase()
        const descriptionMatchesSearch = description.toLowerCase().indexOf(lowerCaseText) >= 0;
        const titleMatchesSearch = title.toLowerCase().indexOf(lowerCaseText) >= 0;
        return descriptionMatchesSearch || titleMatchesSearch;
      }).sort((a, b) => a.itemPriority - b.itemPriority);
      return searchResults;
    }
    return undefined;
  }

  computeGroupedOnCategories(initialItems) {
    const categories = initialItems.reduce((grouped, item) => {
      grouped[item.primaryCategory] = grouped[item.primaryCategory] || [];
      grouped[item.primaryCategory].push(item);
      return grouped;
    }, {});

    const groupedOnCategories = Object.keys(categories).map((title) => {
      const items = categories[title];
      const { priority } = items[0];
      return {
        title, priority, items
      };
    }).sort((a, b) => a.priority - b.priority)
      .map((elem, index) => Object.assign({}, elem, { index }));

    return groupedOnCategories;
  }

  getSelectedClass(itemName, selectedItem) {
    return itemName === selectedItem ? 'vclSelected' : '';
  }

  getCathegoryClass(index, openedCathegories) {
    return openedCathegories[index] ? 'fa-angle-down' : 'fa-angle-right';
  }

  getDisplayNoneClearBtn(searchedText) {
    return !searchedText ? 'vclDisplayNone' : '';
  }

  getCathegoryIsOpen(index, openedCathegories) {
    return !!openedCathegories[index];
  }

  toggleCathegory(e) {
    const { category } = e.model.__data;
    const { index } = category;
    this.openedCathegories[index] = !this.openedCathegories[index];
    this.openedCathegories = [...this.openedCathegories];
  }

  searchKey(e) {
    const { keyCode } = e;
    if (keyCode === KEYCODE_DOWN) {
      const selectedIndex = this.getSelectedItemIndex();
      const itsNotLast = selectedIndex !== (this.searchResults.length - 1);
      const nextIndex = (selectedIndex !== undefined) && itsNotLast
      ? selectedIndex + 1 : 0  ;

      const nextItemName = this.searchResults[nextIndex].name;
      this.selectedItem = nextItemName;

    } else if (keyCode === KEYCODE_UP) {
      const selectedIndex = this.getSelectedItemIndex();
      const prevIndex = (selectedIndex !== undefined) && (selectedIndex !== 0)
      ? selectedIndex - 1 : this.searchResults.length - 1;

      const prevItemName = this.searchResults[prevIndex].name;
      this.selectedItem = prevItemName;

    } else if (keyCode === KEYCODE_ENTER) {
      const firstItemName = this.searchResults[0].name;
      this.selectedItem = firstItemName;
    }

  }

  getSelectedItemIndex() {
    return this.searchResults.map((item,index) => {
      if (item.name === this.selectedItem) {
        return index;
      }
      return undefined;
    }).filter(i=>i !== undefined)[0];
  }

  searchUpdate(e) {
    this.searchedText = e.target.value;
  }

  clearSearch() {
    this.searchedText = '';
    this.$.search.value = '';
  }
}

customElements.define(DocNav.is, DocNav);
