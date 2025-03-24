// Firebase Configuration and Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjbEkfu8fJmPTDQ8xksGehPday9lrcSrg",
    authDomain: "abdullah-bb8ab.firebaseapp.com",
    projectId: "abdullah-bb8ab",
    storageBucket: "abdullah-bb8ab.appspot.com",
    messagingSenderId: "286504008164",
    appId: "1:286504008164:web:8642bc9d56f36393052ff1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Global variables
let allQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = {};
let timeLeft = 0;
let timerInterval;
let currentTestType = '';

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('userEmail').textContent = user.email;
        document.getElementById('testSelection').style.display = 'flex';
    } else {
        window.location.href = "login.html";
    }
});

// Logout function
window.logout = function() {
    signOut(auth).then(() => {
        window.location.href = "login.html";
    }).catch((error) => {
        console.error("Logout error:", error);
        alert("Error during logout. Please try again.");
    });
};

// Test selection functions
window.startTest = function(testType) {
    currentTestType = testType;
    document.getElementById('testSelection').style.display = 'none';
    document.getElementById('testContainer').style.display = 'block';
    document.getElementById('previousScores').innerHTML = '';
    
    // Set test title
    const testTitles = {
        'physics': 'Physics Test',
        'chemistry': 'Chemistry Test',
        'math': 'Mathematics Test',
        'english': 'English Test',
        'complete': 'Complete ECAT Test'
    };
    document.getElementById('testTitle').textContent = testTitles[testType];
    
    // Set time limit based on test type (in seconds)
    const testTimes = {
        'physics': 30 * 60,    // 30 minutes
        'chemistry': 30 * 60,  // 30 minutes
        'math': 30 * 60,       // 30 minutes
        'english': 10 * 60,    // 10 minutes
        'complete': 100 * 60   // 100 minutes
    };
    
    timeLeft = testTimes[testType];
    startTimer();
    
    // Select questions based on test type
    selectQuestions(testType);
    renderQuestion(0);
    renderNavigation();
    updateButtons();
};

window.backToTests = function() {
    if (confirm("Are you sure you want to leave this test? Your progress will be lost.")) {
        document.getElementById('testSelection').style.display = 'flex';
        document.getElementById('testContainer').style.display = 'none';
        document.getElementById('scoreDisplay').innerHTML = '';
        document.getElementById('previousScores').innerHTML = '';
        clearInterval(timerInterval);
        
        // Reset test state
        allQuestions = [];
        currentQuestionIndex = 0;
        userAnswers = {};
    }
};

