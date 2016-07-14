# == Schema Information
#
# Table name: bridges
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  img_url     :string
#

require 'test_helper'

class BridgeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
