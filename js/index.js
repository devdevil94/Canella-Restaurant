$(document).ready(function () {
  const menuItemTemplate = $("template#itemBox__template")[0];

  menus.forEach((menu) => {
    const menuTabContent = $(`#tab-content-${menu.name}`);
    console.log(menuTabContent);
    menu.items.forEach((item) => {
      const itemBox = menuItemTemplate.content.querySelector(".itemBox");

      const img = itemBox.querySelector(".itemBox__img");
      img.src = `images/${item.imgUrl}.jpg`;
      img.alt = item.name;

      const node = document.importNode(itemBox, true);
      menuTabContent.append($(node));
    });
  });
});
