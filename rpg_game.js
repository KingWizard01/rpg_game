const game = {
    currentScene: "intro",
    playerTags: [],
    scenes: { 
        intro: {
            description: `Welcome to the game! You're a detective who has been hired to investigate a series of murders in the small town of Grubennstein. 
            Local plebs blame everyone from vampires and werewolves to witches and politicians!<br><br>
            You have a crippling debt to pay off and solving this case will go some way to helping get you back on your feet.
            But will you be clean and honest in your pursuit of justice? Or will you accept corrupt coin and promises of power so long as you cover up the truth?`,
            options: [
                { 
                    text: "Start Game", 
                    nextScene: "inn" 
                }
            ]
        },
        inn: {
            description: `It's midnight, and you step out of your stage coach and into the dark town of Grubennstein. A series of violent murders has taken place, and you've decided to investigate and see what you can turn up. 
            Rain dashes on the stone cobbled pavement and thunder rumbles in the background as you step inside the Prancing Unicorn Inn.  
            Inside, you see a man standing behind the counter and another man in a dark cloak sitting by the fireplace. No one else is to be seen.`,
            options: [
                { 
                    text: "Approach the man behind the counter", nextScene: "Innkeeper" 
                },
                { 
                    text: "Approach the Mysterious Man", nextScene: "mysteriousMan" 
                }
            ]
        },
        Innkeeper: {
            description: `The man greets you with a wary smile. "Hello, I'm Duncan Conrad, Innkeeper. 
            You must be the investigator we've been expecting.
            How can I help?" he asks.`,
            options: [
                { 
                    text: `"I'm here to investigate the murders, put the criminals behind bars, and deliver justice for the victims."`, 
                    nextScene: "InnkeeperJusticePath" 
                },
                { 
                    text: `"I heard whoever solves the recent murders will be extremely well paid; I'm only here for the money."`, 
                    nextScene: "InnkeeperGreedPath" 
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
        InnkeeperJusticePath: {
            description: `The Innkeeper nods approvingly. "It's good to see someone who's here to do the right thing. This town needs justice more than ever. I hope you succeed, detective. Here, have a mug of ale on the house, and you can stay in one of my rooms for the night free, too."`,
            options: [
                { 
                text: "Accept the free ale and room", 
                nextScene: "acceptInnkeeperOffer" 
                }
            ]
        },
        InnkeeperGreedPath: {
            description: `The Innkeeper raises an eyebrow, his approval clearly diminished. 
            "Well, I suppose everyone has their reasons... Just remember, gold can't cleanse a guilty conscience. Speaking of which, it'll cost you one bronze coin for a mug of ale and two pieces of silver for a night's stay."`,
            options: [
                { 
                text: "Accept the ale and room at full price", 
                nextScene: "InnkeeperDisapprovalOffer" 
                }
            ]
        },
        mysteriousManJusticePath: {
            description: `The man chuckles darkly. "Justice, you say? A noble pursuit, but a naive one. 
            Let's see how long your ideals last in this town. I suggest you speak to the Innkeeper instead. He shares your high-minded ideals."`,
            options: [
                { 
                text: "Speak to the Innkeeper about the murders", 
                nextScene: "InnkeeperJusticePath" 
                }
            ]
        },
        mysteriousManGreedPath: {
            description: `The man smiles slyly. "Ah, a realist. I like that. Gold opens doors, and in Grubennstein, it might be the only thing that keeps them open. Come with me, I'll show you a more discrete inn where we can discuss business, and perhaps I'll introduce you to other clientele who share our taste for money."`,
            options: [
                { 
                text: "Accept his offer to stay somewhere better", 
                nextScene: "betterInn" 
                }
            ]
        },
        acceptInnkeeperOffer: {
            description: `The Innkeeper smiles and hands you a mug of ale. "I respect your dedication to justice, detective. You can rest here tonight, and I'll keep an ear out for any information that could help you with your investigation."`,
            options: [
                { 
                text: "Thank the Innkeeper and ask what he knows about the murders", 
                nextScene: "InnkeeperRumours" 
                }
            ]
        },
        InnkeeperDisapprovalOffer: {
            description: `As you're about to agree, the mysterious man from the corner stands up and approaches. "I overheard your conversation. You don't need to stay here," he says. "Come with me, and I'll take you somewhere you can get a cheaper room and a better ale." The Innkeeper looks at the Mysterious Man with annoyance and disgust, and then turns his back on you.`,
            options: [
                { 
                text: "Accept the mysterious man's offer to stay somewhere better", 
                nextScene: "betterInn" 
                }
            ]
        },
        betterInn: {
            description: `The mysterious man leads you out of the inn and down the road for a minute or two, before you arrive at your new destination; Red Joker Inn. 
            "People like you belong here," he says with a grin. "You'll find the company more to your liking, and the rooms are much more comfortable."`,
            options: [
                { 
                text: "Ask the mysterious man if he knows anything about the murders", 
                nextScene: "mysteriousManInformation" 
                }
            ]
        },
        InnkeeperRumours: {
            description: `The Innkeeper leans in, lowering his voice. "I overheard some talk about the murders. 
            People are saying the killings are connected to something ancient, something... cursed. But don't trust everything you hear here."`,
            options: [
                { 
                text: "Thank the Innkeeper and ask what to do next", 
                nextScene: "InnkeeperInformation" 
                }
            ]
        },
        InnkeeperInformation: {
            description: `The Innkeeper leans in, lowering his voice. "Three townspeople have been killed so far, detective. 
            The bodies were taken to the morgue before anyone could see them. Rumor has it that vampires or werewolves are behind the killings, 
            but who knows for sure? If you’re serious about this, I suggest you visit the morgue, the Red Joker Inn where vampires are known to gather, 
            and the local sheriff who's begun investigating."`,
            options: [
                { 
                text: "Thank the Innkeeper and go to bed", 
                action: () => game.updatePlayerTags("stayedWithInnkeeper"),
                nextScene: "wakeUpInnkeeper"
                },
            ]
        },
        mysteriousManInformation: {
            description: `The mysterious man smirks, revealing sharp fangs. "I suppose it’s time to drop the charade. 
            I’m a vampire, detective, and these are my friends." He gestures to two pale figures who appear from the shadows. 
            "Three people have been killed, but we are not responsible. The townsfolk suspect us or the werewolves, 
            but we only want to clear our name. If you help us uncover evidence of the real killers, we’ll reward you handsomely. 
            Tomorrow, you should visit the morgue where the bodies are, speak with the sheriff, or go to the sawmill where the werewolves work. 
            That’s where you’ll find more answers."`,
            options: [
                { 
                text: "Thank the vampires for their hospitality and go to bed", 
                action: () => game.updatePlayerTags("stayedWithVampires"),
                nextScene: "wakeUpVampires"
            
                }
            ]
        },
        wakeUpInnkeeper: {
            description: `You thank the Innkeeper for his help and head upstairs to your room. 
            After a night of rest, you feel ready to begin your investigation.`,
            options: [
                { 
                    text: "Head to the morgue to investigate the bodies",
                    action: () => game.updatePlayerTags("visitedMorgue"),
                    nextScene: "morgue" 
                },
            { 
                    text: "Explore the sawmill where the werewolves work",
                    action: () => game.updatePlayerTags("visitedSawmill"), 
                    nextScene: "sawmill" 
                },
            { 
                    text: "Visit the sheriff for more information on the murders",
                    action: () => game.updatePlayerTags("visitedSheriff"),
                    nextScene: "sheriff" 
                }
            ]
        },
        wakeUpVampires: {
            description: `You thank the vampires for their hospitality and retire to a guest room at the Red Joker Inn. 
            As dawn approaches, you feel a strange unease but resolve to begin your investigation the next day.`,
            options: [
                { 
                    text: "Head to the morgue to investigate the bodies",
                    action: () => game.updatePlayerTags("visitedMorgue"),
                    nextScene: "morgue" 
                },
                { 
                    text: "Explore the sawmill where the werewolves work",
                    action: () => game.updatePlayerTags("visitedSawmill"), 
                    nextScene: "sawmill" 
                },
                { 
                    text: "Visit the sheriff for more information on the murders",
                    action: () => game.updatePlayerTags("visitedSheriff"),
                    nextScene: "sheriff" 
                }
            ]
        },
        morgue: {
            description: `The morgue is a dark and dreary place, lit only by a single flickering lantern. The mortuary assistant, Erissa Handolver, greets you at the reception desk. She looks at you suspiciously and asks, "Who sent you here?"`,
            options: function () {
            const options = [];
            if (game.hasPlayerTag("stayedWithInnkeeper")) {
            options.push({ 
                text: "The Innkeeper sent me.",
                nextScene: "erissaReplyInnkeeper" 
                });
            }
            if (game.hasPlayerTag("stayedWithVampires")) {
            options.push({ 
                text: "[TRUTH] The vampires at the Red Joker Inn sent me.",
                nextScene: "erissaReplyVampiresTruth" 
            });
            options.push({ 
                text: "[LIE] I’m here on my own. I don’t know the vampires.",
                nextScene: "erissaReplyVampiresLie" 
                    });
                }
                return options;
            }
        },
        erissaReplyInnkeeper: {
        description: `Erissa nods thoughtfully. "If the Innkeeper sent you, I suppose you're trustworthy. Come in, but don't touch anything." 
        She leads you into the morgue where the bodies lie, awaiting examination.`,
        options: [
                { 
                text: "Examine the bodies", 
                nextScene: "examineBodies" 
                }
            ]
        },
        erissaReplyVampiresLie: {
        description: `Erissa narrows her eyes at you. "The Innkeeper, you say? Hmm, strange. He usually doesn't send people here unless it's urgent. 
        Very well, come in, but I'll be keeping an eye on you."`,
        options: [
                { 
                text: "Examine the bodies", 
                nextScene: "examineBodies" 
                }
            ]
        },
        erissaReplyVampiresTruth: {
        description: `Erissa scowls at you. "The vampires, huh? They've been trying to get in here for days. 
        Tell them this is a place of the dead, not their playground. Now leave before I call the sheriff!"`,
        options: [
                { 
                text: "Leave the morgue and consider your next move", 
                nextScene: "nextStep" 
                }
            ]
        },
        examineBodies: {
        description: `You step into the cold, dimly lit morgue and approach the bodies. 
        They bear gruesome wounds—deep claw marks and bite marks. 
        Erissa points out, "These wounds are strange. Too big for a wolf, but too deep for a human. 
        I've never seen anything like it."`,
        options: [
                { 
                text: "Thank Erissa and leave the morgue", 
                nextScene: "nextStep" 
                }
            ]
        },
        Sawmill: {
        description: `The sawmill is a rugged place on the outskirts of Grubennstein, surrounded by dense forest. 
        Logs are piled high, and the sound of saws cutting through wood echoes in the air. 
        As you approach, you're stopped by a towering man with a muscular build. His presence is commanding, and his eyes seem to gleam unnaturally. 
        "I'm Igor Darkmane," he growls. "This is werewolf territory, stranger. State your business."`,
        options: [
                { 
                text: "Explain that you're investigating the murders.", 
                nextScene: "igorRefuses" 
                }
            ]
        },
        igorRefuses: {
        description: `Igor crosses his arms and stares down at you. "Murders? That's not my problem," he says with a sneer. 
        "Get out of here before you regret it." His voice takes on a dangerous tone as he steps closer. 
        "This is your only warning."`,
        options: [
                { 
                text: "Leave and head back to town.", 
                nextScene: "nextStep" 
                },
                { 
                text: "Stand your ground and confront Igor.", 
                nextScene: "fightIgor" 
                }
            ]
        },
        fightIgor: {
        description: `You stand your ground, refusing to back down. Igor lets out a low growl, his fists clenched tightly. 
        "You've got guts, I'll give you that," he says, before lunging at you with surprising speed for his size. 

        The fight is brutal. Although he's in human form, Igor's strength is overwhelming. 
        You manage to land a few hits, but his blows leave you battered and bleeding. 
        As you collapse to the ground, Igor glances at you with disdain. "This is your lesson, stranger. Stay out of werewolf business." 

        He strides off into the forest, leaving you injured and alone. Moments later, a passerby finds you and rushes you to the local hospital.`,
        options: [
                { 
                text: "Head back to town.", 
                nextScene: "nextStep" 
                }
            ]
        },
        sheriff: {
        description: `The sheriff's office is a small, sturdy building in the heart of Grubennstein. 
        Sheriff Harland Greaves, an older man with a weathered face and piercing blue eyes, greets you as you enter. 
        "What brings you here, stranger?" he asks, his tone gruff but not unkind. 
        "You look like you've been through hell."`,
        options: [
                { 
                text: "Explain your investigation and ask for the sheriff's help.", 
                nextScene: "sheriffHelp" 
                }
            ]
        },
        sheriffHelp: {
        description: `Sheriff Greaves listens intently as you recount your experiences at the morgue and the sawmill. 
        When you mention Igor Darkmane, his expression darkens. "That man is trouble," he says. 
        "He's been at the center of many disputes around here, but we can't touch him without evidence." 

        He hands you a folder with details about the recent murders. "Take this. It might help you piece things together. 
        And be careful—Grubennstein has more shadows than just the ones cast by the moon."`,
        options: [
                { 
                text: "Thank the sheriff and leave to plan your next move.", 
                nextScene: "nextStep" 
                }
            ]
        },
        nextStep: {
        description: `Having gathered some clues, you ponder your next step. The town of Grubennstein holds many secrets, 
        and it's up to you to uncover them.`,
        options: function () {
            const options = [];
    
            // Only show the option to visit the morgue if the player hasn't visited it yet
                if (!game.hasPlayerTag("visitedMorgue")) {
                    options.push({ 
                    text: "Visit the morgue", 
                    nextScene: "morgue" 
                    });
             }
            
            // Only show the option to visit the sawmill if the player hasn't visited it yet
                if (!game.hasPlayerTag("visitedSawmill")) {
                options.push({ 
                    text: "Visit the sawmill", 
                    nextScene: "sawmill" 
                    });
                }
    
            // Only show the option to visit the sheriff's office if the player hasn't visited it yet
                if (!game.hasPlayerTag("visitedSheriff")) {
                options.push({ 
                    text: "Visit the sheriff's office", 
                    nextScene: "sheriff" 
                    });
                }
                    return options;
            }
        },
    },
    // Method to update player tags
    updatePlayerTags(tag) {
        if (!this.playerTags.includes(tag)) {
            this.playerTags.push(tag);
        }
    },

    hasPlayerTag(tag) {
        return this.playerTags.includes(tag);
    },

    updateScene(sceneKey) {
        if (sceneKey === "intro") {
            this.playerTags = []; 
        }

        const scene = this.scenes[sceneKey];
        const gameDiv = document.getElementById("game");
        
        gameDiv.innerHTML = `<h1>Murders of Grubennstein</h1>
                           <p>${scene.description}</p>`;
        
        const sceneOptions = typeof scene.options === "function" ? scene.options() : scene.options;
        
        sceneOptions.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option.text;
            
            button.onclick = () => {
                if (option.action) {
                    option.action.call(this);
                }
                this.updateScene(option.nextScene);
            };
            gameDiv.appendChild(button);
        });

        if (sceneKey !== "intro") {
            const startOverButton = document.createElement("button");
            startOverButton.innerText = "Start Over";
            startOverButton.onclick = () => this.updateScene("intro");
            gameDiv.appendChild(startOverButton);
        }
    },

    start() {
        this.updateScene(this.currentScene);
    }
};

// Start the game when the page loads
window.onload = () => game.start();
