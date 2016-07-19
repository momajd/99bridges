# == Schema Information
#
# Table name: bridges
#
#  id                  :integer          not null, primary key
#  title               :string           not null
#  description         :string
#  lat                 :float            not null
#  lng                 :float            not null
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
#

require 'test_helper'

class BridgeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
