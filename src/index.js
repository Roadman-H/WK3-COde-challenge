// Your code here

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch('/films/1');
        const movieData = await response.json();

        const availableTickets = movieData.capacity - movieData.tickets_sold;

        console.log("Movie Title:", movieData.title);
        console.log("Runtime:", movieData.runtime);
        console.log("Showtime:", movieData.showtime);
        console.log("Available Tickets:", availableTickets);
        console.log("Poster:", movieData.poster);

        // Display movie details on the webpage
        document.getElementById('movieTitle').innerText = movieData.title;
        document.getElementById('runtime').innerText = movieData.runtime + " mins";
        document.getElementById('showtime').innerText = movieData.showtime;
        document.getElementById('availableTickets').innerText = availableTickets;
        document.getElementById('poster').src = movieData.poster;
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
});