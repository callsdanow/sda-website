// Shared navigation and footer for SDA Integrations
// basePath: '' when called from index.html (root), '../' when called from pages/*.html
function getNav(activePage, basePath) {
  basePath = basePath || '';
  const pages = [
    { href: 'cctv.html', label: 'CCTV', id: 'cctv' },
    { href: 'access-control.html', label: 'Access Control', id: 'access' },
    { href: 'structured-cabling.html', label: 'Structured Cabling', id: 'cabling' },
    { href: 'service-areas.html', label: 'Service Areas', id: 'areas' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
  ];
  // Build correct relative hrefs depending on where the page lives
  const pagesPrefix = basePath === '' ? 'pages/' : '';
  const homeHref = basePath === '' ? 'index.html' : '../index.html';

  return `
  <nav>
    <a href="${homeHref}" class="nav-logo">
      <img src="${basePath}images/logo.png" alt="SDA Integrations" class="logo-img">
    </a>
    <div class="nav-links" id="navLinks">
      ${pages.map(p=>`
        <a href="${pagesPrefix}${p.href}" class="${p.id===activePage?'active':''}">${p.label}</a>
      `).join('')}
      <a href="${pagesPrefix}contact.html" class="nav-cta">Free Quote</a>
    </div>
    <div class="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </div>
  </nav>`;
}

function getFooter(basePath) {
  basePath = basePath || '';
  const pagesPrefix = basePath === '' ? 'pages/' : '';

  return `
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <img src="${basePath}images/logo.png" alt="SDA Integrations" class="logo-img" style="height:32px;margin-bottom:14px;">
        <p>Professional low-voltage systems integration in Los Angeles. CCTV, access control, and structured cabling for commercial and residential clients.</p>
        <div style="margin-top:16px;">
          <span class="footer-badge">🔒 Licensed · Insured · C-7 CSLB</span>
        </div>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="${pagesPrefix}cctv.html">CCTV Installation</a></li>
          <li><a href="${pagesPrefix}access-control.html">Access Control</a></li>
          <li><a href="${pagesPrefix}structured-cabling.html">Structured Cabling</a></li>
          <li><a href="${pagesPrefix}structured-cabling.html">Wi-Fi Networks</a></li>
          <li><a href="${pagesPrefix}structured-cabling.html">Computer Networks</a></li>
        </ul>
      </div>
      <div>
        <h4>Areas</h4>
        <ul>
          <li><a href="${pagesPrefix}service-areas.html">Los Angeles</a></li>
          <li><a href="${pagesPrefix}service-areas.html">San Fernando Valley</a></li>
          <li><a href="${pagesPrefix}service-areas.html">Burbank &amp; Glendale</a></li>
          <li><a href="${pagesPrefix}service-areas.html">Pasadena</a></li>
          <li><a href="${pagesPrefix}service-areas.html">Orange County</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:8182841945">📞 (818) 284-1945</a></li>
          <li><a href="mailto:info@sdaintegrations.com">✉ info@sdaintegrations.com</a></li>
          <li><a href="${pagesPrefix}service-areas.html">📍 Valley Glen, CA 91401</a></li>
          <li><a href="${pagesPrefix}contact.html">Get Free Quote →</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 SDA Integrations LLC. All rights reserved.</span>
      <span>Valley Glen, CA · Serving Greater Los Angeles</span>
    </div>
  </footer>`;
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
