# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


bridge = Bridge.create([
  {title: "San Francisco Bay Bridge", description: "Suspension bridge spanning San Francisco and Oakland",
    lat: 37.798092, lng: -122.377996, user_id: 1,
    img_url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Oakland_Bay_Bridge_Western_Part.jpg"},

  {title: "Golden Gate Bridge", description: "Suspension bridge and American Landmark",
    lat: 37.819492, lng: -122.478482, user_id: 1,
    img_url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Golden_Gate_Bridge_0002.jpg"},

  {title: "Some random bridge", description: "awesome", lat: 37.781391, lng: -122.397874, user_id: 2},
  {title: "Little guy", description: "needs replacement", lat: 37.787307, lng: -122.395858, user_id: 2}
])

users = User.create([
  {username: "Guest", password: "password"},
  {username: "Mo", password: "password"}
  ])
