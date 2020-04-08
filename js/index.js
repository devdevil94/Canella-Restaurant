$(document).ready(function () {
  const menuItemTemplate = $("template#itemBox__template")[0];

  menus.forEach((menu) => {
    const menuTabContent = $(`#tab-content-${menu.name} > .menuBox`);

    menu.items.forEach((item) => {
      const itemBox = menuItemTemplate.content.querySelector(".itemBox");

      const itemImg = itemBox.querySelector(".itemBox__img");
      itemImg.src = `images/${item.imgUrl}.jpg`;
      itemImg.alt = item.name;

      const itemName = itemBox.querySelector(".itemBox__name");
      $(itemName).text(item.name);

      const itemPrice = itemBox.querySelector(".itemBox__price");
      $(itemPrice).text("$" + item.price);

      const itemDescription = itemBox.querySelector(".itemBox__description");
      $(itemDescription).text(item.description);

      const node = document.importNode(itemBox, true);
      menuTabContent.append($(node));
    });
  });

  $(".navbar__menuToggle").click(() => {
    $(".navbar__aside").toggleClass("active");
    $(".navbar__menuToggle").toggleClass("active");
  });

  $(document).on("click", (event) => {
    const navbar = $(".navbar").first();
    if (navbar !== event.target && !navbar.has(event.target).length) {
      $(".navbar__aside").removeClass("active");
      $(".navbar__menuToggle").removeClass("active");
    }
  });
});
