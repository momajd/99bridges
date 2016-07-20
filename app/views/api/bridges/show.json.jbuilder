json.extract! @bridge, :id, :title, :description, :lat, :lng, :img_url, :spans,
              :condition, :superstructure_type, :substructure_type, :year_built,
              :length, :width, :notes

json.author @bridge.user.username

json.favorites @bridge.favorites do |favorite|
  json.user_id favorite.user_id
  json.bridge_id favorite.bridge_id
end
