class RenameBridgeLatLng < ActiveRecord::Migration
  def change
    rename_column :bridges, :lat, :center_lat
    rename_column :bridges, :lng, :center_lng
  end
end
