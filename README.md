📍 Smart Campus Navigator – AITM

<p align="center"> <b>A smart indoor navigation system for Angadi Institute of Technology & Management</b><br> Built with HTML, CSS, JavaScript — No backend, No APIs. </p>
🚀 Features

🗺️ Interactive multi-floor campus map (Base → 4th Floor)

🔍 Shortest path calculation using Dijkstra’s Algorithm

🧭 Turn-by-turn navigation instructions

🔄 Multi-floor movement with Stairs connectors

🎯 Accurate positioning & instant visual feedback

🎨 Clean UI using TailwindCSS

⚡ Completely offline — works using only frontend code

🧠 Tech Stack
Component	Technology
UI Structure	HTML5
Styling	CSS3, TailwindCSS
Logic	Vanilla JavaScript
Pathfinding	Dijkstra’s Algorithm
Data Representation	Graph (Adjacency List)
Animations	CSS transitions + JS updates
🗂️ Project Structure
/assets
   └── college-bg.jpg       # Background image

/css
   ├── map.css              # Map styles
   └── style.css            # Landing page styles

/js
   ├── data.js              # Node positions + Graph structure
   ├── weights.js           # Distance between nodes
   ├── pathfinding.js       # Dijkstra algorithm
   ├── map.js               # Map rendering logic
   ├── lines.js             # Draw floor connections
   ├── directions.js        # Human-friendly step-by-step instructions
   ├── navigation.js        # Main navigation controller
   └── qr.js                # QR generation (optional)

index.html                  # Landing page  
navigator.html              # Full navigation UI

🧭 How Navigation Works

User selects floor, start point, and destination

Project fetches graph from data.js

pathfinding.js applies Dijkstra to find the shortest route

map.js animates the user pointer along the path

directions.js displays clear movement instructions

If required, cross-floor routing uses

Stairs 1F

Stairs 2F

Stairs 3F

📸 Screenshots
🌐 Landing Page

(Add screenshot here)

🗺️ Map Navigation

(Add screenshot here)

🎯 Purpose

New students and visitors often struggle to find:

🏛️ Departments

🧪 Laboratories

📚 Library / Seminar Hall

👨‍🏫 Faculty Rooms

🚪 HOD / Admin Offices

The Smart Campus Navigator provides:
✔️ Instant location guidance
✔️ Clean and simple interface
✔️ Accurate indoor navigation
✔️ Accessibility and ease of use

🔮 Future Enhancements

Automated QR-scanning for user location

Admin panel to add/edit buildings

Voice navigation

Mobile app (React Native / Flutter)

Indoor BLE beacon–based GPS

👨‍💻 Developer

Manikant K
3rd Year CSE – AITM

GitHub: https://github.com/manikant016

LinkedIn: https://www.linkedin.com/in/manikant-k-2a375b308/

⭐ If you like this project

Give it a star ⭐ on GitHub — it motivates future improvements!# campus_navigator
A smart indoor navigation system designed for Angadi Institute of Technology &amp; Management (AITM). This project helps students, staff, and visitors find any location inside the campus with the shortest path and clear step-by-step directions.
