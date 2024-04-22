// elements of the blogs.html file
const bloglistul = document.querySelector('#blogList')
const submitBackButton = document.querySelector('#backButton');
const submitModeButton = document.querySelector('#modeButton');
const sectionMode = document.querySelector('#sectionClass');

// declaring an array of objects for the entries of the blog
let ArrayofBlogs = [
  { name:String,
    title:String,
    content:String
  }
];

function loadBlogs() {
  // load the array wfrom localStorage
  ArrayofBlogs = JSON.parse(localStorage.getItem('theBlogs'));

  // a loop for the length of the array of blogs to append elements
  for (let index = 1; index < ArrayofBlogs.length; index++) {
    const liElement = document.createElement('li');
    const ptitle = document.createElement('p');
    const pcontent = document.createElement('p');
    const pname = document.createElement('p');

    // getting the values
    ptitle.textContent = ArrayofBlogs[index].title;
    pcontent.textContent = ArrayofBlogs[index].content;
    pname.textContent = ArrayofBlogs[index].name;

    // adding values and append the li element
    liElement.appendChild(ptitle);
    liElement.appendChild(pcontent);
    liElement.appendChild(pname);
    bloglistul.appendChild(liElement);
  }
} 

// back button action
submitBackButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "index.html";
})

// change mode button action
submitModeButton.addEventListener('click', function (event) {
  event.preventDefault();
  if (sectionMode.attributes.class.value == 'darkMode') {
      sectionMode.setAttribute("class","lightMode")
  }
    else {
      sectionMode.setAttribute("class","darkMode")
    }
})

// call the init function
loadBlogs();
