let player = { name: "Hero", health: 100, attack: 10, defense: 5, potions: 3 };
let enemy = { name: "Goblin", health: 50, attack: 8, defense: 3 };

function updateMessage(text) {
    document.getElementById("message").innerText = text;
}

function startGame() {
    updateMessage("An enemy appears! Choose your action.");
    document.getElementById("attackBtn").style.display = "inline-block";
    document.getElementById("potionBtn").style.display = "inline-block";
    document.getElementById("runBtn").style.display = "inline-block";
}

function attack() {
    let damage = Math.max(1, player.attack - enemy.defense);
    enemy.health -= damage;
    updateMessage(`You dealt ${damage} damage to the ${enemy.name}!`);

    if (enemy.health <= 0) {
        updateMessage("Congratulations! You defeated the enemy!");
        endGame();
        return;
    }

    enemyAttack();
}

function usePotion() {
    if (player.potions > 0) {
        player.health += 20;
        player.potions--;
        updateMessage("You used a potion and restored 20 health!");
    } else {
        updateMessage("You have no potions left!");
    }

    enemyAttack();
}

function runAway() {
    updateMessage("You ran away safely! Game over.");
    endGame();
}

function enemyAttack() {
    let damage = Math.max(1, enemy.attack - player.defense);
    player.health -= damage;

    if (player.health <= 0) {
        updateMessage("You were defeated. Game over.");
        endGame();
    } else {
        updateMessage(`The ${enemy.name} dealt ${damage} damage to you!`);
    }
}

function endGame() {
    document.getElementById("attackBtn").style.display = "none";
    document.getElementById("potionBtn").style.display = "none";
    document.getElementById("runBtn").style.display = "none";
}
