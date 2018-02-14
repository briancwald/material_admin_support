<?php

namespace Drupal\material_Admin_support\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Drupal\Core\Routing\RoutingEvents;
use Symfony\Component\Routing\RouteCollection;

/**
 * Modifies entity browser routes to use the admin theme.
 */
class RouteSubscriber extends RouteSubscriberBase {

  /**
   * Routes which shouldn't be themed with the admin theme.
   *
   * @var array
   */
  protected $content_browser_routes = [
    'entity_browser.browse_content',
    'entity_browser.browse_content_iframe',
  ];

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    foreach ($this->content_browser_routes as $content_browser_route) {
      if ($route = $collection->get($content_browser_route)) {
        $route->setOption('_admin_route', TRUE);
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $events = parent::getSubscribedEvents();
    $events[RoutingEvents::ALTER] = ['onAlterRoutes', -1];
    return $events;
  }

}
