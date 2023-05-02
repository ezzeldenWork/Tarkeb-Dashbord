$(document).ready(function () {
  if ($("html").attr("dir") == "rtl") {
    var table_lang =
      "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json";
  } else {
    var table_lang =
      "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json";
  }


  //  side menu

  $(document).click(function (e) {
    $(".nav-section .profile-box .user-menu-box").hide();
  });

  $(".side-section .list-box ul .have-child > a").click(function (e) {
    e.preventDefault();
    $(this).siblings(".child-list").slideToggle();
    $(this).toggleClass("open-box");
    $(this)
      .parents(".have-child")
      .siblings(".have-child")
      .children(".child-list")
      .slideUp();
    $(this)
      .parents(".have-child")
      .siblings(".have-child")
      .children(".open-box")
      .removeClass("open-box");
  });

  // profile menu

  $(".nav-section .profile-box .user-box").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".nav-section .profile-box .user-menu-box").show();
  });

  //  side menu open
  $(".nav-section #aside-menu").click(function (e) {
    $(".aside-box").toggleClass("scale-aside");
    $("body").toggleClass("pad-0");
    $(this).toggleClass("checked");
    if ($(window).width() < 992) {
      $(".side-section").toggleClass("open-aside");
      $(".overlay").show();
    } else {
      $(".side-section").toggleClass("scal-box");
    }
  });
  $(".overlay").click(function (e) {
    $(".side-section").removeClass("open-aside");
    $(this).hide();
  });

  // select2
  $(".select-two").select2();
  // dropify
  $(".dropify").dropify();
  // DataTable
  $(".myTable").DataTable({
    language: {
      url: table_lang,
    },
    scrollX: true,
  });

















  $(".chat-content").scrollTop($(".end-div").offset().top);
});
