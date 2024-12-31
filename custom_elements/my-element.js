const template = document.createElement('div');
template.innerHTML = `
  <style>
    .hello {  color: blue; }

    p {
      color: red;
    }
  </style>
  <p class="hello">Hola mundo!</p>
  <p>texto predeterminado</p>
`;

class myElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement('p');
  }

  connectedCallback() {
    this.p.textContent = 'My custom element';
    this.appendChild(this.p);

    this.appendChild(template);
  }
}

customElements.define('my-element', myElement);