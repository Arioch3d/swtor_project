//const swtor_form = document.getElementById('swtor_form');
const empireDropdown = document.getElementById('empire_classes');
const republicDropdown = document.getElementById('republic_classes');
const selectionResult = document.getElementById('selectionResult');

document.getElementById("empire_classes").addEventListener('change', function() {
    const selectedClass = this.value;
    if (selectedClass === 'Bounty Hunter') {
        selectionResult.innerHTML = "<h2>Bounty Hunter</h2><h3>Hunter, Seeker, Killer For Hire!</h3><p> Countless enemies stand in the way of the Sith Empire's Drive for Domination</p>";
    }
    else if (selectedClass === 'Imperial Agent') {
        selectionResult.innerHTML = "<h2>Imperial Agent</h2><h3>Assassin, Saboteur, the Empire's Secret Weapon!</h3><p>The Empire Dominates scores of Star Systems across the Galaxy, but not through the power of the Dark Side alone.</p>";
    }
    else if (selectedClass === 'Sith Inquisitor')  {
        selectionResult.innerHTML = "<h2>Sith Inquisitor</h2><h3>Sinister, Deceptive, Prodigy of Force Power</h3><p>The history of the Sith Empire is fraught with scheming politics and Dark Secrets - The Lifeblood of the Sith Inquisitor.";
    }
    else if (selectedClass === 'Sith Warrior') {
        selectionResult.innerHTML = "<h2>Sith Warrior</h2><h3>Champion of the Dark Side!</h3><p>An Unstoppable Force of Darkness, the Sith Warrior is entrusted with the task of Destroying the Empire's Enemies.</p>";
    }
    else {
        selectionResult.textContent = 'No Class Selected';
    }
});
