// Create a "close" button and append it to each list item
let myTodolist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myTodolist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myTodolist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close"); 
let c;
for (c = 0; i < close.length; c++) {
  close[c].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}



// Create a new list item when clicking on the "Add" button
 newElement = () => {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  let empty =  document.getElementById("empty");
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
    empty.style.display= "none";
  }
  document.getElementById("myInput").value = "";

 let span = document.createElement("SPAN");
 let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
     
    }
  }
}

