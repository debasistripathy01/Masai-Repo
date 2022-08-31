class Todo {
    #todos;
  //   #onUpdateCallback;
    constructor() {
      this.#todos = [];
    }
    get item() {
      return this.#todos;
    }
    set item(title) {
      const newItem = {
        id: Date.now(),
        title: title,
        status: false,
      };
      this.#todos = [...this.#todos, newItem];
    }
  
    toggleStatus(id) {
      this.#todos = this.#todos.map((el) => 
        el.id === id ? { ...el, status: !el.status } : el
      );
    }
    deleteItem(id){
      this.#todos = this.#todos.filter((el)=> el.id !== id);
    }
  }
  
  const list = new Todo();
  window.addEventListener("load", () => {
    const addBtn = document.getElementById("add-btn");
  
    addBtn.onclick = () => {
      const text = document.getElementById("input").value;
      // list.items(text)
      list.item = text;
      console.log(list);
      renderDom();
    };
  });
  
  //Todo Structure
  
  function TodoItem({ id, title, status }) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    li.innerHTML = `${title} - ${status} - ${id}`;
    
    const btn = document.createElement('button');
    btn.textContent = "Toggle"; 
    btn.onclick =() =>{
      list.toggleStatus(id) ;
      renderDom();
    }    
    const del = document.createElement('button');
    del.textContent = "Delete";
    del.onclick =() =>{
      list.deleteItem(id);
      renderDom(); 
    }                                                                                   
    div.append(li,btn,del);
    return div;
  }
  
  let renderDom = () => {
    let conatiner = document.getElementById("conatiner");
    conatiner.innerHTML = null;
  
    list.item.forEach((el) => {
      let newItem = TodoItem(el);
      conatiner.append(newItem);
    });
  };
  
  // let item = {
  //   title: "abc",
  //   id: 1,
  //   status: false,
  // };
  // item = {...item, status: !item.status},
  // console.log(item)
  
  // item ={...item,status: !item.status};
  // console.log(item);