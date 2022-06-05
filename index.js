const $ = document.querySelector.bind(document);
const $$= document.querySelectorAll.bind(document);

const tabItems = $$('.tab-item');
const tabPane = $$('.tab-pane');

const tabActive = $('.tab-item.active');
const line = $('.line');
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';
// tabItems.forEach((tab , index) => {
//     var pane = tabPane[index];
//     tab.onclick = function() {
//       $('.tab-item.active').classList.remove('active');
//       $('.tab-pane.active').classList.remove('active');
      
//       line.style.left = this.offsetLeft + 'px';
//       line.style.width = this.offsetWidth + 'px';

//       this.classList.add('active');
//       pane.classList.add('active');
//     }

// })



var indexCurrent = 0;
tabItems.forEach((tab , index) => {
  tab.onclick = function() {
    action(index);
    indexCurrent = index;
  }
})
setInterval(function() {
    action(indexCurrent);
    if (indexCurrent === tabItems.length - 1) {
      indexCurrent = 0;
    }
    else {
      indexCurrent++;
    }
}, 1000)

function action(index) {
  var pane = tabPane[index];
  $('.tab-item.active').classList.remove('active');
  $('.tab-pane.active').classList.remove('active');
      
  line.style.left = tabItems[index].offsetLeft + 'px';
  line.style.width = tabItems[index].offsetWidth + 'px';

  tabItems[index].classList.add('active');
  pane.classList.add('active');
}
// change