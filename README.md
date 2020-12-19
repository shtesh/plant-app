# plant-app

Description
Search platform for plants with a feature of creating the personalized favorite list of plants.
The user registers, starts the session, closes the session. The user searches for a plant from a database. The user adds the plant to his/her Favorites list. The user is able to edit and delete the plant saved to his/her Favorites list. 

User Stories
•	404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
•	500 - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.
•	homepage - As a user I want to be able to access the homepage so that I see what the app is about, log in and sign up.
•	sign up - As a user I want to sign up on the webpage so that I can save all the plants I choose.
•	login - As a user I want to be able to log in on the webpage so that I can get back to my account.
•	logout - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.
•	favorites list - As a user I want to see all the plants available, search through them, save them to my account (to Favorites list) and delete them.
•	edit profile – As a user I want to be able to edit my profile.
•	result – As a user I want to see the list of the plants picked as my Favorites.
•	plant listing – as a user I want to see more details of the searched plant, be able to save it to my Favorites list.

Server Routes (back-end):
Method
	Route
	Description
	Request - Body
	
GET /	                Main page route. Renders home index view.	

GET	/login
	                Renders login form view.	
POST /login
	                Sends Login form data to the server.	{ email, password }

GET	/signup
	                Renders signup form view.	
POST	/signup
	                Sends Sign Up info to the server and creates user in the DB.	{ email, password }

GET	/private/edit-profile
	                Private route. Renders edit-profile form view.
                  
PUT	/private/edit-profile
	                Private route. Sends edit-profile info to server and updates user in DB.	{ email, password, username, [imageUrl] }
                  
GET	/private/favorites
	                Private route. Renders the favorites view.	
POST	/private/favorites/
	                Private route. Adds a new favorite for the current user.	{ name, height, light }
DELETE	/private/favorites/:plantId
	                Private route. Deletes the existing favorite from the current user.	
GET	/plants
	                Renders plants-list view.	
GET	/plants/details/:id
	                Renders plant-details view for the particular plant.	

Models

User model
{
username: {type: String, required: true},
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
imageURL: String                         //generic default avatar image, created with cloudinary 
}

Plant model
{
name: String,                              //Echeveria elegans
height: Number,                            //10
light: String,                             //Full sun
floweringTime: String,                     //Summer
native: String,                            //Mexico
imageURL: String                           //https://trefle.io/explore/species/echeveria-elegans 
}

Links

Optional
Air Quality Widget 

Trello
Link to your trello board or picture of your physical board
https://trello.com/b/0gOPGnvX/m2-project

Git
The url to your repository and to your deployed project

Repository Link

Deploy Link

Slides
The url to your presentation slides
Slides Link
