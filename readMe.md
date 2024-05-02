## Social Media Web App: A Basic Guide

**Github Live Link**
https://salman-x1.github.io/echo-sphere/


**Introduction**

This project builds a basic, functional social media website. Users can log in, view and interact with posts (limited by the frontend-only approach), and browse comments. The application leverages a Mock API (dummyjson.com) to simulate real-world data retrieval.

**Requirements**

* **User Authentication**
    * Login functionality
    * Secure user data storage (including token) in localStorage
    * Logout capability
* **Post Management**
    * Initial display of 10 posts
    * Infinite scrolling for loading additional posts (10 at a time)
    * Search functionality based on keywords (optional)
    * Ability to view comments associated with each post
* **Comment Management (Frontend-Only Limitations)**
    * Viewing existing comments
    * Optionally, a simulated comment system for local display (without modifying API data)

**System Design**

* **Frontend (HTML, CSS, Bootstrap, JavaScript):**
    * Responsibilities:
        * User Interface (UI) design and management
        * User authentication and data storage (localStorage)
        * Data fetching via Fetch API interactions with the Mock API
        * Dynamic UI population with retrieved data
        * Handling user actions (search, limited comment interaction)
* **Data Storage:**
    * **localStorage:** Stores user data (including token) for session persistence.
    * **Mock API (dummyjson.com):** Provides user and post information.
        * **Limitations:** Frontend-only approach restricts functionalities like modifying data (adding/editing/deleting comments, potentially filtering by user).

**Development and Implementation**

1. **User Interface (UI) Design:**
    * Design the layout using the provided UI, considering login, post display with comments, search, and potentially a user profile section.
    * Utilize Bootstrap for responsiveness and visual appeal.
2. **User Authentication:**
    * Develop a login form for user credentials.
    * Simulate authentication by storing a token in localStorage upon successful login.
    * Implement logic to check for existing user data and handle login state accordingly.
3. **Data Fetching and Display:**
    * Utilize Fetch API to retrieve data from the Mock API:
        * User data (on login)
        * Posts (initial and subsequent loads)
        * Comments for each post
    * Parse retrieved JSON data and populate the UI with posts, comments, and user information.
4. **Post Management:**
    * Implement functionalities for:
        * Initial Post Display: Fetch and display 10 posts upon login or page load.
        * Infinite Scrolling: Trigger additional Fetch API requests to retrieve and append subsequent sets of posts (10) upon reaching the bottom of the page.
        * Search Functionality (optional): Allow users to search posts based on keywords and filter the displayed list.
5. **Comment Management (Frontend-Only Limitations):**
    * Choose one approach:
        * **Limited Comment Display:** Fetch and display existing comments from the Mock API, but users cannot directly modify them through the app.
        * **Simulated Comment System:** Implement a system where users can submit new comments through a form. However, these comments wouldn't be saved to the Mock API and would only be displayed locally within the user's session (providing a basic user experience without modifying actual API data).
6. **Additional Considerations:**
    * Implement error handling for failed API requests with user-friendly messages.
    * Consider user experience aspects like loading indicators for data fetching.
    * Ensure proper code organization and commenting for maintainability.

**Deployment (Optional)**

* Utilize GitHub Pages for a simple deployment or explore web hosting services for more control and features.

**Summary**

This project establishes a foundation for building a basic social media application. It demonstrates core concepts of user interaction, data fetching, and frontend development, while acknowledging limitations due to the frontend-only approach.
