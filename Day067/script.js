console.log("Hello, World");
      console.log(document.body);
      console.log(document.body.childNodes);
      // console.log(document.body.childNodes[0])
      console.log(document.body.childNodes[1]);
      // console.log(document.body.childNodes[2])
      // console.log(document.body.childNodes[3])
      console.log(document.body.childNodes[1].childNodes);
      let container = document.body.childNodes[1];
      console.log(container.firstChild);
      console.log(container.lastChild);
      console.log(container.firstElementChild);
      console.log(container.lastElementChild);
      container.lastElementChild.style.color = "lavender";
      container.lastElementChild.style.backgroundColor = "teal";
      console.log(container.lastElementChild.parentElement);
      console.log(container.lastElementChild.previousElementSibling);
      console.log(container.lastElementChild.nextElementSibling);
      console.log(document.body.firstChild);
      console.log(document.body.firstElementChild);
      console.log(document.body.firstElementChild.childNodes);
      console.log(document.body.firstElementChild.children);
      console.log(document.body.firstElementChild.children[3]);
      console.log(document.body.firstElementChild.children[3].nextElementSibling);
      console.log(document.body.firstElementChild.children[3].previousElementSibling);
      console.log(document.body.firstElementChild.children[3].previousSibling);
      console.log(document.body.children)  
      console.log(document.body.children[1])  
      console.log(document.body.children[1].rows)