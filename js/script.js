// Load More
$('.single_post').slice(0, 3).show();
$('.load').on('click', function () {
  $('.single_post:hidden').slice(0, 3).slideDown('slow');
  if ($('.single_post:hidden').length == 0) {
    $('.load').fadeOut('');
  }
});
//  End Load More
