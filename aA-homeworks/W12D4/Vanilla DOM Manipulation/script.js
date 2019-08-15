document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

 const handleFavoriteSubmit = (e) => {
  e.preventDefault();

   const favoriteInput = document.querySelector(".favorite-input");
   const favoriteValue = favoriteInput.value;
   favoriteInput.value = "";

   const newLi = document.createElement("li");
   newLi.textContent =favoriteValue;

   const favoriteList = document.getElementById("restaurants");
   favoriteList.append(newLi);
 };


  const listSubmitButt = document.querySelector(".favorite-submit");
  listSubmitButt.addEventListener("click", handleFavoriteSubmit);

  // adding new photos

  const showPhotoForm = (e) => {
    const photoFormDiv = document.querySelector(".photo-form-container");
    if (photoFormDiv.className === "photo-form-container") {
      photoFormDiv.className = "photo-form-container hidden";
    } else {
      photoFormDiv.className = "photo-form-container";
    }
  };

  const photoFormShowButt = document.querySelector(".photo-show-button");
  photoFormShowButt.addEventListener("click", showPhotoForm);

  const handlePhotoSubmit = (e) => {
    e.preventDefault();

    const photoUrlInput = document.querySelector(".photo-url-input");
    const photoUrl = photoUrlInput.value;
    photoUrlInput.value = "";

    const newImg = document.createElement("img");
    newImg.src = photoUrl;

    const newLi = document.createElement("li");
    newLi.append(newImg);

    const dogPhotosList = document.querySelector(".dog-photos");
    dogPhotosList.append(newLi);
  };

  const photoSubmitButt = document.querySelector(".photo-url-submit");
  photoSubmitButt.addEventListener("click", handlePhotoSubmit);
});
