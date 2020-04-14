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

  const menuToggleBtn = $(".navbar__menuToggle");
  const socialToggleBtn = $(".navbar__socialToggle");
  const sideBar = $(".navbar__aside");
  const socialBar = $(".navbar__socialList");

  menuToggleBtn.click(() => {
    sideBar.toggleClass("active");
    menuToggleBtn.toggleClass("active");

    socialBar.removeClass("active");
    socialToggleBtn.removeClass("active");
  });
  socialToggleBtn.click(() => {
    socialBar.toggleClass("active");
    socialToggleBtn.toggleClass("active");

    sideBar.removeClass("active");
    menuToggleBtn.removeClass("active");
  });

  $(document).on("click", (event) => {
    const navbar = $(".navbar").first();
    if (navbar !== event.target && !navbar.has(event.target).length) {
      sideBar.removeClass("active");
      menuToggleBtn.removeClass("active");

      socialBar.removeClass("active");
      socialToggleBtn.removeClass("active");
    }
  });

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() >= 80) {
  //     $("header").css("background", "white");
  //   } else {
  //     $("header").css("background", "transparent");
  //   }
  // });
});
