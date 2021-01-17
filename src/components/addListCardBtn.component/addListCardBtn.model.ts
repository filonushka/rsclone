import EventEmitter from '../../utils/eventEmitter';

export default class AddListCardBtnModel extends EventEmitter {
  model: null | {};

  inputNeListName: any | null;

  cardName: string | null;

  constructor() {
    super();
    this.model = null;
    this.inputNeListName = null;
    this.cardName = null;
  }

  changeNewListName(newName: string) {
    this.inputNeListName = newName;
  }
}
