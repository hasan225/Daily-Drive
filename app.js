const MenuBar =document.querySelector('.fa-bars');
const menu =document.querySelector('.menu');
const MenuCancel =document.querySelector('.fa-times');
const bellIcon =document.querySelector('.fa-bell');
const notification =document.querySelector('.notification');
const notificationUndo =document.querySelector('.fa-undo');


MenuBar.addEventListener('click',()=>{
    menu.style.transform='translateX(0%)';
    menu.style.transition='.4s'
})
MenuCancel.addEventListener('click',()=>{
    menu.style.transform='translateX(-100%)';
    menu.style.transition='.4s';
})

bellIcon.addEventListener('click',()=>{
    notification.style.transform='translateX(0%)';
    notification.style.transition='.4s'
})
notificationUndo.addEventListener('click',()=>{
    notification.style.transform='translateX(-100%)';
    notification.style.transition='.4s';
})


