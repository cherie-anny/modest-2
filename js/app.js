//modal
let modal = document.querySelector('.modal');
let moreDetailsButtons = document.querySelectorAll('.button-more');
let closeBtn = document.querySelector('.btn-close');
// console.log(modal)
// console.log(moreDetailsButtons)
// console.log(closeBtn)
//функція показує модалку
moreDetailsButtons.forEach(item => {
    item.addEventListener('click', function() {
        modal.classList.add('show');
        modal.classList.remove('hide');
    });
});
//функція ховає модалку
function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
}
closeBtn.addEventListener('click',closeModal);

//щоб модалку можна було закрити будь де
//якщо клікнули, то треба запустити функ.,сюди передаємо event
modal.addEventListener('click', function(e) {
    //і кажемо, якщо event target, тобто той елем. по якому клікнули дорівнює modal
    if(e.target === modal) {
// то тоді викликаємо функ. closeModal()
        closeModal();
    }
});



