class ChangeBridgeCornerType < ActiveRecord::Migration
  def change
    change_column :bridges, :corner1, :text
    change_column :bridges, :corner2, :text
    change_column :bridges, :corner3, :text
    change_column :bridges, :corner4, :text
  end
end
