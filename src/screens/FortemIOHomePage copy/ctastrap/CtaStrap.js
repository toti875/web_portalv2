import $ from 'jquery';
import 'resize-end';
import throttle from 'lodash/throttle';

export const CSS_CLASS = 'brandhub-cta-strap';
const ITEM_ACTIVE_CLASS = 'brandhub-cta-strap__item--active';
const ITEM_HIDDEN_CLASS = 'brandhub-cta-strap__item--hidden';
const ITEM_FIRST_CLASS = 'brandhub-cta-strap__item--first';
const ITEM_LAST_CLASS = 'brandhub-cta-strap__item--last';
const HIDDEN_CLASS = 'brandhub-cta-strap--hidden';

export default class CtaStrap {
  #elem = null;
  #itemElems = null;
  #itemElemShareLinksWrapper = null;
  #hideCtaStrapElems = null;
  #previousIsXs = null;
  #toggleLocked = false;

  /**
   * @param {HTMLElement} elem
   */
  constructor (elem) {
    this.#elem = $(elem);
    this.#itemElems = this.#elem.find(`.${CSS_CLASS}__item`);
    this.#itemElemShareLinksWrapper = this.#elem.find(`.${CSS_CLASS}__share-links-wrapper`);
    this.#hideCtaStrapElems = $('.brandhub-hide-cta-strap');
  }

  init () {
    this.initOnParallaxPage();
    this.initAnimation();
    this.initEvents();
    this.initNewsletterLinkScrolling();
  }

  initOnParallaxPage () {
    if ($('.brandhub-parallax').length) {
      this.#elem.appendTo($('body'));
    }
  }

  initAnimation () {
    $('body').addClass('brandhub-has-cta-strap');
    setTimeout(() => {
      this.#elem.removeClass(`${CSS_CLASS}--loading`);
    }, 2000);
  }

  initEvents () {
    this.#itemElems.hover(
      (event) => this.onItemOver(event),
      (event) => this.onItemOut(event),
    );
    this.#itemElems.click((event) => this.onItemClick(event));
    $(window).on('resizeend', (event) => this.resize(event));
    this.resize();
    window.addEventListener('scroll', () => {
      throttle(() => this.onScroll(), 500)();
    }, { passive: true });

    // monitor modals, toggling body overflow hidden
    const observer = new MutationObserver(() => this.onModalToggle());
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
  }

  onItemOver (evt) {
    if (!this.isMobile()) {
      const itemElem = $(evt.delegateTarget);
      this.showItem(itemElem);
      this.#toggleLocked = true; // avoid auto close, heppens e.g. when clicking item on laptop touchscreen
      setTimeout(() => {
        this.#toggleLocked = false;
      }, 1000);
    }
  }

  onItemOut (evt) {
    if (!this.isMobile()) {
      const itemElem = $(evt.delegateTarget);
      this.hideItem(itemElem);
    }
  }

  onItemClick (evt) {
    const itemElem = $(evt.delegateTarget);
    this.toggleItem(itemElem);
  }

  toggleItem (itemElem) {
    if (this.#toggleLocked) {
      return;
    }
    if (!itemElem.hasClass(ITEM_ACTIVE_CLASS)) {
      itemElem.addClass(ITEM_ACTIVE_CLASS);
    } else {
      itemElem.removeClass(ITEM_ACTIVE_CLASS);
    }
  }

  showItem (itemElem) {
    itemElem.addClass(ITEM_ACTIVE_CLASS);
  }

  hideItem (itemElem) {
    itemElem.removeClass(ITEM_ACTIVE_CLASS);
  }

  resize () {
    const isMobile = this.isMobile();
    // handle num items (hide items that are higher as given item limit)
    let numItems = (isMobile ? this.#elem.attr('data-num-items-mobile') : this.#elem.attr('data-num-items-desktop-tablet')) * 1;
    if (numItems > this.#itemElems.length) {
      numItems = this.#itemElems.length;
    }
    this.#itemElems.each((i, el) => {
      const elem = $(el);
      if (i < numItems) {
        elem.removeClass(ITEM_HIDDEN_CLASS);
      } else {
        elem.addClass(ITEM_HIDDEN_CLASS);
      }
      if (i === 0) {
        elem.addClass(ITEM_FIRST_CLASS);
      } else {
        elem.removeClass(ITEM_FIRST_CLASS);
      }
      if (i === numItems - 1) {
        elem.addClass(ITEM_LAST_CLASS);
      } else {
        elem.removeClass(ITEM_LAST_CLASS);
      }
    });
    // set mobile item width
    if (isMobile !== this.#previousIsXs) {
      const w = (isMobile ? `calc(${Math.floor(100 / numItems)}% - 2px)` : '');
      this.#itemElems.css({
        width: w,
      });
      this.#itemElemShareLinksWrapper.css({
        width: w,
      });
      this.#previousIsXs = isMobile;
    }
  }

  onScroll () {
    this.checkColliding();
  }

  onModalToggle () {
    this.checkColliding();
  }

  checkColliding () {
    // just add the css class 'brandhub-hide-cta-strap' to other elems, to automatically hide the cta strap if it would overlap with the element
    let collidingElemFound = false;

    this.#hideCtaStrapElems.each((i, elem) => {
      if (this.elemsColliding(this.#elem, $(elem))) {
        collidingElemFound = true;
        return false;
      }

      return true;
    });

    if (collidingElemFound) {
      this.#elem.addClass(HIDDEN_CLASS);
    } else {
      this.#elem.removeClass(HIDDEN_CLASS);
    }
  }

  elemsColliding (elem1, elem2) {
    const elem1Offset = elem1.offset();
    const elem1Height = elem1.outerHeight(true);
    const elem1Width = elem1.outerWidth(true);
    const elem1DistanceFromTop = elem1Offset.top + elem1Height;
    const elem1DistanceFromLeft = elem1Offset.left + elem1Width;

    const elem2Offset = elem2.offset();
    const elem2Height = elem2.outerHeight(true);
    const elem2Width = elem2.outerWidth(true);
    const elem2DistanceFromTop = elem2Offset.top + elem2Height;
    const elem2DistanceFromLeft = elem2Offset.left + elem2Width;

    const notColliding = (elem1DistanceFromTop < elem2Offset.top || elem1Offset.top > elem2DistanceFromTop
      || elem1DistanceFromLeft < elem2Offset.left || elem1Offset.left > elem2DistanceFromLeft);

    return !notColliding;
  }

  isMobile () {
    return this.#elem.offset().left <= 10;
  }

  initNewsletterLinkScrolling () {
    const ctaNewsletterLink = this.#elem.find(`.${CSS_CLASS}__link[data-newsletter=true]`);
    const footerNewsletterSection = $('.brandhub-footer-section .brandhub-footer-newsletter');
    if (ctaNewsletterLink.length && footerNewsletterSection.length) {
      ctaNewsletterLink.on('click', (e) => {
        e.preventDefault();
        const offset = footerNewsletterSection.offset().top;
        $('html, body').animate({
          scrollTop: offset,
        }, 1000, 'swing');
        $('.brandhub-footer-newsletter__form-control').focus();
        e.stopPropagation();
      });
    }
  }
}
