#  EVENT MANAGEMENT SYSTEM

## OverView ##

The Event Management System is a web application designed to facilitate the creation, management, and registration of events. The backend is built using Spring Boot with a MySQL database, while the frontend is developed using React. This project aims to provide a user-friendly interface for users to manage events and for attendees to register for these events.

## Features ##

- ### User Authentication:  Secure login and registration for users.
- ### Event Creation:   Users can create and manage events.
- ### Attendee Registration: Open registration for attendees to join events.
- ### Event Listing: List of all available events
- ### Responsive Design: User-friendly interface that works on both desktop and mobile devices.

<br>

## Technologies Used ##

- ### Backend: ###
  - Java Spring Boot
  - MySQL
  - Hibernate
- ## Frontend: ###
  - ReactJS
  - CSS
  - HTML
- ## Tools: ##
  - IntelliJ IDEA (for backend development)
  - Visual Studio Code (for frontend development)
  
## Setup Instructions: ##

### Prerequisites ###

- Java 8 or higher
- Node.js and npm
- MySQL
- IntelliJ IDEA or Eclipse
- Visual Studio Code
  
### Backend Setup ###

1. Clone the repository: <br>
   `git clone https://github.com/mehreen019/event_management_system.git` <br>
    `cd event_management_system`

2. Set up MySQL database:
    - Create a new database named 'event_management'.
    - Update the database configuration in 'src/main/resources/application.properties':
    `spring.datasource.url=jdbc:mysql://localhost:3306/event_management` <br>
    `spring.datasource.username=your_username` <br>
    `spring.datasource.password=your_password` <br>
    `spring.jpa.hibernate.ddl-auto=update` <br>

3. Build and run the backend:
    - Open the project in IntelliJ IDEA.
    - Run the 'EventManagementSystemApplication' class.
  
### Frontend Setup ###
1. Navigate to the frontend directory:
    `cd frontend`
2. Install dependencies:
   `npm install`
3. Run the frontend:
   `npm start`

## Usage ##

1. Access the application:
    - Open a web browser and navigate to 'http://localhost:5173'.
2. Register and log in:
    - Create a new user account and log in.
3. Create and manage events:
    - Use the interface to create new events, edit existing ones, and view all events.
4. Register for events:
    - Browse the list of events and register as an attendee.

## What I Learned ##

This was my first time building a cross language application, so it was simultaneously challenging and rewarding. I also worked with Spring Security this time, and initially faced some difficulties, but was able to overcome them eventually. Overall this was a very enjoyable web app to make.
