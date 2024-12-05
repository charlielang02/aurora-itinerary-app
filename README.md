# Aurora Itinerary App

Welcome to the **Aurora Itinerary App**, your go-to platform for planning and discovering exciting events. Whether you're exploring local happenings or organizing your itinerary for a big trip, this app makes the process seamless and enjoyable.

---

## **🌐 Visit the Site**

You can access the Aurora Itinerary App here: [Aurora Itinerary App](https://aurora-itinerary-app.vercel.app)

---

## **👥 Who Can Use This App?**

Core users for this app are:

1. Tourists.
   - Log in with:
     1. Username: tourist@travel.com
     2. Password: vacation
2. Event Organizers.
   - Log in with:
     1. Username: organizer@event.com
     2. Password: events

---

## **🎯 Features and Tasks**

### **Task 1: Searching For an Event**

Tourist

1. Visit the home page.
2. Click on "Find Events" in the NavBar.
3. Add any filters (Country, Date, MinPrice, MaxPrice, MinRating) that you'd like.
4. Click on the "Apply Filters" button.
5. Search for any locations, keywords, tags etc. in search bar.
6. Click on the "Search" button.
7. Click "Clear Filters" to remove the filters if needed.
8. Click on any event to view details.
9. Click on "< Back to Events" to view the list of events again (With filters wtill applied).
10. Repeat steps 8-9 until the user finds an event they would like to book.

---

### **Task 2: Adding Event to Itinerary**

Tourist:

1. Click on "Lake Louise Skiing" or "International Christmas Market" from the list on Find Events.
2. View detailed information about the event, including location, pricing, and reviews.
3. Click on the "Book Now" button.
4. Will be taken to 3rd party booking site (Assuming the event gets booked through event provider).
5. Click "Booked this event? Add to your Itinerary".
6. Click on "View Itinerary" in NavBar.
7. See Events in Itinerary including the one just added

---

### **Task 3: Modify Itinerary**

Tourist:

1. On the View Itinerary Page.
2. Click "see more info" on any event to see event details.
3. Click "Remove Event" on the event you'd like to remove.
4. Event will be removed from the itinerary.
5. User must then cancel their booking through the organizers site.

---

### **Task 4: Write a Review**

Tourist:

1. Navigate to Event details page.
2. Browse previous reviews in either "Top Reviews" section or scroll to all reviews.
3. Click "Write a Review".
4. Enter Review Content.
5. Enter User Name.
6. Enter Rating (1-5).
7. Click "Submit Review".
8. Review will be visible in reviews section

---

### **Task 5: Browse My Events**

Event Organizer:

1. Log In as Event Organizer.
2. Click "My Events" in NavBar.
3. Use filters in same way as task 1.
4. Click on events to view details.
5. Click on "< Back to My Events" to view the list of events again (With filters active).

---

### **Task 6: Create Event**

Event Organizer:

1. Log in as Event Organizer.
2. Click "Create Event" in NavBar.
3. Enter "Scott Helman Concert" as event name.
4. Enter "Dec. 6th, 2024" as date.
5. Enter "Canada" as country.
6. Enter "Alberta" as state/province.
7. Enter "Calgary" as city.
8. Enter "7:00 PM" as start time.
9. Enter "11:00 PM" as end time.
10. Enter "https://www.ticketmaster.ca/scott-helman-calgary-alberta-12-06-2024/event/1100614FB37232D9" as event link.
11. Enter "Canadian Dollar" as currency (This should've auto filled from Country field).
12. Enter "38.75" as Min Price.
13. Enter "38.75" as Max Price.
14. Click "Select File" and choose" the 5 photos called scott_helman - scott_helman5 from assets folder in GitHub Repo.
15. Enter "Music" in tags then press enter.
16. Enter "Concert" in tags then press enter.
17. Enter "Live Performance" in tags then press enter.
18. Enter "Pop" in tags then press enter.
19. Enter "Experience the electrifying performance of Scott Helman live in concert at Commonwealth Bar. Enjoy an evening of great music and entertainment. NO MINORS" as event description.
20. Click "Post Event".
21. Event will be visible in "My Events" section.

---

## **🛠️ Technologies Used**

- **Frontend**: React with Vite
- **State Management**: React Context API
- **Styling**: CSS Modules
- **Routing**: React Router DOM
- **Deployment**: Vercel

---

## **📄 License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
