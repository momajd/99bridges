# 99Bridges

## [Live Link][heroku]

[heroku]: http://ninetyninebridges.herokuapp.com

99Bridges is a single-page, full-stack application that allows Bridge Engineers, Construction Professionals, and Bridge Enthusiasts to find and track information on bridges. I worked as a structural engineer for several years and I found that most companies don't have an efficient system in place to easily access bridge locations and information. The goal of this application is to make the system more efficient and modern.

The backend was created with Ruby on Rails using PostgreSQL database; React with Flux architecture was used for the frontend. Styling was done with a combination of CSS and React-Bootstrap.

## Features

### Google Maps API for creating and viewing bridges

![Index](/docs/images/index.png)

Once a map is placed on the document, a listener is added to the map which sends a request to the server for all the bridges that are within the map's bounds. Every time the map is panned, the event callback sends another request.

```JS
//index_map.jsx

componentDidMount: function () {
  //...

  // fetch bridges after map location has been changed
  var self = this;
  google.maps.event.addListener(this.map, 'idle', function() {
    var bounds = self.getMapBounds();
    ClientActions.fetchAllBridges(bounds);
  });

  //...
}
```

The biggest challenge of setting up the map functionality was getting the markers to respond to hover events of items in the bridge index. Since the index and the map markers aren't parent/child React components, another event system must be set up in order for them to communicate with each other. This system was setup using `jQuery`.

Ids were defined on the index items and markers that correspond to their respective bridge. In the `createMarkerHoverEffects` function, a `jQuery` object is iterated over and a hover event is set up for the marker that matches the index item's id.

```JS
createMarkerHoverEffects: function() {
  var index = $('.bridge-index-item');

  var self = this;
  for (let i=1; i <= index.length; i++) {
    var indexItem = $(`.bridge-index-item:nth-child(${i})`);
    let bridgeId = indexItem[0].id;

    indexItem.hover(function(){
      self.markers[bridgeId].setAnimation(google.maps.Animation.BOUNCE);
      self.markers[bridgeId].infoWindow.open(self.map, self.markers[bridgeId])
    }, function() {
      self.markers[bridgeId].setAnimation(null);
      self.markers[bridgeId].infoWindow.close();
    });
  }
}
```

### Login/Logout, Frontend Authentication

On the backend in rails, the `BCrypt` library is used to hash passwords (only the `password_digest` for each user is stored in the database).  A `session_token` is created for the user each time they log in so that they can be remembered as the current user.

To avoid fetching the current user on the frontend asychronously and momentarily having a logged-out state when initially rendering, the current user is bootstrapped to the window in the `root` html file so that they are immediately available when the page loads.

```html
<!-- root.html.erb -->
<script type="text/javascript">
  <% if logged_in? %>
    window.currentUser = <%=
      render(
        "api/users/user.json.jbuilder",
        user: current_user
      ).html_safe
      %>
  <% end %>
</script>

<main id='content'></main>
```

### Bridge Page

![Bridge-Show](/docs/images/bridge_show.png)

Bridges can be saved by the user. Saved bridges appear on the user's page.


## Gems and Libraries
- BCrypt
- React
- React-Bootstrap

## Credits
http://www.flaticon.com/authors/freepix

http://glyphicons.com

## Future Features
- [ ] Add events so that users can schedule inspections or other site visits
