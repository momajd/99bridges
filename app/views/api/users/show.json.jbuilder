json.partial! 'api/users/user', user: @user

json.bridges @user.bridges.reverse

json.favorite_bridges @user.favorite_bridges.sort_by {|bridge| bridge.id}
