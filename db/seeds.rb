# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


bridge = Bridge.create([
  # SF bridges
  {title: "San Francisco Bay Bridge", description: "Suspension bridge spanning San Francisco and Oakland",
    lat: 37.798092, lng: -122.377996, user_id: 1,
    img_url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Oakland_Bay_Bridge_Western_Part.jpg",
    condition: "Excellent", spans: 10, superstructure_type: "suspension, concrete deck",
    substructure_type: "concrete piers", year_built: 1933, length: 23556, width: 20, notes: "Mo's favorite bridge"
  },
  {title: "Golden Gate Bridge", description: "Suspension bridge and American Landmark",
    lat: 37.819492, lng: -122.478482, user_id: 1,
    img_url: "http://www.museumofthecity.org/wp-content/uploads/2015/03/foggy-sunrise-at-golden-gate-bridge-wallpapers-hd.jpg",
    condition: "Excellent", spans: 3, superstructure_type: "suspension, concrete deck",
    substructure_type: "concrete piers", year_built: 1937, length: 8981, width: 20, notes: "coolest bridge ever"
  },
  {title: "I-80 over 3rd Street", description: "near Bay Bridge",
    lat: 37.781391, lng: -122.397874, user_id: 2, condition: "Fair", superstructure_type: "prestressed concrete",
    substructure_type: "reinforced concrete"}
  },
  {title: "I-80 ramp", description: "needs replacement", lat: 37.787307, lng: -122.395858, user_id: 2,
    condition: "FUBAR", notes: "recently inspected"
  },
  {title: "Geneva Ave over I-280", description: "near Balboa Park", lat: 37.721306575281,
    lng: -122.448109388351, user_id: 2, spans: 2, superstructure_type: "steel I-beams",
    substructure_type: "concrete piers and abutments", condition: "Fair", width: 20,
    notes: "not very pretty.."
  },
  {title: "San Mateo Bridge", description: "spans SF peninsula and Easy Bay", lat: 37.6023365063622,
    lng: -122.203502655029, user_id: 2, spans: 37, superstructure_type: "orthotropic deck",
    substructure_type: "concrete piers", condition: "Critical", length: 36960, width: 135,
    year_built: 1929, notes: "lots and lots of spans",
    img_url: "https://c2.staticflickr.com/8/7032/6664534909_907f44f406_b.jpg"
  },
  {title: "Dumbarton Bridge", description: "shortest bridge across SF Bay", lat: 37.5070066410141,
    lng: -122.116899490356, user_id: 1, spans: 20, superstructure_type: "concrete girder",
    substructure_type: "concrete piers", condition: "Critical", length: 8600,
    notes: "Needs inspection",
    img_url: "http://www.chbullco.com/images/dumbarton_bridge/dumbarton_bridge.jpg"
  },
  {title: "Bayshore Freeway", description: "probably not a bridge", lat: 37.6852648031699,
    lng: -122.389669418335, user_id: 2, spans: 0, superstructure_type: "just a road",
    substructure_type: "soil", condition: "Ehh", notes: "this isn't even a bridge, man",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Bayshore_Freeway_at_Hillsdale_Boulevard.jpg"
  },

  # Philly bridges
  {title: "Walt Whitman Bridge", description: "crosses Delaware River", lat: 39.9050786258815,
    lng: -75.1292967796326, user_id: 1, spans: 3, superstructure_type: "suspension",
    substructure_type: "concrete", condition: "FUBAR", year_built: 1957, length: 12000,
    width: 92, notes: "Designed by Othmar Ammann",
    img_url: "http://www.americanbridge.net/mips_public/getfile.php?filename=projects//prj1274981285_WWB-Bridge%20Long%20Shot,%20Looking%20NorthWest%20at%20Sunset2.jpg"
  },
  {title: "Ben Franklin Bridge", description: "most famous bridge in philly",
    lat: 39.952714789218, lng: -75.1334381103516, superstructure_type: "suspension",
    substructure_type: "concrete", condition: "Fair", year_built: 1926, length: "10000",
    width: 128, spans: 3, notes: "scheduled for maintenance", user_id: 1,
    img_url: "http://img12.deviantart.net/fcd9/i/2009/248/f/b/ben_franklin_bridge_v2_by_nomanor.jpg"
  },
  {title: "18th street over Vine St Expwy", description: "Mo's bridge", lat: 39.9585946354711,
    lng: -75.1688352227211, user_id: 2, spans: 1, condition: "Excellent", year_built: 2016,
    length: 100, width: 40, notes: "currently being constructed",
    img_url: "http://philadelphiaencyclopedia.org/wp-content/uploads/2015/09/vinestreet-032.jpg"
  },
  #NYC Bridges
  {title: "Brooklyn Bridge", description: "National Landmark", lat: 40.7049859197089,
    lng: -73.9956557750702, user_id: 2, spans: 3, condition: "Good", year_built: 1883,
    length: 5989, width: 85, superstructure_type: "cable-stayed", substructure_type: "masonry",
    notes: "very old bridge but in good condition",
    img_url: "http://c4.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/pic_giant_052915_SM_Brooklyn-Bridge-DT.jpg?itok=-MTToI9Z"
  },
  

])

users = User.create([
  {username: "Guest", password: "password"},
  {username: "Mo_Majd", password: "password"}
  ])
