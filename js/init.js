$(document).ready(function () {

  /* About product - property points */
  $('.about-product__property-point').on('click', function (event) {
    var property = $(this).closest('.about-product__property');

    if (property.hasClass('active')) {
      property.removeClass('active');

    } else {
      property.closest('.about-product__model').find('.about-product__property').removeClass('active');
      property.addClass('active');
    }
  });

});
