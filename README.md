
<img src="./Frontend/logo/LegalAssist.png" width="100" heigth="100" />

## LegalAssist

The appointment booking system in question is designed specifically for booking appointments with lawyers. It offers a streamlined process for clients to find and book appointments with legal professionals, ensuring that they have access to the legal advice and representation they need.



## Tech Stacks
- HTML
- CSS
- JavaScript
- MongoDB
- NodeJS
- ExpressJS
- Mongoose






# Routes Details

1. "/" => will give welcome note

2. "/users/register" => use it to register a user
3. "/users/login" => use it to login a user
4. "/all" => (only for Admin Purpose, Admin Authentication Required) use it to get all users data

5. "/lawyer/register" => use it to register a lawyer
6. "/lawyer/login" => use it to login a lawyer
7. "/lawyer/add" => (only for Lawyer Purpose, Lawyer Authentication Required) use it to add Slots

8. "/admin/register" => use it to register as an Admin
9. "/admin/login" => use it to login as an Admin

Authentication Required (in below routes) (for Users, Lawyers, Admins)

10. "/avail/" => use this to get all Lawyers data
11. "/avail/type/:type" => use this to get Lawyers list by their type
12. "/avail/name/:name" => use this to get Lawyers list by their name
13. "/avail/slots/:lawyerID" => use this to get all available slots of a particular lawyer by It's ID
14. "/avail/lawyerBookings/:lawyerID" use this to get list of all booked slots by lawyerID (only for lawyers)
15. "/avail/userBookings/:userID" use this to get list of all booked slots by userID(only for users)


16. "/book/" => (only for users) to book slots by providing (lawyerID, userID, slotID) in body
17. "/book/allBookings" (only for Admin purpose) use this to get list of bookings 




# Images
- HOMEPAGE
![homepageSmall](https://user-images.githubusercontent.com/112761880/229686303-7dbee180-48d1-4ec7-9cbb-c0a09802c82b.jpg)

![homepage](https://user-images.githubusercontent.com/112761880/229361349-e14c12db-c50f-4a9f-9aeb-a1311fac2ea7.jpg)

- LAWYERS LIST
![Lawyers List](https://user-images.githubusercontent.com/112761880/229361324-d9b02dcf-3bfb-46bc-88a4-cd081886112e.jpg)

- SIGNUP PAGE FOR LAWYERS
![Signup page Lawyer](https://user-images.githubusercontent.com/112761880/229361335-2d8b1c6f-1374-49ff-85f0-30a9aaab0d64.jpg)

- SIGNUP PAGE FOR USERS
![Signup page](https://user-images.githubusercontent.com/112761880/229361341-8558c449-21dc-4bdc-b72e-c65e10ec1547.jpg)

- SLOT BOOKING PAGE FOR LAWYERS
![Slot booking](https://user-images.githubusercontent.com/112761880/229361342-189ca0be-5cea-420b-97a0-fed4c1de5830.jpg)

- BOOKINGS PAGE
![Bookings](https://user-images.githubusercontent.com/112761880/229361346-e7354052-bb75-40df-9c21-4faae1e2dba7.jpg)

- ADMIN PAGE
![Admin Panel](https://user-images.githubusercontent.com/112761880/229361344-aed5df3a-1453-482e-8283-f8a54f2e6fb9.jpg)
