const html = document.documentElement;

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;

  let heroRow = document.getElementById('hero-row');
  let heroImg = document.getElementById('hero-img');
  
  if(scrollFraction > (100/500)) {
    heroRow.style.position = 'relative';
    heroRow.style.top = '80vh';
    heroImg.style.transform = 'scale(1)'
    heroImg.style.width = '100%'
  } else {
    heroRow.style.position = 'sticky';
    heroRow.style.top = '0px';
    heroImg.style.transform = 'scale(' + (1.4-(scrollFraction/(100/500))*.4) + ')';
    heroImg.style.width = (83.3+(scrollFraction/(100/500))*16.7) + '%';
  }
});