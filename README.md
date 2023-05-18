# Section_11

## SWR(Stale while revalidating)
    1. A HTTP Cache validation strategy popularised by SWR is a strategy to first return the data from cache(stale) then send the fetch request(revalidate),and finally come with the up-to-date data..
    2. It is independent framework.

## Made getCoffeeStoreById API
    1. this Api return a respone with related id data, if id is match in the airtable databse.
## Made favouriteCoffeeStoreById API
    1. Check with id if the data is exist .
        1. if(exist)-Then update the store with (currentVoting + 1);
        2. else --return id does not exist
## Design Voting Feature In our App
