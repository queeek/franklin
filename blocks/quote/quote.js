import { domEl } from '../../scripts/dom-helper.js';

export default function decorate(block) {
  const [
    picture, quote, cite,
  ] = block.querySelectorAll(':scope > div');
  // debugger;

  picture.classList.add('quote-image');

  const quoteEl = domEl('blockquote', quote);
  const citeEl = domEl('cite', cite);

  block.append(quoteEl, citeEl);
}
