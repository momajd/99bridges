@bridges.each do |bridge|
  json.set! bridge.id do
    json.extract! bridge, :id, :title, :description, :lat, :lng, :img_url
    json.author bridge.user.username

    json.favorites bridge.favorites do |favorite|
      json.user_id favorite.user_id
      json.bridge_id favorite.bridge_id
    end
  end
end
