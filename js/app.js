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

});
///Part 2
SubmitEl=document.getElementById('sub-menu');
subMenuEl.style.height=100%;
subMenuEl.style.position='absolute';
subMenuEl.style.top='0';
const topMenuLinks=
document.querySelectorAll('#top-menu a');
let showingSubMenu=false;
topMenuEl.addEventListener('click',function(evt) {
    evt.preventDefault();
    const link= evt.target;
    if (link.tagName !== 'A') return;
    console.log(link.textcontent);

    if (link.classList.contains('active'))
    link.classList.remove('active')
});

link.classList.remove('active');

const linkData =
menuLinks.find(function(linkObj) {
    return linkObj.text ===
    link.textContent;
} ) ;

showingSubMenu ='subLinks' in linkdata;

if (showingSubMenu) {
    buildingSubMenu(linkData.sublinks);
    subMenuEl.style.top = '100%'
} else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';

}

function buildingSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(link) {
        const linlEL=
        document.createElement('a');
        linkEl.setAttribute('href', link.href);
        linkEl.textContent=link.text;
    });

}

subMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link=evt.target;
    if (link.tagName !=='A') return;
    console.log(link.textContent);

}
topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
});

mainEl.innerHTML=
<h1>${link.textContent}</h1>
)
})