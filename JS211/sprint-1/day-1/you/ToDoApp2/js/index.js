let ListArr = JSON.parse(localStorage.getItem("toDoList")) || []
Display(ListArr);


        function Display(data){

            document.getElementById("box").innerHTML = "";
            
            ListArr.forEach((el, index)=>{
                let boxEl = document.createElement("div");
                boxEl.id = "boxEl";

                let td1 = document.createElement("td");
                td1.innerText = el.Text;

                let Btn1 = document.createElement("button");
                Btn1.innerText = "Mark As Complete";
                Btn1.setAttribute("class", "markComplete");
                Btn1.id = "complete"
                Btn1.addEventListener("click", function(){
                    CompleteFunc(el, index);
                });


                let Btn2 = document.createElement("button");
                Btn2.innerText = "Delete";
                Btn2.setAttribute("class", "DeleteFunc");
                Btn2.addEventListener("click", function(){
                    DeleteFunc(el, index);
                });

                boxEl.append(td1, Btn1, Btn2);
                document.getElementById("box").append(boxEl);
            });
            
        }

        function CompleteFunc(elem, index){
            document.getElementById("complete").style.backgroundColor ="Lightgreen";
            document.getElementById("complete").innerText = "Completed";
            document.getElementById("complete").addEventListener("click", function(){
                completeToReverse(el)
            });
            function completeToReverse(elem){
                document.getElementById("complete").innerText = "Mark As Complete";
            }
            // window.location.reload()
        }

        function DeleteFunc(elem, index){
            ListArr.splice(index, 1);
            localStorage.setItem("toDoList", JSON.stringify(ListArr));
            window.location.reload();
        }
