const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$('.tab-item');
const tabPanes = $$('.tab-pane');

const tabActive = $('.tab-item.active');
const line = $('.line');
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

var indexCurrent = 0;

tabItems.forEach((tab , index) => {
    tab.onclick = function() {
        auto(index);
        indexCurrent = index;
    }
})
setInterval(function() {
    auto(indexCurrent);
    if (indexCurrent === tabItems.length - 1){
        indexCurrent = 0;
    }
    else {
        indexCurrent++;
    }
}, 1000)

function auto(index) {
    const pane = tabPanes[index];

    $('.tab-item.active').classList.remove('active');
    $('.tab-pane.active').classList.remove('active');

    line.style.left = tabItems[index].offsetLeft + 'px';
    line.style.width = tabItems[index].offsetWidth + 'px';

    tabItems[index].classList.add('active');
    pane.classList.add('active');  
}

const tabs = $('.tabs');
console.log([tabs]);