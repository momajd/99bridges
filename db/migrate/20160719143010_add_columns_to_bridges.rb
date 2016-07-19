class AddColumnsToBridges < ActiveRecord::Migration
  def change
    add_column :bridges, :condition, :string
    add_column :bridges, :spans, :integer
    add_column :bridges, :superstructure_type, :string
    add_column :bridges, :substructure_type, :string
    add_column :bridges, :year_built, :integer
    add_column :bridges, :length, :decimal
    add_column :bridges, :width, :decimal
    add_column :bridges, :notes, :string
  end
end
