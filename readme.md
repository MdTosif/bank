## curl commands to test api

- **signup** - curl --location --request POST 'https://bank-branches-0.herokuapp.com/api/signup' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "email":"lol@lo.l",
  "password":"password"
  }'

- **login** - curl --location --request POST 'https://bank-branches-0.herokuapp.com/api/login' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "email":"lol@lo.l",
  "password":"password"
  }'

- **autocomplete branches** - curl --location --request GET 'https://bank-branches-0.herokuapp.com/api/branches/autocomplete?q=RTGS&limit=3&offset=0' \
  --header 'Cookie: jwt=your_jwt_token'

- **all matches** - curl --location --request GET 'https://bank-branches-0.herokuapp.com/api/branches?q=Bangalore&limit=4&offset=0' \
  --header 'Cookie: jwt=your_jwt_token'

## postman collection link

- https://www.getpostman.com/collections/533015b93c10f9899037

## notification system

- to send notification visit - https://bank-branches-0.herokuapp.com/noti
