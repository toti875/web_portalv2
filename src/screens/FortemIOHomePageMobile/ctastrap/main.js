import CtaStrap, { CSS_CLASS } from './CtaStrap';
import './CtaStrap.scss';

Array.from(document.querySelectorAll(`.${CSS_CLASS}`)).forEach(/** @param {HTMLElement} elem */ (elem) => {
  const ctaStrap = new CtaStrap(elem);
  ctaStrap.init();
});
