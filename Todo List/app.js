const addForm = document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');
const searchSubmit=document.querySelector('.search');
//构造函数通过调用来增添新的<li>tag
const generateTemplate=(todo)=>{
    const html =`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`;
    list.innerHTML+=html;
};
//add todos
addForm.addEventListener('submit',e=>{

    e.preventDefault();
    const todo=addForm.add.value.trim();//add是input的name，addform.add 得到input处的value
    generateTemplate(todo);
    addForm.reset();
});
//delet todos
list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();//target的parent是li
    }
});
//searching&filtering todos
const filterTodos=(term)=>{
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(e => e.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(e => e.classList.remove('filtered'));

};
search.addEventListener('keyup',e=>{
    const term=e.target.value.trim().toLowerCase();
    filterTodos(term);

});
// searchSubmit.addEventListener('submit', e => {
//     e.preventDefault();
//     const term = e.target.search.value.trim().toLowerCase();
//     filterTodos(term);
// });
//time clock
const clock = document.querySelector('.clock');


const tick = () => {

    const now = new Date();
    const year = dateFns.format(now, 'YYYY');
    const mon = dateFns.format(now, 'MMM');
    const day = dateFns.format(now, 'ddd');
    const date = dateFns.format(now, 'Do');

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span class="time">${h}</span> :
    <span class="time">${m}</span> :
    <span class="time">${s}</span> 
    <span class="day"> ${day}, ${date}.${mon}, ${year}</span> 
  `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);
