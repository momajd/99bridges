class ChangeLongToLngInBridges < ActiveRecord::Migration
  def change
    rename_column :bridges, :long, :lng
  end
end
