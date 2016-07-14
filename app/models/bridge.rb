# == Schema Information
#
# Table name: bridges
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  lat         :float            not null
#  long        :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bridge < ActiveRecord::Base

  validates :title, :lat, :lng, presence: true
  validates :title, length: {minimum: 6}
  validates :lat, :lng, numericality: true

  def self.in_bounds(bounds)
   # google map bounds will be in the following format:
   # {
   #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
   #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
   # }

    north_east = bounds["northEast"]
    south_west = bounds["southWest"]

    Bridge.where(
      "(lat BETWEEN ? AND ?) AND (lng BETWEEN ? AND ?)",
      south_west["lat"], north_east["lat"], south_west["lng"], north_east["lng"]
    )
  end

end
