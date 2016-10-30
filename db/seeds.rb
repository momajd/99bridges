# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


bridge = Bridge.create([
  # SF bridges
  {title: "San Francisco Bay Bridge", description: "Suspension bridge spanning San Francisco and Oakland", user_id: 1,
    img_url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Oakland_Bay_Bridge_Western_Part.jpg",
    condition: "Excellent", spans: 10, superstructure_type: "suspension, concrete deck",
    substructure_type: "concrete piers", year_built: 1933, length: 23556, width: 20, notes: "Mo's favorite bridge",
    corner1: {lat: "37.789570990265595", lng: "-122.38790988922119"},
    corner2: {lat: "37.78872312136374", lng: "-122.38692283630371"},
    corner3: {lat: "37.80693055646882", lng: "-122.36709594726562"},
    corner4: {lat: "37.80767649773539", lng: "-122.36846923828125"}
  },
  {title: "Golden Gate Bridge", description: "Suspension bridge and American Landmark", user_id: 1,
    img_url: "http://www.museumofthecity.org/wp-content/uploads/2015/03/foggy-sunrise-at-golden-gate-bridge-wallpapers-hd.jpg",
    condition: "Excellent", spans: 3, superstructure_type: "suspension, concrete deck",
    substructure_type: "concrete piers", year_built: 1937, length: 8981, width: 20, notes: "coolest bridge ever",
    corner1: {lat: "37.81018816644183", lng: "-122.47811794281006"},
    corner2: {lat: "37.810357691730616",lng: "-122.47674465179443"},
    corner3: {lat: "37.82561337381359",lng: "-122.47854709625244"},
    corner4: {lat: "37.82557947579331",lng: "-122.4799633026123"}
  },
  {title: "San Mateo Bridge", description: "spans SF peninsula and Easy Bay", user_id: 2,
    spans: 37, superstructure_type: "orthotropic deck",
    substructure_type: "concrete piers", condition: "Critical", length: 36960, width: 135,
    year_built: 1929, notes: "lots and lots of spans",
    img_url: "https://c2.staticflickr.com/8/7032/6664534909_907f44f406_b.jpg",
    corner1: {lat: "37.593538404695025",lng: "-122.25414276123047"},
    corner2: {lat: "37.58129583707157",lng: "-122.24624633789062"},
    corner3: {lat: "37.62372812792449",lng: "-122.10067749023438"},
    corner4: {lat: "37.638954328253455",lng: "-122.10651397705078"}
  },

  # Philly bridges
  {title: "Walt Whitman Bridge", description: "crosses Delaware River", user_id: 1, spans: 3, superstructure_type: "suspension",
    substructure_type: "concrete", condition: "FUBAR", year_built: 1957, length: 12000,
    width: 92, notes: "Designed by Othmar Ammann",
    img_url: "http://www.americanbridge.net/mips_public/getfile.php?filename=projects//prj1274981285_WWB-Bridge%20Long%20Shot,%20Looking%20NorthWest%20at%20Sunset2.jpg",
    corner1: {lat: "39.90900688061997",lng: "-75.14871597290039"},
    corner2: {lat: "39.90341045114711",lng: "-75.11549949645996"},
    corner3: {lat: "39.902027733441315",lng: "-75.11567115783691"},
    corner4: {lat: "39.90769011481394",lng: "-75.1490592956543"}
  },
  {title: "Ben Franklin Bridge", description: "most famous bridge in philly", superstructure_type: "suspension",
    substructure_type: "concrete", condition: "Fair", year_built: 1926, length: "10000",
    width: 128, spans: 3, notes: "scheduled for maintenance", user_id: 1,
    img_url: "http://img12.deviantart.net/fcd9/i/2009/248/f/b/ben_franklin_bridge_v2_by_nomanor.jpg",
    corner1: {lat: "39.95425788497254",lng: "-75.14004707336426"},
    corner2: {lat: "39.95208664366756",lng: "-75.12691497802734"},
    corner3: {lat: "39.95100099716775",lng: "-75.12721538543701"},
    corner4: {lat: "39.953535430584914",lng: "-75.14034748077393"}
  },
  {title: "18th street over Vine St Expwy", description: "Mo's bridge", user_id: 2,
    spans: 1, condition: "Excellent", year_built: 2016,
    length: 100, width: 40, notes: "currently being constructed",
    superstructure_type: "steel girder, concrete deck", substructure_type: "concrete abutments",
    img_url: "http://philadelphiaencyclopedia.org/wp-content/uploads/2015/09/vinestreet-032.jpg",
    corner1: {lat: "39.95848316506195",lng: "-75.16891300678253"},
    corner2: {lat: "39.95890257554744",lng: "-75.16883790493011"},
    corner3: {lat: "39.958882016269875",lng: "-75.16870379447937"},
    corner4: {lat: "39.95846671753952",lng: "-75.16879498958588"}
  },
  {title: "Market Street over Schuylkill River", description: "concrete arch bridge",
    user_id: 2, spans: 2, condition: "Fair",
    superstructure_type: "concrete-encased steel rib arch", substructure_type: "concrete",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Market_Street_Bridge_%28Philadelphia%29_-_IMG_7252.JPG/1024px-Market_Street_Bridge_%28Philadelphia%29_-_IMG_7252.JPG",
    corner1: {lat: "39.95468368228995",lng: "-75.18105268478394"},
    corner2: {lat: "39.95450686139292",lng: "-75.1796418428421"},
    corner3: {lat: "39.95423546098721",lng: "-75.17969012260437"},
    corner4: {lat: "39.95441228258592",lng: "-75.18117070198059"}
  },

  {
    title: "Chestnut over Schuylkill River",
    description: "Steel girder, variable depth",
    center_lat: 39.9529645580199,
    center_lng: -75.1809185743332,
    img_url: "http://il3.picdn.net/shutterstock/videos/9333434/thumb/1.jpg",
    spans: 2,
    condition: "Good",
    superstructure_type: "steel girder",
    substructure_type: "concrete pier",
    year_built: "1861",
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.95324854134234",
    lng: "-75.18171787261963"
    },
    corner2: {
    lat: "39.9530672832633",
    lng: "-75.17997980117798"
    },
    corner3: {
    lat: "39.95267251037166",
    lng: "-75.18014073371887"
    },
    corner4: {
    lat: "39.952869897102296",
    lng: "-75.18183588981628"
    },
    user_id: 2
  },

  {
    title: "JFK over Schuylkill River",
    description: "Leads to 30th Street Station",
    center_lat: 39.9554660062807,
    center_lng: -75.1798805594444,
    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Phila_JFK_Boulevard_Bridge01.jpg/300px-Phila_JFK_Boulevard_Bridge01.jpg",
    spans: 2,
    condition: "Excellent",
    superstructure_type: "Steel Girder",
    substructure_type: "Concrete Pier",
    year_built: "1920",
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.9556952535168",
    lng: "-75.1805967092514"
    },
    corner2: {
    lat: "39.95550198699961",
    lng: "-75.17906785011292"
    },
    corner3: {
    lat: "39.95524703884362",
    lng: "-75.1791375875473"
    },
    corner4: {
    lat: "39.95541974576281",
    lng: "-75.18072009086609"
    },
    user_id: 1
  },

  {
    title: "Walnut St over Schuylkill",
    description: "Steel girder bridge",
    center_lat: 39.9514874710261,
    center_lng: -75.1816213130951,
    img_url: "http://nakedphilly.com/wp-content/uploads/2011/04/Walnut-St-Bridge-LooB2A4C8-560x350.jpg",
    spans: 4,
    condition: "Excellent",
    superstructure_type: "Steel girder/frame w/ concrete deck",
    substructure_type: "Concrete",
    year_built: "1980",
    length: 1024.56,
    width: nil,
    notes: "pretty cool bridge I guess",
    corner1: {
    lat: "39.95171056317487",
    lng: "-75.18243134021759"
    },
    corner2: {
    lat: "39.95152550999501",
    lng: "-75.18072545528412"
    },
    corner3: {
    lat: "39.951249985444015",
    lng: "-75.1807951927185"
    },
    corner4: {
    lat: "39.95146382549047",
    lng: "-75.18253326416016"
    },
    user_id: 1
  },

  {
    title: "South Street Bridge",
    description: "over Schuylkill River",
    center_lat: 39.9469401417259,
    center_lng: -75.1869307458401,
    img_url: "http://ww1.prweb.com/prfiles/2012/08/28/9845012/CA_Phil_SStrBridge_7-12_20-1600.jpg",
    spans: 3,
    condition: "Excellent",
    superstructure_type: "Steel girder",
    substructure_type: "concrete/masonry",
    year_built: "2010",
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.947491226252026",
    lng: "-75.18750607967377"
    },
    corner2: {
    lat: "39.94652477229379",
    lng: "-75.18614888191223"
    },
    corner3: {
    lat: "39.946368493350086",
    lng: "-75.1863580942154"
    },
    corner4: {
    lat: "39.94737607500752",
    lng: "-75.1877099275589"
    },
    user_id: 1
  },

  {
    title: "I-676 Expwy over Schuylkill",
    description: "aka Schuylkill Distressway",
    center_lat: 39.960013794227,
    center_lng: -75.1799945533276,
    img_url: "http://bridgehunter.com/photos/16/99/169986-L.jpg",
    spans: 4,
    condition: "Good",
    superstructure_type: nil,
    substructure_type: nil,
    year_built: nil,
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.96058019176555",
    lng: "-75.18117070198059"
    },
    corner2: {
    lat: "39.96012789732781",
    lng: "-75.17911076545715"
    },
    corner3: {
    lat: "39.959782506833456",
    lng: "-75.17907857894897"
    },
    corner4: {
    lat: "39.95956458098107",
    lng: "-75.18061816692352"
    },
    user_id: 1
  },

  {
    title: "Walnut St over 24th street",
    description: "approach to Walnut St over Schuylkill",
    center_lat: 39.9512510134068,
    center_lng: -75.1796633005142,
    img_url: "http://philadelphiastreets.com/images/uploads/general/WalnutStreet2.JPG",
    spans: 1,
    condition: "Poor",
    superstructure_type: nil,
    substructure_type: nil,
    year_built: nil,
    length: 100,
    width: 40,
    notes: "lots of corrosion",
    corner1: {
    lat: "39.95122531154947",
    lng: "-75.18029630184174"
    },
    corner2: {
    lat: "39.95143915167307",
    lng: "-75.18026947975159"
    },
    corner3: {
    lat: "39.951254097758905",
    lng: "-75.1790302991867"
    },
    corner4: {
    lat: "39.95108549264568",
    lng: "-75.17905712127686"
    },
    user_id: 2
  },

  {
    title: "21st street over Vine St",
    description: "under construction",
    center_lat: 39.9592777809064,
    center_lng: -75.1738683879375,
    img_url: "http://www.newsworks.org/images/stories/flexicontent/l_vine_street_bridges1200.jpg",
    spans: 1,
    condition: "New",
    superstructure_type: "steel girder",
    substructure_type: "concrete",
    year_built: 2016,
    length: 105,
    width: 60,
    notes: "currently being replaced",
    corner1: {
    lat: "39.959050602163444",
    lng: "-75.1740038394928"
    },
    corner2: {
    lat: "39.95951112736405",
    lng: "-75.17393410205841"
    },
    corner3: {
    lat: "39.95949468008884",
    lng: "-75.17373025417328"
    },
    corner4: {
    lat: "39.95905471400932",
    lng: "-75.1738053560257"
    },
    user_id: 1
  },

  {
    title: "22nd street",
    description: "",
    center_lat: 39.9595460772044,
    center_lng: -75.1754495501518,
    img_url: "",
    spans: nil,
    condition: nil,
    superstructure_type: nil,
    substructure_type: nil,
    year_built: nil,
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.95926852965387",
    lng: "-75.17561852931976"
    },
    corner2: {
    lat: "39.959840072037004",
    lng: "-75.17553806304932"
    },
    corner3: {
    lat: "39.95982773664034",
    lng: "-75.1752644777298"
    },
    corner4: {
    lat: "39.959247970486324",
    lng: "-75.17537713050842"
    },
    user_id: 2
  },

  {
    title: "22nd St over BF Pkwy",
    description: "",
    center_lat: 39.9612606818726,
    center_lng: -75.1751075685024,
    img_url: "",
    spans: nil,
    condition: nil,
    superstructure_type: nil,
    substructure_type: nil,
    year_built: nil,
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.960847455254346",
    lng: "-75.17531275749207"
    },
    corner2: {
    lat: "39.96180137180372",
    lng: "-75.17514646053314"
    },
    corner3: {
    lat: "39.961702691398514",
    lng: "-75.17487823963165"
    },
    corner4: {
    lat: "39.96069120903388",
    lng: "-75.17509281635284"
    },
    user_id: 2
  },

  {
    title: "JFK over 22nd",
    description: "needs replacement",
    center_lat: 39.9550152602883,
    center_lng: -75.1764077693224,
    img_url: "",
    spans: nil,
    condition: nil,
    superstructure_type: "prestressed concrete",
    substructure_type: nil,
    year_built: nil,
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.95495064756739",
    lng: "-75.17680406570435"
    },
    corner2: {
    lat: "39.95517729416614",
    lng: "-75.17677456140518"
    },
    corner3: {
    lat: "39.955076548159134",
    lng: "-75.17600208520889"
    },
    corner4: {
    lat: "39.954856551260605",
    lng: "-75.17605036497116"
    },
    user_id: 1
  },

  {
    title: "JFK over 23",
    description: "single span bridge",
    center_lat: 39.9551606851081,
    center_lng: -75.177646279335,
    img_url: "",
    spans: nil,
    condition: nil,
    superstructure_type: nil,
    substructure_type: nil,
    year_built: nil,
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.955312832007124",
    lng: "-75.17791986465454"
    },
    corner2: {
    lat: "39.95523881469374",
    lng: "-75.17734587192535"
    },
    corner3: {
    lat: "39.954992089737246",
    lng: "-75.17735660076141"
    },
    corner4: {
    lat: "39.955099003994334",
    lng: "-75.17796277999878"
    },
    user_id: 1
  },

  {
    title: "Septa over Schuylkill",
    description: "carries Septa rails",
    center_lat: 39.9561588849368,
    center_lng: -75.179720968008,
    img_url: "http://bridgehunter.com/photos/24/10/241034-M.jpg",
    spans: 2,
    condition: "Poor",
    superstructure_type: "Masonry Arch",
    substructure_type: "concrete/masonry",
    year_built: "1900",
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.956513546122906",
    lng: "-75.18039286136627"
    },
    corner2: {
    lat: "39.956057112761215",
    lng: "-75.17898201942444"
    },
    corner3: {
    lat: "39.955880295415085",
    lng: "-75.17903566360474"
    },
    corner4: {
    lat: "39.95618458544809",
    lng: "-75.18047332763672"
    },
    user_id: 2
  },

  {
    title: "Septa over Market St",
    description: "Septa bridge over Drexel campus",
    center_lat: 39.955048630559,
    center_lng: -75.1851403713226,
    img_url: "http://drexel.edu/~/media/Images/cae/CAEE%20Sitecore%20website%20photos/Drexel%20bridge%2031st%20street.ashx?la=en",
    spans: 1,
    condition: nil,
    superstructure_type: "through-girder",
    substructure_type: "masonry",
    year_built: nil,
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.954815269637564",
    lng: "-75.18533885478973"
    },
    corner2: {
    lat: "39.95530049579379",
    lng: "-75.18519937992096"
    },
    corner3: {
    lat: "39.955259375066596",
    lng: "-75.18494188785553"
    },
    corner4: {
    lat: "39.95481938173812",
    lng: "-75.1850813627243"
    },
    user_id: 1
  },

  {
    title: "Septa over Chestnut St.",
    description: "on Drexel Campus",
    center_lat: 39.9560961768314,
    center_lng: -75.1847675442696,
    img_url: "http://drexel.edu/~/media/Images/cci/Facilities/university-crossings-bridge.ashx?h=358&w=600&hash=25FE0B281E5C81F4B1432E2DB98480F075447F33",
    spans: 1,
    condition: nil,
    superstructure_type: nil,
    substructure_type: nil,
    year_built: nil,
    length: nil,
    width: nil,
    notes: nil,
    corner1: {
    lat: "39.95595431203421",
    lng: "-75.18491506576538"
    },
    corner2: {
    lat: "39.956258601737865",
    lng: "-75.184845328331"
    },
    corner3: {
    lat: "39.956233929650175",
    lng: "-75.18462002277374"
    },
    corner4: {
    lat: "39.955937863903536",
    lng: "-75.18468976020813"
    },
    user_id: 2
  }


  #NYC Bridges
  # {title: "Brooklyn Bridge", description: "National Landmark", lat: 40.7049859197089,
  #   lng: -73.9956557750702, user_id: 2, spans: 3, condition: "Good", year_built: 1883,
  #   length: 5989, width: 85, superstructure_type: "cable-stayed", substructure_type: "masonry",
  #   notes: "very old bridge but in good condition",
  #   img_url: "http://c4.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/pic_giant_052915_SM_Brooklyn-Bridge-DT.jpg?itok=-MTToI9Z"
  # },
  # {title: "Verrazano-Narrows Bridge", description: "double-decked suspension bridge",
  #   lat: 40.609350, lng: -74.035649, user_id: 1, spans: 3, condition: "Good", year_built: 1959,
  #   length: 13700, superstructure_type: "suspension, concrete deck", substructure_type: "concrete/steel",
  #   notes: "next inspection is scheduled for January, 2017",
  #   img_url: "http://www.5dguide.com/wp-content/uploads/2015/11/verrazano-1.jpg"
  # },
  # {title: "Queensboro Bridge", description: "through cantilever truss bridge",
  #   lat: 40.755898, lng: -73.952106, user_id: 1, spans: 5, condition: "Fair",
  #   year_built: 1909, length: 3724, width: 100, superstructure_type: "steel truss",
  #   substructure_type: "concrete/masonry", notes: "woahhh, a cantilever bridge",
  #   img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Queensboro_Bridge_from_Manhattan_side.jpg/1024px-Queensboro_Bridge_from_Manhattan_side.jpg"
  # },
  # {title: "Robert F. Kennedy Bridge", description: "used to be Triborough Bridge",
  #   lat: 40.779641, lng: -73.926742, user_id: 2, spans: 3, condition: "FUBAR",
  #   year_built: 1936, length: 2780, width: 98, superstructure_type: "suspension/truss",
  #   substructure_type: "steel/concrete", notes: "another Ammann bridge",
  #   img_url: "https://www.vincentmounier.com/blog2/wp-content/uploads/vcr15/queens3-01.jpg"
  # },
  # {title: "Manhattan Bridge", description: "suspension bridge over East River",
  #   lat: 40.705299, lng: -73.989405, user_id: 2, spans: 3, condition: "Excellent",
  #   year_built: 1912, length: 6855, width: 120, superstructure_type: "suspension",
  #   substructure_type: "steel piers on concrete footing", notes: "designed by Leon Solomon Moisseiff",
  #   img_url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Manhattan_Bridge_2007.jpg"
  # },
  # {title: "Williamsburg Bridge", description: "connects Lower East Side and Brooklyn",
  #   lat: 40.713108, lng: -73.970919, user_id: 2, spans: 3, condition: "FUBAR",
  #   year_built: "1903", length: 7308, width: 118, superstructure_type: "suspension",
  #   substructure_type: "steel truss piers on concrete footing", notes: "carries rail traffic",
  #   img_url: "http://explorebkv2.wpengine.com/wp-content/uploads/2014/05/williamsburg-bridge-brooklyn-sunset.jpg"
  # },
  # {title: "Bronx-Whitestone Bridge", description: "spans Queens and Bronx",
  #   lat: 40.798126, lng: -73.827317, user_id: 2, spans: 3, condition: "Good",
  #   year_built: 1939, length: 3770, superstructure_type: "suspension",
  #   substructure_type: "steel box piers on concrete footing", notes: "Recently inspected",
  #   img_url: "http://resources.pureagent.net/exitnext/images/whitestone_bridge_by_susannamaryi-d58t2sn.jpg"
  # },
  # {title: "Throgs Neck Bridge", description: "suspension bridge, I-295 over East River",
  #   lat: 40.7954920743962, lng: -73.793363571167, user_id: 2, spans: 3, condition: "Excellent",
  #   year_built: 1961, length: 2910, superstructure_type: "suspension, concrete deck",
  #   substructure_type: "steel piers on concrete footing", notes: "another Ammann bridge",
  #   img_url: "http://4.bp.blogspot.com/-UhFi46DeLlg/Txg-p0ytbII/AAAAAAAAAKo/Mw_eKbWAC3I/s1600/Throgs+Neck+Bridge.jpg"
  # },
  # {title: "Goethals Bridge", description: "cantilever truss", lat: 40.634360,
  #   lng: -74.194186, user_id: 2, condition: "Good", width: 62, length: 7109,
  #   notes: "will be replaced by a cable-stayed bridge",
  #   img_url: "http://image.silive.com/home/silive-media/width620/img/advance/photo/2011/09/10006104-mmmain.jpg"
  # },
  # {title: "Tappan Zee Bridge", description: "cantilever truss", lat: 41.069837,
  #   lng: -73.872392, user_id: 1, condition: "FUBAR", length: 16014, width: 90,
  #   superstructure_type: "truss", substructure_type: "concrete",
  #   notes: "new bridge being constructed",
  #   img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9hmksYKIx-CuoGimKoctihr1KnnMjkTOrNFVmIbDpl6mJ5jZ"
  # },
  # {title: "George Washington Bridge", description: "double-decked suspension bridge over Hudson River",
  #   lat: 40.850189, lng: -73.945219, user_id: 1, condition: "Fair", length: 4760, width: 119,
  #   superstructure_type: "suspension", substructure_type: "steel, concrete footing",
  #   notes: "lower level constructed in 1962",
  #   img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/George_Washington_Bridge_NYC_full_span_from_Hudson.jpg/1280px-George_Washington_Bridge_NYC_full_span_from_Hudson.jpg"
  # },
  # {title: "Grand Central over Cross Island Pkwy", description: "multi-span continuous steel-girder",
  #   lat: 40.7436240993576, lng: -73.7323915958405, user_id: 1, condition: "FUBAR",
  #   superstructure_type: "steel girder", substructure_type: "concrete piers and abutments",
  #   notes: "Structurally Deficient",
  # },
  # {title: "Changebridge Rd over I-80", description: "needs immediate repair",
  #   lat: 40.8614850783333, lng: -74.3432486057281, user_id: 2, condition: "FUBAR",
  #   superstructure_type: "concrete", substructure_type: "concrete pier and abutments",
  #   notes: "How this this still standing?"
  # },
  # {title: "Thomas Edison Bridge", description: "spans Raritan River", lat: 40.509012,
  #   lng: -74.300395, user_id: 1, condition: "Fair", superstructure_type: "steel girder",
  #   substructure_type: "concrete piers and abutments", notes: "upcoming rehabilitiation",
  #   img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Driscoll-vieser-edison_bridges_2002.jpg/300px-Driscoll-vieser-edison_bridges_2002.jpg"
  # },
  # {title: "Outerbridge Crossing", description: "cantilever bridge", lat: 40.525267,
  #   lng: -74.237044, user_id: 1, condition: "Good",
  #   img_url: "https://upload.wikimedia.org/wikipedia/commons/a/a4/DSCN1727_outerbridge_crossing_from_tottenville.jpg"
  # },
  # {title: "I-80 over Hackensack River", description: "continuous steel girder",
  #   lat: 40.8670230064734, lng: -74.0353310108185
  # },
  # {title: "NJ-3 over Hackensack River", description: "severe scour at abutment",
  #   lat: 40.8000048336024, lng: -74.0660691261292
  # },
  # {title: "I-78 over Newark Bay", description: "recently rehabilitated",
  #   lat: 40.6931351701502, lng: -74.1114521026611
  # }
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
