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

require 'test_helper'

class BridgeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
