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
    substructure_type: "reinforced concrete"
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
    superstructure_type: "steel girder, concrete deck", substructure_type: "concrete abutments",
    img_url: "http://philadelphiaencyclopedia.org/wp-content/uploads/2015/09/vinestreet-032.jpg"
  },
  {title: "Market Street over Schuylkill River", description: "concrete arch bridge",
    lat: 39.954459, lng: -75.180459, user_id: 2, spans: 2, condition: "Fair",
    superstructure_type: "concrete-encased steel rib arch", substructure_type: "concrete",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Market_Street_Bridge_%28Philadelphia%29_-_IMG_7252.JPG/1024px-Market_Street_Bridge_%28Philadelphia%29_-_IMG_7252.JPG"
  },

  #NYC Bridges
  {title: "Brooklyn Bridge", description: "National Landmark", lat: 40.7049859197089,
    lng: -73.9956557750702, user_id: 2, spans: 3, condition: "Good", year_built: 1883,
    length: 5989, width: 85, superstructure_type: "cable-stayed", substructure_type: "masonry",
    notes: "very old bridge but in good condition",
    img_url: "http://c4.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/pic_giant_052915_SM_Brooklyn-Bridge-DT.jpg?itok=-MTToI9Z"
  },
  {title: "Verrazano-Narrows Bridge", description: "double-decked suspension bridge",
    lat: 40.609350, lng: -74.035649, user_id: 1, spans: 3, condition: "Good", year_built: 1959,
    length: 13700, superstructure_type: "suspension, concrete deck", substructure_type: "concrete/steel",
    notes: "next inspection is scheduled for January, 2017",
    img_url: "http://www.5dguide.com/wp-content/uploads/2015/11/verrazano-1.jpg"
  },
  {title: "Queensboro Bridge", description: "through cantilever truss bridge",
    lat: 40.755898, lng: -73.952106, user_id: 1, spans: 5, condition: "Fair",
    year_built: 1909, length: 3724, width: 100, superstructure_type: "steel truss",
    substructure_type: "concrete/masonry", notes: "woahhh, a cantilever bridge",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Queensboro_Bridge_from_Manhattan_side.jpg/1024px-Queensboro_Bridge_from_Manhattan_side.jpg"
  },
  {title: "Robert F. Kennedy Bridge", description: "used to be Triborough Bridge",
    lat: 40.779641, lng: -73.926742, user_id: 2, spans: 3, condition: "FUBAR",
    year_built: 1936, length: 2780, width: 98, superstructure_type: "suspension/truss",
    substructure_type: "steel/concrete", notes: "another Ammann bridge",
    img_url: "https://www.vincentmounier.com/blog2/wp-content/uploads/vcr15/queens3-01.jpg"
  },
  {title: "Manhattan Bridge", description: "suspension bridge over East River",
    lat: 40.705299, lng: -73.989405, user_id: 2, spans: 3, condition: "Excellent",
    year_built: 1912, length: 6855, width: 120, superstructure_type: "suspension",
    substructure_type: "steel piers on concrete footing", notes: "designed by Leon Solomon Moisseiff",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Manhattan_Bridge_2007.jpg"
  },
  {title: "Williamsburg Bridge", description: "connects Lower East Side and Brooklyn",
    lat: 40.713108, lng: -73.970919, user_id: 2, spans: 3, condition: "FUBAR",
    year_built: "1903", length: 7308, width: 118, superstructure_type: "suspension",
    substructure_type: "steel truss piers on concrete footing", notes: "carries rail traffic",
    img_url: "http://explorebkv2.wpengine.com/wp-content/uploads/2014/05/williamsburg-bridge-brooklyn-sunset.jpg"
  },
  {title: "Bronx-Whitestone Bridge", description: "spans Queens and Bronx",
    lat: 40.798126, lng: -73.827317, user_id: 2, spans: 3, condition: "Good",
    year_built: 1939, length: 3770, superstructure_type: "suspension",
    substructure_type: "steel box piers on concrete footing", notes: "Recently inspected",
    img_url: "http://resources.pureagent.net/exitnext/images/whitestone_bridge_by_susannamaryi-d58t2sn.jpg"
  },
  {title: "Throgs Neck Bridge", description: "suspension bridge, I-295 over East River",
    lat: 40.7954920743962, lng: -73.793363571167, user_id: 2, spans: 3, condition: "Excellent",
    year_built: 1961, length: 2910, superstructure_type: "suspension, concrete deck",
    substructure_type: "steel piers on concrete footing", notes: "another Ammann bridge",
    img_url: "http://4.bp.blogspot.com/-UhFi46DeLlg/Txg-p0ytbII/AAAAAAAAAKo/Mw_eKbWAC3I/s1600/Throgs+Neck+Bridge.jpg"
  },
  {title: "Goethals Bridge", description: "cantilever truss", lat: 40.634360,
    lng: -74.194186, user_id: 2, condition: "Good", width: 62, length: 7109,
    notes: "will be replaced by a cable-stayed bridge",
    img_url: "http://image.silive.com/home/silive-media/width620/img/advance/photo/2011/09/10006104-mmmain.jpg"
  },
  {title: "Tappan Zee Bridge", description: "cantilever truss", lat: 41.069837,
    lng: -73.872392, user_id: 1, condition: "FUBAR", length: 16014, width: 90,
    superstructure_type: "truss", substructure_type: "concrete",
    notes: "new bridge being constructed",
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9hmksYKIx-CuoGimKoctihr1KnnMjkTOrNFVmIbDpl6mJ5jZ"
  },
  {title: "George Washington Bridge", description: "double-decked suspension bridge over Hudson River",
    lat: 40.850189, lng: -73.945219, user_id: 1, condition: "Fair", length: 4760, width: 119,
    superstructure_type: "suspension", substructure_type: "steel, concrete footing",
    notes: "lower level constructed in 1962",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/George_Washington_Bridge_NYC_full_span_from_Hudson.jpg/1280px-George_Washington_Bridge_NYC_full_span_from_Hudson.jpg"
  },
  {title: "Grand Central over Cross Island Pkwy", description: "multi-span continuous steel-girder",
    lat: 40.7436240993576, lng: -73.7323915958405, user_id: 1, condition: "FUBAR",
    superstructure_type: "steel girder", substructure_type: "concrete piers and abutments",
    notes: "Structurally Deficient",
  },
  {title: "Changebridge Rd over I-80", description: "needs immediate repair",
    lat: 40.8614850783333, lng: -74.3432486057281, user_id: 2, condition: "FUBAR",
    superstructure_type: "concrete", substructure_type: "concrete pier and abutments",
    notes: "How this this still standing?"
  },
  {title: "Thomas Edison Bridge", description: "spans Raritan River", lat: 40.509012,
    lng: -74.300395, user_id: 1, condition: "Fair", superstructure_type: "steel girder",
    substructure_type: "concrete piers and abutments", notes: "upcoming rehabilitiation",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Driscoll-vieser-edison_bridges_2002.jpg/300px-Driscoll-vieser-edison_bridges_2002.jpg"
  },
  {title: "Outerbridge Crossing", description: "cantilever bridge", lat: 40.525267,
    lng: -74.237044, user_id: 1, condition: "Good",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/a/a4/DSCN1727_outerbridge_crossing_from_tottenville.jpg"
  },
  {title: "I-80 over Hackensack River", description: "continuous steel girder",
    lat: 40.8670230064734, lng: -74.0353310108185
  },
  {title: "NJ-3 over Hackensack River", description: "severe scour at abutment",
    lat: 40.8000048336024, lng: -74.0660691261292
  },
  {title: "I-78 over Newark Bay", description: "recently rehabilitated",
    lat: 40.6931351701502, lng: -74.1114521026611
  }
])

users = User.create([
  {username: "Guest", password: "password"},
  {username: "Mo_Majd", password: "password"}
  ])

# randomly take a third of the bridges and use them for favorites
saved_bridge_indeces = (1..bridge.length).to_a.shuffle.take(bridge.length/3)

saved_bridge_indeces.each do |bridge_idx|
  Favorite.create(user_id: 1, bridge_id: bridge_idx)
end
