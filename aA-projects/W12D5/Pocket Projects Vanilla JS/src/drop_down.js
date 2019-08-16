
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = function dogLinkCreator() {
  const dogList = document.querySelector(".drop-down-dog-list");

  Object.keys(dogs).forEach((dogName) => {
    let a = document.createElement("a");
    a.innerHTML = dogName;
    a.href = dogs[dogName];
    let li = document.createElement("li");
    li.className = "dog-link";
    li.append(a);
    dogList.append(li);
  });
};

const handleEnter = function() {
  let list = document.querySelector(".drop-down-dog-list");
  list.style.display = null;
};


const handleLeave = function () {
  let list = document.querySelector(".drop-down-dog-list");
  list.style.display = "none";
};


const nav = document.querySelector(".drop-down-dog-nav");
nav.addEventListener("mouseenter", handleEnter);
nav.addEventListener("mouseleave", handleLeave);
dogLinkCreator();



