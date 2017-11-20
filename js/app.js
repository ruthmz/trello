
var saveTask = document.getElementById('saveTask');
var text = document.getElementById("textadd"); 
var textTwo = document.getElementById("textadd-two")
var listAdd = document.getElementById("listAdd");
var firstadd= document.getElementById("firstadd");
var addCard = document.getElementById("addCard")

window.addEventListener("load", function(event){
  document.getElementById("two").classList.add("hidden");
  document.getElementById("three").classList.add("hidden");  

  saveTask.addEventListener ('click',function(event) {
  var element = document.createElement('div');  
  element.innerHTML = textTwo.innerHTML;
  document.getElementById("container").appendChild(element);
  document.getElementById("saveTask").classList.add("hidden");
})

addCard.addEventListener('click', function(event){
  var element = document.createElement('div');
  element.innerHTML = text.innerHTML;
  document.getElementById("listAdd").appendChild(element);
})

firstadd.addEventListener('click', function(event){
  document.getElementById("one").classList.add("hidden");  
  document.getElementById("two").classList.remove("hidden");  
  document.getElementById("two").classList.add("show");
  document.getElementById("three").classList.remove("hidden");  
  document.getElementById("three").classList.add("show");

})

saveTask.addEventListener('click', function(event){

})

});

