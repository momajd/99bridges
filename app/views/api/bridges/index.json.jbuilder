json.array! @bridges do |bridge|
  puts @bridges
  json.title bridge.title
  json.description bridge.description
  json.lat bridge.lat
  json.long bridge.long
end
