document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTaskList(e.target['new-task-description'].value)
    form.reset();

    if (document.querySelector('div img') !== null){
    document.querySelector('div img').remove();
    };
  })

  function buildTaskList(taskList){
        let li = document.createElement('li')
        let btn = document.createElement('button')
        btn.addEventListener('click', handleDelete)
        btn.textContent = ' X'
        li.textContent = `${taskList}  `;
        li.appendChild(btn)
        document.querySelector('#tasks').appendChild(li)
  }

  function handleDelete(e){
    e.target.parentNode.remove();
   if(document.querySelectorAll('#tasks li').length === 0){
     allTasksRemoved();
   }
  }

  function allTasksRemoved(){
    let imgDiv = document.createElement('div')
    let img = document.createElement('img')
    imgDiv.appendChild(img)
    document.querySelector('div#list').appendChild(imgDiv)
    img.id = 'celebrate_image'
    img.src = 'https://salesgravy.com/wp-content/uploads/2021/01/How-to-celebrate-success-in-the-pandemic.png'
  }
   
})
