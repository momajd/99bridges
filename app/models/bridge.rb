# == Schema Information
#
# Table name: bridges
#
#  id                  :integer          not null, primary key
#  title               :string           not null
#  description         :string
#  center_lat          :float            not null
#  center_lng          :float            not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  img_url             :string
#  user_id             :integer
#  condition           :string
#  spans               :integer
#  superstructure_type :string
#  substructure_type   :string
#  year_built          :integer
#  length              :float
#  width               :float
#  notes               :string
#  corner1             :text
#  corner2             :text
#  corner3             :text
#  corner4             :text
#

class Bridge < ActiveRecord::Base

  validates :title, :center_lat, :center_lng, :user_id, presence: true
  validates :title, length: {minimum: 6}
  serialize :corner1, Hash
  serialize :corner2, Hash
  serialize :corner3, Hash
  serialize :corner4, Hash

  after_initialize :calculate_center

  belongs_to :user
  has_many :favorites, dependent: :destroy

  def self.in_bounds(bounds)
   # google map bounds will be in the following format:
   # {
   #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
   #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
   # }

    north_east = bounds["northEast"]
    south_west = bounds["southWest"]

    Bridge.where(
      "(center_lat BETWEEN ? AND ?) AND (center_lng BETWEEN ? AND ?)",
      south_west["lat"], north_east["lat"], south_west["lng"], north_east["lng"]
    )
  end

  private
  def calculate_center
    self.center_lat ||= [self.corner1[:lat], self.corner2[:lat],
    self.corner3[:lat], self.corner4[:lat] ].map(&:to_f).inject(&:+) / 4

    self.center_lng ||= [self.corner1[:lng], self.corner2[:lng],
    self.corner3[:lng], self.corner4[:lng] ].map(&:to_f).inject(&:+) / 4
  end
end
