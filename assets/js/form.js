// elements of the index.html file
const userName = document.querySelector('#inputUname');
const blogTitle = document.querySelector('#inputBtitle');
const blogContent = document.querySelector('#inputBcontent');
const submitButton = document.querySelector('#formSubmit');
const errorMaessageH = document.querySelector('#errorMessage');

// declaring an array of objects for the entries of the blog
let ArrayofBlogs = [
    { name:String,
      title:String,
      content:String
    }
];

// declaring an array to receive the inputs of the form
 let oneblogArray = [
    { name:String,
      title:String,
      content:String
    }
];

// loading the array of blogs from local storage "theBlogs"
function initProcess() {   
  // load if the localstorage is not empty
  // if (localStorage.length == 0) {
  if (localStorage.getItem("theBlogs") == null) {
      // console.log('localstorage empty');
      // nothing to do 
    } else {
  ArrayofBlogs = JSON.parse(localStorage.getItem('theBlogs'));
    }
};

function renderblogs() {      
  // pass values of the input to the input Array
  // console.log("Hola mundo");
  oneblogArray = {
    "name": String(userName.value),
    "title": String(blogTitle.value),
    "content": String(blogContent.value)
  };
  // adding a row to the array of objets 
  ArrayofBlogs.push(oneblogArray);
  // push to the local storage
  localStorage.setItem('theBlogs',JSON.stringify(ArrayofBlogs));
  //  call to the list blogs page
  window.location.href = "./blog.html";
};

// function for the submit bottom click
submitButton.addEventListener('click', function (event) {
  // stop the submit default action  
  event.preventDefault();
  // valid no nulls in the Form
  if ((String(userName.value) === '') ||
      (String(blogTitle.value) === '') ||
      (String(blogContent.value) === '')) {
      // show message incomplete form
      errorMaessageH.textContent = "Inclomplete form, please review";
  }
  else {
      // call function to render the blogs
      renderblogs();
  };
});      

// call the init function
initProcess();