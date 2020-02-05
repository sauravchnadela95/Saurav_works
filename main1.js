document.querySelector('img').onclick = function() {
    
	if(document.querySelector('img').getAttribute('src') === 'images/developer_image.jpg') {
      document.querySelector('img').setAttribute ('src','images/developer_image3.jpg');
    } 
	else { document.querySelector('img').setAttribute ('src','images/developer_image.jpg');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || myName === null){
    steUserName();
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


document.querySelector('button').onclick=function(){
  setUserName();
}

