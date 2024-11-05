// Mockup AJAX functions to simulate content loading

function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    const playerPosition = document.getElementById('playerPosition').value;

    fetch('addplayer.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: playerName, position: playerPosition })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Player ${playerName} added successfully!`);
            loadPlayers();  // Refresh the players list
        } else {
            alert('Failed to add player.');
        }
    })
    .catch(error => console.error('Error:', error));

    return false;  // Prevent default form submission
}



function loadTeams() {
    document.getElementById('content').innerHTML = '<h2>Teams</h2><p>Loading teams data...</p>';
    setTimeout(() => {
        document.getElementById('content').innerHTML = `
            <h2>Teams</h2>
            <ul>
                <li>Team A - League: Premier</li>
                <li>Team B - League: Champions</li>
            </ul>`;
    }, 1000);
}

function loadMatches() {
    document.getElementById('content').innerHTML = '<h2>Matches</h2><p>Loading match data...</p>';
    setTimeout(() => {
        document.getElementById('content').innerHTML = `
            <h2>Upcoming Matches</h2>
            <ul>
                <li>Team A vs Team B - Date: 2024-09-01</li>
                <li>Team B vs Team C - Date: 2024-09-08</li>
            </ul>`;
    }, 1000);
}

function showAddForm() {
    document.getElementById('content').innerHTML = `
        <h2>Add New Player</h2>
        <form id="addPlayerForm" onsubmit="return addPlayer()">
            <label for="playerName">Name:</label>
            <input type="text" id="playerName" required><br><br>
            
            <label for="playerPosition">Position:</label>
            <input type="text" id="playerPosition" required><br><br>
            
            <button type="submit">Add Player</button>
        </form>`;
}

function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    const playerPosition = document.getElementById('playerPosition').value;

    // Placeholder for AJAX POST request
    alert(`Player ${playerName} with position ${playerPosition} added!`);
    loadPlayers();
    return false;  // Prevent form submission
}
