function createFooter() {
  const footer = document.querySelector('footer');

  const ghLink = document.createElement('a');
  ghLink.setAttribute('href', "https://github.com/marco-tav");
  ghLink.setAttribute('target', '__blank');
  ghLink.innerText = 'marcotav';

  const para = document.createElement('p');
  para.innerHTML = `by `;
  para.appendChild(ghLink);
  
  footer.appendChild(para);
}

export default createFooter;