/**
 * @file
 * Fix modal dialog's size.
 */

(function($, Drupal, window) {
  "use strict";

  Drupal.behaviors.materialAdminSupportModalSizeFix = {
    attach: function() {
      $(document).ready(function () {
        $(window).once('materialAdminSupportModalSizeFix').on('dialog:aftercreate', function () {
          $(window).trigger('resize');
        });
      });
    }
  };
})(jQuery, Drupal, window);
