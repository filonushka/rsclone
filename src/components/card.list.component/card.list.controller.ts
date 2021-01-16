export default class CardListController {
  cardList: any;

  constructor(public boardModel: { [key: string]: any }, public viewer: any) {
    this.cardList = viewer;
    this.cardList
      .on({
        event: 'dragstart',
        listener: (card: HTMLElement) => this.dragStartFunc(card),
      })
      .on({
        event: 'dragend',
        listener: () => this.dragEndFunc(),
      })
      .on({
        event: 'cardDragover',
        listener: (event: Event) => this.dragOverInEmptyList(event),
      })
      .on({
        event: 'addOneMoreCard',
        listener: () => this.addCardHandler(),
      })
      .on({
        event: 'closeAddCardBlock',
        listener: () => this.closeAddCardHandler(),
      })
      .on({
        event: 'addCardName',
        listener: (event: { [key: string]: any }) =>
          this.addCardNameHandler(event),
      })
      .on({
        event: 'addCard',
        listener: () => this.renderCardHandler(),
      })
      .on({
        event: 'clearTextarea',
        listener: () => this.clearTextarea(),
      });
  }

  clearTextarea() {
    this.cardList.clearTextarea();
  }

  dragStartFunc(card: HTMLElement) {
    this.boardModel.setDraggableList(card.parentNode);
    this.cardList.dragStartElementChange();
  }

  dragEndFunc() {
    this.cardList.dragEndElementChange();
    this.boardModel.setDraggableList(null);
  }

  dragOverInEmptyList(event: Event) {
    event.preventDefault();
    this.cardList.appendCardInEmptyList(event);
  }

  addCardHandler() {
    this.cardList.showAddCardBlock();
  }

  closeAddCardHandler() {
    this.cardList.closeAddCardBlock();
  }

  addCardNameHandler(event: { [key: string]: any }) {
    if (this.boardModel) {
      this.boardModel.getCardName(event.target.value);
    }
  }

  renderCardHandler() {
    this.cardList.renderCard();
  }
}