Typeahead Demo Project
Quick Start Guide
Setup and Installation
Install dependencies: Run npm install to install required packages.
Build the project: Execute npm run build to compile the source files.
Start the server: Use npm run start to launch the project.
After starting the server, the web application will be available at localhost:3000. Here, you can test the typeahead demo feature.

Sending Emails via API
To send an email, make a POST request to http://localhost:3000/api/emails with a JSON payload like the following:
{
  "to": "XXXXX@somemail.com",
  "subject": "Test",
  "body": "hi~~"
}
This can be done using tools such as Postman. This request sends an email with your specified content.

Setting Up Email Functionality
To use the email sending functionality, you need to sign up for a SendGrid account and obtain an API key. Once you have your API key, add it to your .env file like this:

SENDGRID_API_KEY=YourSendGridApiKeyHere

Make sure to replace YourSendGridApiKeyHere with your actual SendGrid API key. This step is crucial for enabling the email-sending feature of the project.