//Select our menu element 
const menu = document.getElementById("menu");

//Select menu items and convert to an array, append a mousemove listener to each item
//Use them to update an active index data attribute on the menu element
//Check out the CSS for the styling in have the data attribute is changing for patterna and image
Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
  item.onmouseover = () => {
    menu.dataset.activeIndex = index;
  }
});