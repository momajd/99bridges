class Favorite < ActiveRecord::Base

  validates :user_id, uniqueness: { scope: :bridge_id }

  belongs_to :user
  belongs_to :bridge
end
