/**
 * @file
 * Adds a helper class to visually select entities.
 *
 * Should be functional for any view with a checkbox field.
 *
 */

(function ($, Drupal) {

  Drupal.behaviors.materialAdminSupportBrowsers = {
    attach: function (context, settings) {
      $('.views-row').once('bind-click-event').each(function () {
        var input = $(this).find('input[type="checkbox"]');
        if (input.prop('checked')) {
          $(this).addClass('checked');
        }

        $(this).click(function (e) {
          e.preventDefault();
          input.prop('checked', !input.prop('checked'));
          if (input.prop('checked')) {
            $(this).addClass('checked');
          }
          else {
            $(this).removeClass('checked');
          }
        });
      });
    }
  }

})(jQuery, Drupal);
