const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// Select tab content item 

function selectItem(e) {
    removeBorder();
    removeShow();
    
    // Add border to current tab 
    this.classList.add('tab-border');
    // Grab content item from Dom 
    const tabContentItem = document.getElementById(this.id+'-content');
    // const tabContentItem2 = document.querySelector('#tab-2-content');
    // this.tabContentItem2.classList.add('show');
    // const tabContentItem1 = document.querySelector('#tab-2-content');
    // Add show class 
    tabContentItem.classList.add('show');
   
   
}
function removeBorder() {
    tabItems.forEach( item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabContentItems.forEach( item => item.classList.remove('show'));
}
// Listen for  tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));
