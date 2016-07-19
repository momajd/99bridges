json.extract! @bridge, :id, :title, :description, :lat, :lng, :img_url, :spans,
              :condition, :superstructure_type, :substructure_type, :year_built,
              :length, :width, :notes
              
json.author @bridge.user.username
