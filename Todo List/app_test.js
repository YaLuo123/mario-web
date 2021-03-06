const addForm_2 = document.querySelector('.add');
const list_2 = document.querySelector('.todos');
const search_2 = document.querySelector('.search input');
const searchSubmit_2 = document.querySelector('.search');

// list_2.addEventListener('click', e => {
    
//     console.log(e.target);
//     if (e.target.classList.contains('delete')) {
//         e.target.parentElement.remove();//target的parent是li
//     }
// });
// search_2.addEventListener('keyup',e=>{
    
//     console.log(e.target.value)

// });
searchSubmit_2.addEventListener('keyup', e => {
    e.preventDefault();
    console.log(e.target.value);
});