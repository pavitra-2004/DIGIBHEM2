# DIGIBHEM2
Hotel Booking Registration Form

Overview
This is a hotel booking registration form that allows users to input their details for booking a hotel room. The form calculates the total cost based on the room type, amenities, extra persons, and advance payment. It also allows for validation, cost calculations, and printing the form.

Features
Customer Information: Name, check-in date, total days, total persons, and advance payment.
Room Information: Room type selection (Delux or Suite) and available amenities (AC and Locker).
Cost Calculation: Calculates the cost based on room type, number of days, amenities, and extra persons.
Validation: Ensures that all required fields are filled and that input values are valid.
Responsive Design: Works well on both desktop and mobile devices.
Social Media Links: Provides links to social media profiles (Twitter, LinkedIn, GitHub).
Print Functionality: Allows users to print the filled form.
Technologies Used
HTML5
CSS3 (with Bootstrap and custom styling)
JavaScript (for form validation, calculations, and event handling)
Font Awesome (for icons)
SweetAlert2 (for pop-up alerts)
Boxicons (for social media icons)
Installation
Clone or Download:
Clone this repository or download the files to your local machine.

Folder Structure:
The project has the following folder structure:

graphql
Copy code
hotel-booking-form/
├── index.html          # The HTML form page
├── style.css           # Custom styles for the form
├── javascript.js       # JavaScript for form validation and calculations
└── bag.jpg             # Background image (optional, can be replaced)
Dependencies:

Bootstrap (for responsive design and basic styling)
Font Awesome (for icons)
SweetAlert2 (for pop-up validation alerts)
Boxicons (for social media icons)
These dependencies are linked via CDN in the index.html file.

Customization:

You can modify the bag.jpg file with your own image for the background.
The pricing for rooms and amenities can be adjusted in the javascript.js file. Modify the values of roomRates, amenitiesRates, and extraPersonCharge to change the rates.
How to Use
Open the Form:
Open the index.html file in any modern web browser to view the form.

Enter Customer Info:

Fill out the customer's name, check-in date, total days of stay, number of persons, and advance payment.
Select Room and Amenities:

Choose a room type (Delux or Suite).
Check the amenities you would like to add (AC and/or Locker).
Calculate Costs:

Click the "Calculate" button to calculate the total cost, including the room, amenities, extra person charges, and balance due after the advance payment.
Print the Form:

After the form is filled out, you can print it by clicking the "Print" button.
Reset the Form:

You can reset the form fields by clicking the "Reset" button.
JavaScript Functions
validateForm():
Validates the input fields to ensure all required fields are filled and that the input values are correct.

calculateCosts():
Calculates the total room cost, amenities cost, extra person charges, and the balance due after the advance payment.

showError():
Highlights a form field in red if there is an error (e.g., missing input or invalid value).

clearErrorStyles():
Clears any error styles on form fields.

printForm():
Prints the filled form using the browser’s print functionality.

CSS Styling
Responsive Design:
The form is designed to be responsive, ensuring it works well on both desktop and mobile devices.

Background Image:
A background image (bag.jpg) is used, which can be replaced with any other image.

Form Styling:
Custom styles are applied to the form, including border radius, padding, and box-shadow for a modern look.
