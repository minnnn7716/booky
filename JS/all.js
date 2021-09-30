$(document).ready(function () {
  // 輪播 banner 秒數
  $('.carousel').carousel({
    interval: 5000
  });

  // tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // 購物車刪除商品的 modal
  $('#removeModal').on('show.bs.modal', function (event) {
    var a = $(event.relatedTarget);
    var title = a.data('title');

    var modal = $(this);
    modal.find('.modal-title').text('刪除 ' + title + ' ？');
  });

});

$(document).scroll(function () {
  var $nav = $(".navbar-fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  $nav.toggleClass('navbar-shadow', $(this).scrollTop() > $nav.height());
  $nav.removeClass('navbar-dark', $(this).scrollTop() > $nav.height());
  $nav.toggleClass('navbar-light', $(this).scrollTop() > $nav.height());
});