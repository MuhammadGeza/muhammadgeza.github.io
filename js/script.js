// Load More
$('.single_post').slice(0, 3).show();
$('.load').on('click', function () {
  $('.single_post:hidden').slice(0, 3).slideDown('slow');
  if ($('.single_post:hidden').length == 0) {
    $('.load').fadeOut('');
  }
});
//  End Load More

// Scroll Back To Top Button With Progress Indicator
// Inspired by https://github.com/blank-yt/Awesome-Scroll-Back-To-Top-Button-With-Progress-Indicator
$(document).ready(function () {
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();

  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };

  updateProgress();
  $(window).scroll(updateProgress);

  var offset = 50;
  var duration = 50;

  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });

  jQuery('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  });
});
// End Scroll Back To Top Button With Progress Indicator
