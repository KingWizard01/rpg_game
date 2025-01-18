const scenes = {
    intro: {
        description: `Welcome to the game! You are a detective who has been hired to investigate a series of murders in the small town of Grubennstein. 
        Local plebs blame everyone from vampires and werewolves to witches and politicians.<br><br>
        But will you be clean and honest in your pursuit of justice? Or will you accept corrupt coin and promises of power so long as you cover up the truth?`,
        options: [{ text: "Start Game", nextScene: "inn" }]
    },
    inn: {
        description: `You arrive at a creepy inn at midnight. It's raining, and thunder rumbles in the background. 
        You step inside to find a bar owner standing behind the counter and another man in a dark cloak sitting by the fireplace.`,
        options: [
            { text: "Approach the Barman", nextScene: "barman" },
            { text: "Approach the Mysterious Man", nextScene: "mysteriousMan" }
        ]
    },
    barman: {
        description: `The barman greets you with a wary smile. "What can I get for you, stranger?" he asks.`,
        options: [
            { 
                text: `"I'm here to investigate the murders and deliver justice."`, 
                nextScene: "barmanJusticePath" 
            },
            { 
                text: `"I heard the pay was extremely good, so here I am."`, 
                nextScene: "barmanGreedPath" 
            }
        ]
    },
    mysteriousMan: {
        description: `The man in the dark cloak looks up as you approach. His face is shadowed, but you can feel his piercing gaze. 
        "What brings you here, detective?" he asks in a deep, gravelly voice.`,
        options: [
            { 
                text: `"I'm here to investigate the murders and deliver justice."`, 
                nextScene: "mysteriousManJusticePath" 
            },
            { 
                text: `"I heard the pay was extremely good, so here I am."`, 
                nextScene: "mysteriousManGreedPath" 
            }
        ]
    },
    // Barman responses
    barmanJusticePath: {
        description: `The barman nods approvingly. "It's good to see someone who's here to do the right thing. 
        This town needs justice more than ever. I hope you succeed, detective."`,
        options: [{ text: "Continue", nextScene: "inn" }]
    },
    barmanGreedPath: {
        description: `The barman raises an eyebrow, his approval clearly diminished. 
        "Well, I suppose everyone has their reasons... Just remember, gold can't cleanse a guilty conscience."`,
        options: [{ text: "Continue", nextScene: "inn" }]
    },
    // Mysterious man responses
    mysteriousManJusticePath: {
        description: `The man chuckles darkly. "Justice, you say? A noble pursuit, but a naive one. 
        Let's see how long your ideals last in this town."`,
        options: [{ text: "Continue", nextScene: "inn" }]
    },
    mysteriousManGreedPath: {
        description: `The man smiles slyly. "Ah, a realist. I like that. Gold opens doors, and in Grubennstein, it might be the only thing that keeps them open."`,
        options: [{ text: "Continue", nextScene: "inn" }]
    }
};

function updateScene(sceneKey) {
    const scene = scenes[sceneKey];
    const gameDiv = document.getElementById("game");
    
    // Clear the game container
    gameDiv.innerHTML = `<h1>Murders of Grubennstein</h1>
                         <p>${scene.description}</p>`;
    
    // Add the scene's options as buttons
    scene.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.onclick = () => updateScene(option.nextScene);
        gameDiv.appendChild(button);
    });

    // Add the persistent "Start Over" button
    const startOverBtn = document.createElement("button");
    startOverBtn.innerText = "Start Over";
    startOverBtn.onclick = () => updateScene("intro");
    startOverBtn.style.marginTop = "20px";
    gameDiv.appendChild(startOverBtn);
}

// Start the game by loading the intro scene
updateScene("intro");