function selectQuestions(testType) {
    userAnswers = {};
    
    switch(testType) {
        case 'physics':
            allQuestions = shuffleArray([...physicsQuestions]).slice(0, 30)
                .map(q => ({ ...q, subject: "Physics" }));
            break;
        case 'chemistry':
            allQuestions = shuffleArray([...chemistryQuestions]).slice(0, 30)
                .map(q => ({ ...q, subject: "Chemistry" }));
            break;
        case 'math':
            allQuestions = shuffleArray([...mathQuestions]).slice(0, 30)
                .map(q => ({ ...q, subject: "Math" }));
            break;
        case 'english':
            default:
            allQuestions = shuffleArray([...englishQuestions]).slice(0, 10)
                .map(q => ({ ...q, subject: "English" }));
            break;
        case 'complete':
            const physics = shuffleArray([...physicsQuestions]).slice(0, 30)
                .map(q => ({ ...q, subject: "Physics" }));
            const chemistry = shuffleArray([...chemistryQuestions]).slice(0, 30)
                .map(q => ({ ...q, subject: "Chemistry" }));
            const math = shuffleArray([...mathQuestions]).slice(0, 30)
                .map(q => ({ ...q, subject: "Math" }));
            const english = shuffleArray([...englishQuestions]).slice(0, 10)
                .map(q => ({ ...q, subject: "English" }));
            allQuestions = [...physics, ...chemistry, ...math, ...english];
            break;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.querySelector('.submit-btn').disabled = true;
            calculateScore();
            alert("Time's up! Your test has been submitted.");
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    
    document.getElementById('timer').innerText = 
        `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function renderQuestion(index) {
    const questionsContainer = document.getElementById('questionsContainer');
    const question = allQuestions[index];

    questionsContainer.innerHTML = `
        <div class="question">
            <p>${index + 1}. ${question.question}</p>
            <div class="options">
                <label><input type="radio" name="q${index}" value="A" ${userAnswers[index] === "A" ? "checked" : ""}> ${question.options.A}</label>
                <label><input type="radio" name="q${index}" value="B" ${userAnswers[index] === "B" ? "checked" : ""}> ${question.options.B}</label>
                <label><input type="radio" name="q${index}" value="C" ${userAnswers[index] === "C" ? "checked" : ""}> ${question.options.C}</label>
                <label><input type="radio" name="q${index}" value="D" ${userAnswers[index] === "D" ? "checked" : ""}> ${question.options.D}</label>
            </div>
        </div>
    `;

    updateNavigation();
    
    if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }

    document.querySelectorAll(`input[name="q${index}"]`).forEach(input => {
        input.addEventListener("change", function() {
            userAnswers[index] = this.value; 
            updateNavigation(); 
        });
    });
}

function renderNavigation() {
    const navContainer = document.getElementById('questionNav');
    navContainer.innerHTML = "";

    allQuestions.forEach((_, index) => {
        const navItem = document.createElement("div");
        navItem.classList.add("nav-circle");
        navItem.innerText = index + 1;

        navItem.onclick = () => {
            currentQuestionIndex = index;
            renderQuestion(index);
        };

        navContainer.appendChild(navItem);
    });

    updateNavigation();
}

function updateNavigation() {
    const navItems = document.querySelectorAll(".nav-circle");
    
    navItems.forEach((item, index) => {
        item.classList.remove("active", "answered");
        
        if (index === currentQuestionIndex) {
            item.classList.add("active");
        } else if (userAnswers[index]) {
            item.classList.add("answered");
        }
    });
}

window.prevQuestion = function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion(currentQuestionIndex);
    }
    updateButtons();
};

window.nextQuestion = function() {
    if (currentQuestionIndex < allQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
    }
    updateButtons();
};

function updateButtons() {
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = currentQuestionIndex === allQuestions.length - 1;
}

window.calculateScore = function() {
    if (Object.keys(userAnswers).length === 0) {
        if (!confirm("You haven't answered any questions. Are you sure you want to submit?")) {
            return;
        }
    } else if (!confirm("Are you sure you want to submit your test?")) {
        return;
    }
    
    clearInterval(timerInterval);
    
    let score = 0;
    let subjectScores = {
        Physics: 0,
        Chemistry: 0,
        Math: 0,
        English: 0
    };

    allQuestions.forEach((question, index) => {
        const selectedOption = userAnswers[index];

        if (selectedOption) {
            if (selectedOption === question.answer) {
                score += 4;
                subjectScores[question.subject] += 4;
            } else {
                score -= 1;
                subjectScores[question.subject] -= 1;
            }
        }
    });

    const totalPossible = allQuestions.length * 4;
    let percentage = (score / totalPossible) * 100;

    let scoreHTML = `
        <div class="score-item">
            <h3>Test Results</h3>
            <p><strong>Test Type:</strong> ${currentTestType.toUpperCase()}</p>
            <p><strong>Total Score:</strong> ${score} / ${totalPossible} (${percentage.toFixed(2)}%)</p>
    `;

    // Show subject scores only for complete test
    if (currentTestType === 'complete') {
        scoreHTML += `
            <p><strong>Subject Breakdown:</strong></p>
            <p>Physics: ${subjectScores.Physics} / 120</p>
            <p>Chemistry: ${subjectScores.Chemistry} / 120</p>
            <p>Math: ${subjectScores.Math} / 120</p>
            <p>English: ${subjectScores.English} / 40</p>
        `;
    }

    scoreHTML += `</div>`;
    document.getElementById('scoreDisplay').innerHTML = scoreHTML;
    document.querySelector('.submit-btn').disabled = true;

    // Save score to Firebase
    saveScore(score, subjectScores, currentTestType);
};

async function saveScore(score, subjectScores, testType) {
    const user = auth.currentUser;
    if (user) {
        const scoreData = {
            userId: user.uid,
            email: user.email,
            testType: testType,
            totalScore: score,
            physicsScore: subjectScores.Physics,
            chemistryScore: subjectScores.Chemistry,
            mathScore: subjectScores.Math,
            englishScore: subjectScores.English,
            timestamp: new Date()
        };

        try {
            await addDoc(collection(db, "scores"), scoreData);
            console.log("Score saved successfully!");
        } catch (error) {
            console.error("Error saving score: ", error);
            alert("Error saving your score. Please try again.");
        }
    }
}

window.viewPreviousScores = async function() {
    const user = auth.currentUser;
    if (user) {
        try {
            const scoresQuery = query(
                collection(db, "scores"), 
                where("userId", "==", user.uid),
                orderBy("timestamp", "desc")
            );
            const querySnapshot = await getDocs(scoresQuery);

            let scoresHTML = "<h3>Your Previous Scores</h3><div class='scores-container'>";
            
            if (querySnapshot.empty) {
                scoresHTML += "<p>No previous scores found.</p>";
            } else {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    scoresHTML += `
                        <div class="score-item">
                            <p><strong>${data.testType.toUpperCase()} Test</strong></p>
                            <p>Date: ${data.timestamp.toDate().toLocaleString()}</p>
                            <p>Total Score: ${data.totalScore}</p>
                            ${data.testType === 'complete' ? `
                                <p>Physics: ${data.physicsScore}, Chemistry: ${data.chemistryScore}</p>
                                <p>Math: ${data.mathScore}, English: ${data.englishScore}</p>
                            ` : ''}
                        </div>
                    `;
                });
            }
            
            scoresHTML += "</div>";
            document.getElementById('previousScores').innerHTML = scoresHTML;
        } catch (error) {
            console.error("Error fetching scores: ", error);
            document.getElementById('previousScores').innerHTML = 
                "<p>Error loading scores. Please try again.</p>";
        }
    }
};
// At the beginning of your test page JavaScript (app.js)
document.addEventListener('DOMContentLoaded', function() {
    // Get the selected test type from localStorage
    const testType = localStorage.getItem('selectedTestType') || 'complete';
    
    // Clear the stored value
    localStorage.removeItem('selectedTestType');
    
    // Alternatively, if using URL parameters:
    // const urlParams = new URLSearchParams(window.location.search);
    // const testType = urlParams.get('testType') || 'complete';
    
    // Automatically start the selected test
    startTest(testType);
});