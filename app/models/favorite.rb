# == Schema Information
#
# Table name: favorites
#
#  id        :integer          not null, primary key
#  user_id   :integer          not null
#  bridge_id :integer          not null
#

class Favorite < ActiveRecord::Base

  validates :user_id, uniqueness: { scope: :bridge_id }

  belongs_to :user
  belongs_to :bridge
end
