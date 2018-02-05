<?php

/**
 * @file
 * Scenarios hooks implemented by the Material Admin Support module.
 */

/**
 * Implements hook_scenarios_post_enable().
 */
function material_admin_support_scenarios_post_enable($scenario) {
  // After a scenario has been enabled, load the .install file and run
  // the installation again to overwrite any changes that might have occurred.
  module_load_include('install', 'material_admin_support');
  material_admin_support_install();
}
