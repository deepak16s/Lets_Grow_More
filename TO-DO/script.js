function Include(){
    // to create a container to store buttons and paragraph
    var outShell = document.createElement("div");
    //placing the child into the parent root
    document.getElementById("divtask").appendChild(outShell);
    outShell.className = "simpleShell";
    var addedItem = document.createElement("p");
    addedItem.className = "value";
    outShell.appendChild(addedItem);
    var value = document.getElementById("enter-value").value;
    addedItem.innerHTML = value;
    // Striking tasks 
    var crossButton = document.createElement("button");
    // inserted text for display character 
    crossButton.innerHTML = "&#9760"; 
    crossButton.className = "crossButton";
    var cross = document.getElementsByClassName("crossButton");
    outShell.appendChild(crossButton);
    for(var Finishbutton=0;Finishbutton<cross.length;Finishbutton++){
        cross[Finishbutton].onclick = function(){
            var parTarget = this.parentElement;
            var childTarget = parTarget.children[0];
            childTarget.style.textDecoration = "line-through";
        }
    }
    //Deleting button part
    var addExitButton = document.createElement("button");
    addExitButton.innerHTML = "&#9829"; 
    addExitButton.className = "exitButton";
    outShell.appendChild(addExitButton);
    var exit = document.getElementsByClassName("exitButton");
    for(var exitbutton=0;exitbutton<exit.length;exitbutton++){
        exit[exitbutton].onclick = function(){
            var divTarget = this.parentElement;
            divTarget.style.display = "none";
        }
    }
}