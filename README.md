
<img src="./Frontend/logo/LegalAssist.png" width="100" heigth="100" />

## LegalAssist

Legal Appointment Booking System



## Tech Stacks
- HTML
- CSS
- JavaScript
- MongoDB
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
