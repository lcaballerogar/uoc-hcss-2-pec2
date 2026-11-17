/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import * as bootstrap from 'bootstrap';

/**
 * Header menu: hidden while the footer reaches the top of the viewport.
 * The inert attribute takes the menu out of the focus order and the
 * accessibility tree; the header component hides it visually.
 */
const footer = document.querySelector('.js-footer');
const headerMenu = document.querySelectorAll('.js-header-menu');

if (footer && headerMenu.length > 0) {
  const observer = new IntersectionObserver(([entry]) => {
    headerMenu.forEach((part) => {
      part.inert = entry.isIntersecting;
    });
  }, { rootMargin: '0px 0px -99% 0px' });

  observer.observe(footer);
}
