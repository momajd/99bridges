# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


bridge = Bridge.create([
  {title: "San Francisco Bay Bridge", description: "cool", lat: 37.798092, lng: -122.377996},
  {title: "Golden Gate Bridge", description: "ok", lat: 37.819492, lng: -122.478482},
  {title: "Some random bridge", description: "wtf", lat: 37.781391, lng: -122.397874},
  {title: "Little guy", description: "roflmfao", lat: 37.787307, lng: -122.395858}
])
