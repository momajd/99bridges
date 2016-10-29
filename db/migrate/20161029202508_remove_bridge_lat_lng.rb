class RemoveBridgeLatLng < ActiveRecord::Migration
  def change
    remove_column :bridges, :lat1, :float
    remove_column :bridges, :lng1, :float
    remove_column :bridges, :lat2, :float
    remove_column :bridges, :lng2, :float
    remove_column :bridges, :lat3, :float
    remove_column :bridges, :lng3, :float
    remove_column :bridges, :lat4, :float
    remove_column :bridges, :lng4, :float
  end
end
