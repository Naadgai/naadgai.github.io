$(function () {
    $('.mobile-menu_button_container').on("click", function () {
      $(this).find('.mobile-menu_button').toggleClass("opened");
        $('.mobile-menu_container').toggleClass("showed");
    });
});