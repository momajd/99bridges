@bridges.each do |bridge|
  json.set! bridge.id do
    json.extract! bridge, :id, :title, :description, :lat, :lng
  end
end
