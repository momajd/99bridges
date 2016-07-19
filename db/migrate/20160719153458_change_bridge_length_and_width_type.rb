class ChangeBridgeLengthAndWidthType < ActiveRecord::Migration
  def change
    change_column :bridges, :length, :float
    change_column :bridges, :width, :float
  end
end
