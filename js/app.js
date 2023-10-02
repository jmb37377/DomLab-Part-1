const mainEl=document.querySelector('main');
mainEl.style.backgroundColor='var(--main-bg)';
mainEl.innerhtml= 'h1>SEI Rocks!</h1>'
mainEl.classList.add('flex-ctr');
const topMenu=document.getElementById('Top-Menu');
topMenu1.style.height="100%"
topMenuEl.style.backgroundColor='Var(--top-menu-bg)'
topMenuEl.classList.add('flex-around');
menulinks.array.forEach(function(link) {
    const linkEl=
    document.createElement('a')
    linkEl.setAttribute('href,link.href');
    topMenuEl.appenChild(linkEl);

});//having trouble linking to html 