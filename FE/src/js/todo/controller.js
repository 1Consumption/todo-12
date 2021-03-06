import { Observable } from "./observable.js";
import { _$, __, fetchGetData } from "../lib/util.js";

import { mock } from "./mock.js";

export class Controller extends Observable {
  constructor({ model, view, components }) {
    super();
    this.initialUrl = "http://15.165.163.174:8080";
    this.model = model;
    this.view = view;
    this.components = [...components];
  }

  fetchInitialData() {
    fetchGetData(this.initialUrl).then((initialData) => this.init(initialData));
    // this.init(mock.categories);
  }

  init(initialData) {
    initialData.forEach((data) => {
      const { id, name, cards } = data;
      let strId = id.toString();

      this.model.setColumnList(strId);
      this.model.setColumnName(strId, name);
      cards.forEach((card) => this.model.setCardList(strId, card));
      this.model.cardLength[strId] = cards.length;
      this.model.increaseCardLength(strId, false);
    });

    this.view.addColumnRender();
    this.components.forEach((component) => component.init());
    this.addEventHandler();
  }

  addEventHandler() {
    __(document).on("click", (event) =>
      this.components.forEach((component) => component.addClickHandler(event))
    );
    __(document).on("dblclick", (event) =>
      this.components.forEach((component) =>
        component.addDblclickHandler(event)
      )
    );
    __(document).on("input", () =>
      this.components.forEach((component) => component.addInputHandler(event))
    );

    __(document).on("focus", () => console.log(1));

    // this.fucusCard(event);
  }

  // fucusCard({ target }) {
  //   if (!this.previousFocus) {
  //     _c(this.previousFocus).remove(this.inputFocus);
  //   }
  //   if (!this.cardSelectionFocus) return console.log(1);

  //   if (target.dataset.focus !== this.cardSelectionFocus) return;
  //   if (target.tagName === "LI") {
  //     _c(target).add(this.inputFocus);
  //     return (this.previousFocus = target);
  //   }
  //   const currentFocus = target.closest(this.card);
  //   _c(currentFocus).add(this.inputFocus);
  //   this.previousFocus = currentFocus;
  // }
}
