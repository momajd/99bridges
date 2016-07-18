json.(user, :username, :id)

# TODO consider moving this to show view and fetching with ajax
json.bridges user.bridges
