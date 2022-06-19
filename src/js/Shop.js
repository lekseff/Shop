/* eslint-disable object-curly-newline */
import { v4 } from 'uuid';

export default class Shop {
  constructor(container) {
    this.container = container;
    this.products = [
      {
        id: v4(),
        subTitle: 'Сказочное заморское яство',
        title: 'Нямушка',
        taste: ' с фуа-гра',
        options: ['10 порций', 'мышь в подарок'],
        weight: 0.5,
        prefix: 'кг',
        available: true,
        selected: {
          status: false,
          subTitle: 'Котэ не одобряет?',
          signature: 'Печень утки разварная с артишоками.',
        },
      },
      {
        id: v4(),
        subTitle: 'Сказочное заморское яство',
        title: 'Нямушка',
        taste: ' с рыбой',
        options: ['10 порций', '2 мыши в подарок'],
        weight: 2,
        prefix: 'кг',
        available: true,
        selected: {
          status: false,
          subTitle: 'Котэ не одобряет?',
          signature: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        },
      },
      {
        id: v4(),
        subTitle: 'Сказочное заморское яство',
        title: 'Нямушка',
        taste: ' с курой',
        options: ['100 порций', '100 мышей в подарок', 'Заказчик доволен'],
        weight: 5,
        prefix: 'кг',
        available: true,
        selected: {
          status: false,
          subTitle: 'Котэ не одобряет?',
          signature: 'Филе из цыплят с трюфелями в бульоне.',
        },
      },
    ];
  }

  /**
   * Инициализирует страницу
   */
  init() {
    this.renderCards();
    this.registerListener();
  }

  /**
   * Генерирует карты на странице
   */
  renderCards() {
    this.products.forEach((item) => {
      const cardEl = this.constructor.createCardElement(item);
      this.container.append(cardEl);
    });
  }

  /**
   * Устанавливаем обработчики событий
   */
  registerListener() {
    this.container.querySelectorAll('.card').forEach((card) => {
      const cardEl = card.querySelector('.card__content_wrapper');

      card.addEventListener('click', (event) => {
        this.clickHandler(event);
      });
      cardEl.addEventListener('mouseenter', (event) => {
        this.mouseenterHandler(event);
      });
      cardEl.addEventListener('mouseleave', (event) => {
        this.mouseleaveHandler(event);
      });
    });
  }

  /**
   * Обработка события клика
   * @param {*} event - объект события по клику
   * @returns -
   */
  clickHandler(event) {
    const currentEl = event.target;
    if (!currentEl.closest('.card__content_wrapper') && currentEl.tagName !== 'BUTTON') return;
    const element = currentEl.closest('.card');
    const { id } = element.dataset;
    const productData = this.getProduct(id);

    if (!productData.available) return; // Если элемент недоступен выходим

    if (productData.selected.status) {
      const subTitle = element.querySelector('.card__info');
      subTitle.textContent = productData.subTitle;
      subTitle.classList.remove('card__info-pink');
      element.querySelector('.card__footer-message').innerHTML = `
      Чего сидишь порадуй котэ,<button class="card__button_buy">купи.</button>`;
    } else {
      element.querySelector('.card__footer-message').textContent = productData.selected.signature;
    }

    element.dataset.selected = !productData.selected.status;
    productData.selected.status = !productData.selected.status;
  }

  /**
   * Обработка события наведения на элемент
   * @param {*} event - event
   * @returns -
   */
  mouseenterHandler(event) {
    const element = event.target.closest('.card');
    const { id } = element.dataset;
    const productData = this.getProduct(id);
    if (!productData.available) return; // Если продукт недоступен выходим

    if (productData.selected.status) {
      const subTitle = element.querySelector('.card__info');
      subTitle.textContent = productData.selected.subTitle;
      subTitle.classList.add('card__info-pink');
    }
  }

  /**
   * Обработка события ухода с элемента
   * @param {*} event - event
   * @returns -
   */
  mouseleaveHandler(event) {
    const element = event.target.closest('.card');
    const { id } = element.dataset;
    const productData = this.getProduct(id);
    if (!productData.available) return; // Если продукт недоступен выходим

    if (productData.selected.status) {
      const subTitle = element.querySelector('.card__info');
      subTitle.textContent = productData.subTitle;
      subTitle.classList.remove('card__info-pink');
    }
  }

  /**
   * Получает данные продукта по id
   */
  getProduct(id) {
    return this.products.find((item) => item.id === id);
  }

  /**
   * Создает элемент карточки товара
   * @param {*} data - данные карточки
   * @returns - html элемент
   */
  static createCardElement(data) {
    const { id, subTitle, title, taste, options, available, weight, prefix } = data;
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.id = id;
    card.dataset.selected = (available) ? data.selected.status : 'disable';

    // card wrapper
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card__content_wrapper');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card__info');
    cardInfo.textContent = subTitle;
    cardContent.append(cardInfo);

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card__title');
    cardTitle.textContent = title;
    cardContent.append(cardTitle);

    const cardTaste = document.createElement('div');
    cardTaste.classList.add('card__taste');
    cardTaste.textContent = taste;
    cardContent.append(cardTaste);

    const cardOptions = document.createElement('ul');
    cardOptions.classList.add('card__options');
    // Добавляем элементы списка опций
    options.forEach((item) => {
      cardOptions.append(this.getOptionsEl(item));
    });
    cardContent.append(cardOptions);
    // Card weight
    const cardWeight = document.createElement('div');
    cardWeight.classList.add('card__weight');
    const cardWeightValue = document.createElement('span');
    cardWeightValue.classList.add('card__weight_value');
    cardWeightValue.textContent = weight;
    cardWeight.append(cardWeightValue);
    const cardWeightPrefix = document.createElement('span');
    cardWeightPrefix.classList.add('card__weight_prefix');
    cardWeightPrefix.textContent = prefix;
    cardWeight.append(cardWeightPrefix);

    cardWrapper.append(cardContent);
    cardWrapper.append(cardWeight);

    // footer
    const cardFooter = document.createElement('footer');
    cardFooter.classList.add('card__footer');
    const cardFooterMessage = document.createElement('p');
    cardFooterMessage.classList.add('card__footer-message');
    // Если не доступен показываем другое сообщение
    if (available) {
      cardFooterMessage.textContent = 'Чего сидишь порадуй котэ,';
      const cardButtonBuy = document.createElement('button');
      cardButtonBuy.classList.add('card__button_buy');
      cardButtonBuy.textContent = 'купи';
      cardFooterMessage.append(cardButtonBuy);
    } else {
      cardFooterMessage.textContent = `Печалька, ${taste} закончился.`;
    }
    cardFooter.append(cardFooterMessage);

    card.append(cardWrapper);
    card.append(cardFooter);

    return card;
  }

  /**
   * СОздает элемент списка опций
   * @param {*} text - текст опции с карточки
   * @returns html элемент
   */
  static getOptionsEl(text) {
    const li = document.createElement('li');
    const number = Number.parseInt(text, 10);
    if (number) {
      const strong = document.createElement('strong');
      li.textContent = (text.slice(number.toString().length));
      strong.textContent = number;
      li.prepend(strong);
    } else {
      li.innerText = text;
    }
    return li;
  }
}
