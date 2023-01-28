class UvstmTicker {
  constructor(el, duration) {
    this.el = el;
    this.duration = duration;
  }

  init() {
    const parent = document.querySelector(this.el);
    const container = parent.querySelector('.uvstm-ticker_container');
    const items = parent.querySelector('.uvstm-ticker_items');

    while (parent.offsetWidth > items.offsetWidth) {
      Array.from(items.children).forEach(el => {
        const parentWidth = parent.offsetWidth;
        const itemsWidth = items.offsetWidth;
  
        if (itemsWidth > parentWidth) {
          return;
        }
  
        items.append(el.cloneNode(true));
      })
    }

    const clone = items.cloneNode(true);

    items.classList.add('uvstm-ticker_collection--1')
    clone.classList.add('uvstm-ticker_collection--2');

    items.setAttribute('style', `animation: uvstm-ticker-swap ${this.duration} linear infinite;`);
    container.setAttribute('style', `animation: uvstm-ticker ${this.duration} linear infinite;`);

    container.append(clone);
  }
}