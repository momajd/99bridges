class AddImageUrlToBridges < ActiveRecord::Migration
  def change
    add_column :bridges, :img_url, :string
  end
end
