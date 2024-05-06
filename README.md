<head>
  <title>Countdown Timer</title>
  <style>
    .green { color: green; }
    .bold { font-weight: bold; }
  </style>
</head>

# Countdown Timer

<p class="green">The Countdown Timer is a simple command-line tool that allows you to set a countdown in seconds.</p>
<p>Once the countdown reaches zero, a message indicates that the timer has expired.</p>

<br>

## Features
<ul>
  <li>Customizable countdown time (between 1 and 60 seconds)</li>
  <li>Displays remaining time in "minutes : seconds" format</li>
  <li>Figlet animation at the start</li>
  <li>Uses inquirer for user input</li>
</ul>

<br>

## How to Use
<p>To use this Countdown Timer in your own command-line interface (CLI), use the following command:</p>
<code>npx fiza07_countdown-timer</code>

<br>

<p>Enter the desired countdown time in seconds, and the timer will start. When the countdown expires, you will see a message.</p>

<br>

## Requirements
<ul>
  <li><span class="bold">Node.js</span> and npm must be installed on your system</li>
  <li>This tool uses `inquirer`, `date-fns`, `chalk`, `clear`, `figlet`, and `chalk-animation`</li>
</ul>

<br>

## Running Locally
<ol>
  <li><span class="bold">Clone the Repository:</span> Clone the project to your local machine</li>
  <li><span class="bold">Install Dependencies:</span> In the project root directory, run `npm install`</li>
  <li><span class="bold">Start the Timer:</span> Use `node countdown-timer.js` or similar command to start the countdown</li>
</ol>

<br>

## Author
<p>This project is developed by Fiza07. If you have any questions, contact me or submit an issue on GitHub.</p>
