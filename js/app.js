
var saveTask = document.getElementById('saveTask');
var text = document.getElementById("textadd"); 
var textAdd = document.getElementById("textadd")
var textTwo = document.getElementById("textadd-two")
var listAdd = document.getElementById("listAdd");
var firstadd= document.getElementById("firstadd");
var addCard = document.getElementById("addCard")
var container = document.getElementById("container")
var two = document.getElementById("two")
var one = document.getElementById("one")



window.addEventListener("load", function(event){
  
  document.getElementById("two").classList.add("hidden");
  document.getElementById("three").classList.add("hidden");

saveTask.addEventListener ('click',function(event) {
  document.getElementById("two").classList.remove("show");
  document.getElementById("two").classList.add("hidden");  
  document.getElementById("three").classList.remove("hidden");  
  document.getElementById("three").classList.add("show")
  var element = document.createElement('div');  
  element.innerHTML = textTwo.innerHTML;
  document.getElementById("container").insertBefore(element,textAdd);
  // document.getElementById("saveTask").classList.add("hidden");
  element.classList.add("bold");
  one.classList.add("righttwo");
  document.getElementById("one").classList.remove("hidden");  
  document.getElementById("one").classList.add("show");  

})

addCard.addEventListener('click', function(event){
  var element = document.createElement('div');
  element.innerHTML = text.innerHTML;
  document.getElementById("container").insertBefore(element,textAdd);
  element.classList.add("littlebox");
  textAdd.focus();
  textAdd.innerHTML= "";  
})

firstadd.addEventListener('click', function(event){
  document.getElementById("one").classList.add("hidden");  
  document.getElementById("two").classList.remove("hidden");  
  document.getElementById("two").classList.add("show");
  two.className.add("righttwo")  
})

textTwo.addEventListener('click', function(event){
document.getElementById("textadd-two").innerHTML= "";
})

textAdd.addEventListener('click', function(event){
  textAdd.innerHTML= "";
  })
  


});

