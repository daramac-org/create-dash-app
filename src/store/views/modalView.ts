import { makeAutoObservable } from "mobx";
import { Store } from "../store";

export default class ModalView {
  private _store: Store;

  modalOpen: boolean = false;
  modalType: string | null = null;

  constructor(store: Store) {
    makeAutoObservable(this, {}, { deep: false, autoBind: true });
    this._store = store;
  }

  closeModal = () => {
    this.modalOpen = false;
    this.modalType = null;
    this._store.shiftsView.shiftToDelete = null;
    this._store.shiftsView.shiftToDeleteDate = null;
  };

  openModal = (type: string) => {
    this.modalType = type;
    this.modalOpen = true;
  };
}