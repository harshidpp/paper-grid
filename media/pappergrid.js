function hello(){
    const sidebar = document.querySelector('.menu');
    const none = document.querySelector('.hellllo')
    const show1 = document.querySelector('.hello')
    const show2=document.querySelector(".warp")
    sidebar.style.display='flex'
    none.style.display='none'
    show1.style.display='flex';
    show2.style.height='60vh';
}
function hai(){
    const show2=document.querySelector(".warp")
    const sidebar = document.querySelector('.menu');
    const none = document.querySelector('.hellllo')
    const show1 = document.querySelector('.hello')
    sidebar.style.display='none'
    none.style.display='flex'
    show1.style.display='none'
    show2.style.height='100%';
}