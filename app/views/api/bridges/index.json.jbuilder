@bridges.each do |bridge|
  json.set! bridge.id do
    json.extract! bridge, :id, :title, :description, :center_lat, :center_lng,
          :img_url, :corner1, :corner2, :corner3, :corner4

    json.author bridge.user.username

    json.favorites bridge.favorites do |favorite|
      json.user_id favorite.user_id
      json.bridge_id favorite.bridge_id
    end
  end
end
