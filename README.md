<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Football Club Management</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Football Club Management</h1>
    </header>
    
    <main>
        <section class="menu">
            <button onclick="loadPlayers()">Players</button>
            <button onclick="loadTeams()">Teams</button>
            <button onclick="loadMatches()">Matches</button>
            <button onclick="showAddForm()">Add Player</button>
        </section>
        
        <section class="content" id="content">
            <!-- Dynamic content loads here -->
        </section>
    </main>

    <footer>
        &copy; 2024 Football Club Management. All rights reserved.
    </footer>

    <script src="script.js"></script>
</body>
</html>
