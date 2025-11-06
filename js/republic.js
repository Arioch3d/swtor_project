const swtor_form = document.getElementById('swtor_form');
const empireDropdown = document.getElementById('empire_classes');
const republicDropdown = document.getElementById('republic_classes');
const selectionResult = document.getElementById('selectionResult');

document.getElementById("republic_classes").addEventListener('change', function() {
    const selectedClass = this.value;
    if (selectedClass === 'Jedi Consular') {
        selectionResult.innerHTML = "<h2>Jedi Consular</h2><h3>Visionary, Ambassador, Seeker of Jedi Wisdom</h3><p>For more than 20,000 Years, the Jedi Order hs worked to Promote Peace and Balance.</p>";
    }
    else if (selectedClass === 'Jedi Knight') {
        selectionResult.innerHTML = "<h2>Jedi Knight</h2><h3>Valiant, Determined, Guardian of Peace</h3><p>A Symbol of Hope in Dark Times, the Jedi Knight stands for the Legacy of the Jedi Order.</p>";
    }
    else if (selectedClass === 'Smuggler')  {
        selectionResult.innerHTML = "<h2>Smuggler</h2><h3>Quick, Clever, Answers to No One</h3><p>Sometimes luck is more important than Skill, but if never hurts to have both.";
    }
    else if (selectedClass === 'Trooper') {
        selectionResult.innerHTML = "<h2>Trooper</h2><h3>Honor, Duty, Defense of te Republic!</h3><p>Not all Heroes carry Lightsabers. Some just have the Will to Fight.</p>";
    }
    else {
        selectionResult.textContent = 'No Class Selected';
    }
});
