@bridges.each do |bridge|
  json.set! bridge.id do
    json.extract! bridge, :id, :title, :description, :lat, :lng, :img_url
    json.author bridge.user.username
  end
end
