# TODO delete
# json.bridge do
#   json.title @bridge.title
#   json.description @bridge.description
#   json.lat @bridge.lat
#   json.lng @bridge.lng
# end

json.extract! @bridge, :id, :title, :description, :lat, :lng
