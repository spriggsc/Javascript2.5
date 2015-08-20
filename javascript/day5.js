// Create a function that will, when called, prompt the user for what 
//they would like a reminder "to do".
// Store the "to do" item in an array of "to do" items.
// Employ edge casing tequniques to make sure the user has input something.
// If the user has not input anything, alert them that they need to input a 
//valid "to do" item and terminate the program or call the function again
// If the user has input a valid "to do" item, log or alert the user of 
//their "to do" item.



function addNewItem(list, itemText){
    var listItem = document.createElement("li");
    listItem.innerText = itemText;

    list.appendChild(listItem);

}


var btnNew = document.getElementById("btnADD");
btnNew.onclick = function(){
    var itemText = prompt("Add Items");

    if(!itemText || itemText === ""){
        return false;
    }
    addNewItem(document.getElementById("toDo"));
};
listItem.push();
alert(listItem);