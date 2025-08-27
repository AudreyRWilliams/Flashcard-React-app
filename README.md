# Flashcard App Using REACT
This Flashcard React app is created locally first and pushed to GitHub. <br>
- This is the initial screen for the Flashcard app:
<img width="517" height="254" alt="Screen Shot 2025-08-25 at 12 14 01 PM" src="https://github.com/user-attachments/assets/9c34864f-3a98-4828-9980-1df13095f475" /> <br>
- This is what the screen looks like when the first flashcard is selected: <br>
<img width="518" height="251" alt="Screen Shot 2025-08-25 at 12 14 23 PM" src="https://github.com/user-attachments/assets/779165c8-6ede-48e0-a7e2-8f5b82387ef6" /> <br>
- Now select the 2nd flashcard: <br>
<img width="506" height="240" alt="Screen Shot 2025-08-25 at 12 15 20 PM" src="https://github.com/user-attachments/assets/e9104ccc-36a9-486c-8ee8-6c46adebe214" /> <br>
- Now de-select the 1st flashcard by selecting it again: <br>
<img width="515" height="239" alt="Screen Shot 2025-08-25 at 12 15 02 PM" src="https://github.com/user-attachments/assets/ec6fff20-2591-433e-a66a-789ceebf1f5b" /> <br>
## These are the steps to recreate this project:
Parcel is a lightweight bundler that works on older setups.
## 1) Make a folder and init npm
- mkdir ~/my-react-app
- cd ~/my-react-app
- npm init -y
## 2) Install React + Parcel + Babel presets
- npm install react@18 react-dom@18
- npm install --save-dev parcel-bundler@1.12.5 @babel/core@7 @babel/preset-env@7 @babel/preset-react@7

## 3) Add a Babel config
Create a file `.babelrc` in the project root: <br>
<img width="499" height="126" alt="Screen Shot 2025-08-25 at 12 55 57 PM" src="https://github.com/user-attachments/assets/798cf774-6ad3-4b60-ad38-e90cf14f255f" />

## 4) Project structure
Create these files: <br>
<img width="189" height="271" alt="Screen Shot 2025-08-25 at 12 57 12 PM" src="https://github.com/user-attachments/assets/0d6e294f-7db5-45a5-8e6d-94439ecf875c" />

## 5) Run it
<img width="96" height="71" alt="Screen Shot 2025-08-25 at 12 58 00 PM" src="https://github.com/user-attachments/assets/2f867f6c-d35c-4059-be9c-d7ec02604a6d" /> <br>
Open http://localhost:1234  .....  you should see clickable flashcards.

## 6) Push to GitHub (create a repository w/o the README.md file on GitHub FIRST)
- git init
- git add .
- git commit -m "React flashcards with Parcel (no CRA)"
- git branch -M main
- git remote add origin https://github.com/your-username/my-react-app.git
- git push -u origin main

