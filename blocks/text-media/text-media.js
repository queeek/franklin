// import { div } from '../../scripts/dom-helper.js';

export default function decorate(block) {
  const [
    heading, picture, caption, text, cta1, cta2,
  ] = block.querySelectorAll(':scope > div > div');

  [caption, text, cta1, cta2].forEach((el) => {
    if (el.children.length === 0 && el.childNodes.length > 0) {
      el.innerHTML = `<p>${el.innerText}</p>`;
    }
  });
  text.classList.add('text-media-content');

  // merge caption section
  if (caption.children.length > 1) {
    caption.innerHTML = `<p class="text-media-image-caption">${[...caption.children].map((el) => el.innerHTML).join(' ')}`;
    caption.querySelectorAll('a').forEach((el) => el.classList.remove('button'));
  }

  // merge cta buttons
  if (cta1.children.length > 0) {
    const up = cta1.parentElement;
    up.append(cta2);
    up.classList.add('text-media-cta-buttons');
  }

  if (block.classList.contains('cover-image')) {
    text.before(heading);
    text.append(cta1.parentElement);
  }
}
