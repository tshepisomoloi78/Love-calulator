document.getElementById("loveForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get names from inputs
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please fill in both names!");
        return;
    }

    // Combine names and calculate love score
    const combinedNames = (name1 + name2).toLowerCase();
    const trueCount = [..."true"].reduce((acc, char) => acc + combinedNames.split(char).length - 1, 0);
    const loveCount = [..."love"].reduce((acc, char) => acc + combinedNames.split(char).length - 1, 0);
    const loveScore = Math.min(100, parseInt(`${trueCount}${loveCount}`));

    // Display result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `💖 Your love score is <strong>${loveScore}%</strong>! ${loveScore > 80 ? "You're a match made in heaven! 💕" : loveScore > 40 ? "There's potential! Keep it up! 😊" : "You might need some work! 😅"}`;
});

