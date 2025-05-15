# Simple Sum Project

This project is a simple web application that allows users to add two numbers. The user interface is intuitive and designed to be easy to use.

## Project Structure

The project contains the following files:

- `index.html`: The main page containing the basic HTML structure and user interface elements.
- `styles/style.css`: CSS file that defines the visual design of the page, including colors, fonts, and element layout.
- `scripts/app.js`: JavaScript file that handles the application logic, including the summation of user-entered numbers.

## Instructions for Deploying to Digital Ocean

1. **Create a Droplet**: Log in to your Digital Ocean account and create a new Droplet. You can choose an Ubuntu image for this project.

2. **Install a Web Server**: Once your Droplet is up and running, connect to it via SSH and install a web server such as Nginx or Apache. For example, to install Nginx, you can use the following command:
```
sudo apt update
sudo apt install nginx
```

3. **Upload Files**: Upload the project files to your Droplet. You can use `scp` or any FTP client. Make sure the files are in the root directory of the web server (e.g., `/var/www/html` for Nginx).

4. **Configure the Server**: Make sure your web server is configured to serve static files. If you're using Nginx, the default settings should work fine.

5. **Access the Application**: Open a web browser and access your Droplet's IP address. You should see the suma application running.

## Functionality

The application allows users to enter two numbers, and clicking a button displays the sum of those numbers on the screen. It's an ideal project for beginners who want to learn HTML, CSS, and JavaScript.