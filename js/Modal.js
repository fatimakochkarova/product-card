export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeBtn = this.modal?.querySelector('.modal__close-btn');

    this.#initCloseListener();
  }

  open() {
    this.modal?.classList.add('modal-showed');
  }

  close() {
    this.modal?.classList.remove('modal-showed');
  }

  isOpen() {
    return this.modal?.classList.contains('modal-showed') ?? false;
  }

  #initCloseListener() {
    if (!this.modal) return;

    this.closeBtn?.addEventListener('click', () => {
      this.close();
    });

    this.modal.addEventListener('click', (event) => {
      if (event.target === this.modal) {
        this.close();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }
}
