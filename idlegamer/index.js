// All Objects:
const upgradesEl = document.getElementById("upg");
const totalEl = document.getElementById("total");
const scoreEl = document.getElementById("score");
const modEl = document.getElementById("mod");
const rankEl = document.getElementById("rank");
const resetEl = document.getElementById("reset");
const cursorEl = document.getElementById("cursor");
const consoleEl = document.getElementById("console");
const phoneEl = document.getElementById("phone");
const laptopEl = document.getElementById("laptop");
const mouseEl = document.getElementById("mouse");
const keyboardEl = document.getElementById("keyboard");
const monitorEl = document.getElementById("monitor");
const headsetEl = document.getElementById("headset");
const desktopEl = document.getElementById("desktop");
const phoneVREl = document.getElementById("phoneVR");
const psvrEl = document.getElementById("psvr");
const quest2El = document.getElementById("quest2");
const viveEl = document.getElementById("vive");
const indexEl = document.getElementById("index");

const controllerEl = document.getElementById("controller");

const modPurchaseEl = document.getElementById("modPurchase");
const modLabelEl = document.getElementById("modLabel");
const rankPurchaseEl = document.getElementById("rankPurchase");
const rankLabelEl = document.getElementById("rankLabel")
const cursorPurchaseEl = document.getElementById("cursorPurchase");
const cursorLabelEl = document.getElementById("cursorLabel");
const consolePurchaseEl = document.getElementById("consolePurchase");
const consoleLabelEl = document.getElementById("consoleLabel");

const phonePurchaseEl = document.getElementById("phonePurchase");
const phoneLabelEl = document.getElementById("phoneLabel");

const laptopPurchaseEl = document.getElementById("laptopPurchase");
const laptopLabelEl = document.getElementById("laptopLabel");

const mousePurchaseEl = document.getElementById("mousePurchase");
const mouseLabelEl = document.getElementById("mouseLabel");

const keyboardPurchaseEl = document.getElementById("keyboardPurchase");
const keyboardLabelEl = document.getElementById("keyboardLabel");

const monitorPurchaseEl = document.getElementById("monitorPurchase");
const monitorLabelEl = document.getElementById("monitorLabel");

const headsetPurchaseEl = document.getElementById("headsetPurchase");
const headsetLabelEl = document.getElementById("headsetLabel");

const desktopPurchaseEl = document.getElementById("desktopPurchase");
const desktopLabelEl = document.getElementById("desktopLabel");

const phoneVRPurchaseEl = document.getElementById("phoneVRPurchase");
const phoneVRLabelEl = document.getElementById("phoneVRLabel");

const psvrPurchaseEl = document.getElementById("psvrPurchase");
const psvrLabelEl = document.getElementById("psvrLabel");

const quest2PurchaseEl = document.getElementById("quest2Purchase");
const quest2LabelEl = document.getElementById("quest2Label");

const vivePurchaseEl = document.getElementById("vivePurchase");
const viveLabelEl = document.getElementById("viveLabel");

const indexPurchaseEl = document.getElementById("indexPurchase");
const indexLabelEl = document.getElementById("indexLabel");

// All Variables:
var score = 0;
var mod = 1;
var rank = "No";
var time = 1600;
var resets = 0;
var cursors = 0;
var phones = 0;
var consoles = 0;
var laptops = 0;
var mice = 0;
var keyboards = 0;
var monitors = 0;
var headsets = 0;
var desktops = 0;
var phoneVRs = 0;
var psvrs = 0;
var quest2s = 0;
var vives = 0;
var indexes = 0;
var cursorPrice = 100;
var phonePrice = 1000;
var consolePrice = 5000;
var laptopPrice = 25000;
var mousePrice = 125000;
var keyboardPrice = 625000;
var monitorPrice = 3125000;
var headsetPrice = 15625000;
var desktopPrice = 78125000;
var phoneVRPrice = 390625000;
var psvrPrice = 1953125000;
var quest2Price = 9765625000;
var vivePrice = 48828125000;
var indexPrice = 244140625000;
var upgrades = 0;
var totalScore = 0;

//Update Score Function:
var updateScore = function() {
    totalScore = score;
    scoreEl.textContent = `${score} Points`;
    totalEl.textContent = totalScore;
    modEl.textContent = mod;
    rankEl.textContent = rank;
    resetEl.textContent = resets;
    cursorEl.textContent = cursors;
    consoleEl.textContent = consoles;
    phoneEl.textContent = phones;
    laptopEl.textContent = laptops;
    mouseEl.textContent = mice;
    keyboardEl.textContent = keyboards;
    monitorEl.textContent = monitors;
    headsetEl.textContent = headsets;
    desktopEl.textContent = desktops;
    phoneVREl.textContent = phoneVRs;
    psvrEl.textContent = psvrs;
    quest2El.textContent = quest2s;
    viveEl.textContent = vives;
    indexEl.textContent = indexes;
    upgradesEl.textContent = upgrades;
    var currentTime = new Date().getTime();
    localStorage.setItem("time", currentTime);
    var modDisplayPrice = mod * mod * 200
    if (modDisplayPrice > 1000000000000000000) {
        modDisplayPrice = Math.round(modDisplayPrice / 1000000000000000000) + " QI"
    } else if (modDisplayPrice > 1000000000000000) {
        modDisplayPrice = Math.round(modDisplayPrice / 1000000000000000) + " QU"
    } else if (modDisplayPrice > 1000000000000) {
        modDisplayPrice = Math.round(modDisplayPrice / 1000000000000) + " T"
    } else if (modDisplayPrice > 1000000000) {
        modDisplayPrice = Math.round(modDisplayPrice / 1000000000) + " B"
    } else if (modDisplayPrice > 1000000) {
        modDisplayPrice = Math.round(modDisplayPrice / 1000000) + " M"
    }
    modLabelEl.textContent =
        "Purchase a *2 multiplier\n" + modDisplayPrice + " points!";
    cursorLabelEl.textContent = `Purchase a cursor\n${cursorPrice} points!`;
    phoneLabelEl.textContent = `Purchase a phone\n${phonePrice} points!`;
    consoleLabelEl.textContent = `Purchase a console\n${consolePrice} points!`;
    laptopLabelEl.textContent = `Purchase a laptop\n${laptopPrice} points!`;
    mouseLabelEl.textContent = `Purchase a mouse\n${mousePrice} points!`;
    keyboardLabelEl.textContent = `Purchase a keyboard\n${keyboardPrice} points!`;
    monitorLabelEl.textContent = `Purchase a monitor\n${monitorPrice} points!`;
    headsetLabelEl.textContent = `Purchase a headset\n${headsetPrice} points!`;
    desktopLabelEl.textContent = `Purchase a desktop\n${desktopPrice} points!`;
    phoneVRLabelEl.textContent =
        `Purchase a phone VR headset\n${phoneVRPrice} points!`;
    psvrLabelEl.textContent =
        `Purchase a PSVR\n${psvrPrice} points!`;
    quest2LabelEl.textContent =
        `Purchase an Oculus Quest 2\n${quest2Price} points!`;
    viveLabelEl.textContent = `Purchase an HTC VIVE\n${vivePrice} points!`;
    indexLabelEl.textContent =
        `Purchase a Valve Index\n${indexPrice} points!`;

    var scoreDisplay = score
    if (scoreDisplay > 1000000000000000000) {
        scoreDisplay = Math.round(scoreDisplay / 1000000000000000000) + " QI"
    } else if (scoreDisplay > 1000000000000000) {
        scoreDisplay = Math.round(scoreDisplay / 1000000000000000) + " QU"
    } else if (scoreDisplay > 1000000000000) {
        scoreDisplay = Math.round(scoreDisplay / 1000000000000) + " T"
    } else if (scoreDisplay > 1000000000) {
        scoreDisplay = Math.round(scoreDisplay / 1000000000) + " B"
    } else if (scoreDisplay > 1000000) {
        scoreDisplay = Math.round(scoreDisplay / 1000000) + " M"
    }
    document.title = `
        Idle Gamer - ${ scoreDisplay }
        Points `
};
//All Functions:
var resetGame = function() {
    score = 0;
    mod = 1;
    rank = "No";
    time = 1600;
    resets = 0;
    cursors = 0;
    phones = 0;
    consoles = 0;
    laptops = 0;
    mice = 0;
    keyboards = 0;
    monitors = 0;
    headsets = 0;
    desktops = 0;
    phoneVRs = 0;
    psvrs = 0;
    quest2s = 0;
    vives = 0;
    indexes = 0;
    cursorPrice = 100;
    phonePrice = 1000;
    consolePrice = 5000;
    laptopPrice = 25000;
    mousePrice = 125000;
    keyboardPrice = 625000;
    monitorPrice = 3125000;
    headsetPrice = 15625000;
    desktopPrice = 78125000;
    phoneVRPrice = 390625000;
    psvrPrice = 1953125000;
    quest2Price = 9765625000;
    vivePrice = 48828125000;
    indexPrice = 244140625000;
    upgrades = 0;
    totalScore = 0;
}
var saveGame = function() {
    var saveCode =
        score +
        "/" +
        mod +
        "/" +
        rank +
        "/" +
        resets +
        "/" +
        phones +
        "/" +
        consoles +
        "/" +
        laptops +
        "/" +
        mice +
        "/" +
        keyboards +
        "/" +
        monitors +
        "/" +
        headsets +
        "/" +
        desktops +
        "/" +
        phoneVRs +
        "/" +
        psvrs +
        "/" +
        quest2s +
        "/" +
        vives +
        "/" +
        indexes +
        "/" +
        time +
        "/" +
        upgrades +
        "/" +
        cursors +
        "/" +
        cursorPrice +
        "/" +
        phonePrice +
        "/" +
        consolePrice +
        "/" +
        laptopPrice +
        "/" +
        mousePrice +
        "/" +
        keyboardPrice +
        "/" +
        monitorPrice +
        "/" +
        headsetPrice +
        "/" +
        desktopPrice +
        "/" +
        phoneVRPrice +
        "/" +
        psvrPrice +
        "/" +
        quest2Price +
        "/" +
        vivePrice +
        "/" +
        indexPrice;
    localStorage.setItem("save", saveCode);
};
var loadGame = function() {
    var loadCode = localStorage.getItem("save");
    var data = loadCode.split("/");
    score = parseInt(data[0]);
    mod = parseInt(data[1]);
    rank = data[2];
    resets = parseInt(data[3]);
    phones = parseInt(data[4]);
    consoles = parseInt(data[5]);
    laptops = parseInt(data[6]);
    mice = parseInt(data[7]);
    keyboards = parseInt(data[8]);
    monitors = parseInt(data[9]);
    headsets = parseInt(data[10]);
    desktops = parseInt(data[11]);
    phoneVRs = parseInt(data[12]);
    psvrs = parseInt(data[13]);
    quest2s = parseInt(data[14]);
    vives = parseInt(data[15]);
    indexes = parseInt(data[16]);
    time = parseInt(data[17]);
    upgrades = parseInt(data[18]);
    cursors = parseInt(data[19]);
    cursorPrice = parseInt(data[20])
    phonePrice = parseInt(data[21])
    consolePrice = parseInt(data[22])
    laptopPrice = parseInt(data[23])
    mousePrice = parseInt(data[24])
    keyboardPrice = parseInt(data[25])
    monitorPrice = parseInt(data[26])
    headsetPrice = parseInt(data[27])
    desktopPrice = parseInt(data[28])
    phoneVRPrice = parseInt(data[29])
    psvrPrice = parseInt(data[30])
    quest2Price = parseInt(data[31])
    vivePrice = parseInt(data[32])
    indexPrice = parseInt(data[33])
    if (isNaN(score)) {
        alert("New save detected! Welcome to Idle Gamer!")
        resetGame()
    }
    var lastTime = parseInt(localStorage.getItem("time"));
    var currentTime = new Date().getTime();
    localStorage.setItem("time", currentTime);
    var timeSinceOpened = Math.abs(lastTime - currentTime);
    var idleCycles = Math.round(timeSinceOpened / time)
    alert("You've been gone for " + timeSinceOpened / 1000 + " seconds. In that time, your items have clicked " + idleCycles + " times.")
    for (var i = 0; i < idleCycles; i++) {
        clickAll()
    }
    updateScore();
};
//All Purchase Functions:
var onModPurchase = function() {
    if (score >= mod * mod * 200) {
        score -= mod * mod * 200;
        mod = mod * 2;
    } else if (score < mod * mod * 200) {
        alert("You don't have enough money!");
    }
    updateScore();
};
var onCursorPurchase = function() {
    if (score >= cursorPrice) {
        cursors++;
        score -= cursorPrice;
        cursorPrice *= 1.03571429;
        cursorPrice = Math.round(cursorPrice)
        upgrades++;
    } else if (score < cursorPrice) {
        alert("You don't have enough money!");
    }
};

var onPhonePurchase = function() {
    if (score >= phonePrice && mod >= 2) {
        phones++;
        score -= phonePrice;
        phonePrice *= 1.07142858
        phonePrice = Math.round(phonePrice)
        upgrades++;
    } else if (score < phonePrice) {
        alert("You don't have enough money!");
    } else if (mod < 2) {
        alert("Your multiplier isn't high enough! You need a multplier of 2!");
    }
};
var onConsolePurchase = function() {
    if (score >= consolePrice && mod >= 4) {
        consoles++;
        score -= consolePrice;
        consolePrice *= 1.10714287
        consolePrice = Math.round(consolePrice)
        upgrades++;
    } else if (score < consolePrice) {
        alert("You don't have enough money!");
    } else if (mod < 4) {
        alert("Your multiplier isn't high enough! You need a multplier of 4!");
    }
    updateScore();
};
var onLaptopPurchase = function() {
    if (score >= laptopPrice && mod >= 16) {
        laptops++;
        score -= laptopPrice;
        laptopPrice *= 1.14285716
        laptopPrice = Math.round(laptopPrice)
        upgrades++;
    } else if (score < laptopPrice) {
        alert("You don't have enough money!");
    } else if (mod < 16) {
        alert("Your multiplier isn't high enough! You need a multplier of 16!");
    }
    updateScore();
};
var onMousePurchase = function() {
    if (score >= mousePrice && mod >= 32) {
        mice++;
        score -= mousePrice;
        mousePrice *= 1.46428589
        mousePrice = Math.round(mousePrice)
        upgrades++;
    } else if (score < mousePrice) {
        alert("You don't have enough money!");
    } else if (mod < 32) {
        alert("Your multiplier isn't high enough! You need a multplier of 32!");
    }
    updateScore();
};
var onKeyboardPurchase = function() {
    if (score >= keyboardPrice && mod >= 64) {
        keyboards++;
        score -= keyboardPrice;
        keyboardPrice *= 1.50000018
        keyboardPrice = Math.round(keyboardPrice)
        upgrades++;
    } else if (score < keyboardPrice) {
        alert("You don't have enough money!");
    } else if (mod < 64) {
        alert("Your multiplier isn't high enough! You need a multplier of 64!");
    }
    updateScore();
};
var onMonitorPurchase = function() {
    if (score >= monitorPrice && mod >= 128) {
        monitors++;
        score -= monitorPrice;
        monitorPrice *= 1.53571447
        monitorPrice = Math.round(monitorPrice)
        upgrades++;
    } else if (score < monitorPrice) {
        alert("You don't have enough money!");
    } else if (mod < 128) {
        alert("Your multiplier isn't high enough! You need a multplier of 128!");
    }
    updateScore();
};
var onHeadsetPurchase = function() {
    if (score >= headsetPrice && mod >= 256) {
        headsets++;
        score -= headsetPrice;
        headsetPrice *= 1.57142876
        headsetPrice = Math.round(headsetPrice)
        upgrades++;
    } else if (score < headsetPrice) {
        alert("You don't have enough money!");
    } else if (mod < 256) {
        alert("Your multiplier isn't high enough! You need a multplier of 256!");
    }
    updateScore();
};
var onDesktopPurchase = function() {
    if (score >= desktopPrice && mod >= 512) {
        desktops++;
        score -= desktopPrice;
        desktopPrice *= 1.60714305
        desktopPrice = Math.round(desktopPrice)
        upgrades++;
    } else if (score < desktopPrice) {
        alert("You don't have enough money!");
    } else if (mod < 512) {
        alert("Your multiplier isn't high enough! You need a multplier of 512!");
    }
    updateScore();
};
var onPhoneVRPurchase = function() {
    if (score >= phoneVRPrice && mod >= 1024) {
        phoneVRs++;
        score -= phoneVRPrice;
        phoneVRPrice *= 1.64285734
        phoneVRPrice = Math.round(phoneVRPrice)
        upgrades++;
    } else if (score < phoneVRPrice) {
        alert("You don't have enough money!");
    } else if (mod < 1024) {
        alert("Your multiplier isn't high enough! You need a multplier of 1024!");
    }
    updateScore();
};
var onPSVRPurchase = function() {
    if (score >= psvrPrice && mod >= 2048) {
        psvrs++;
        score -= psvrPrice;
        psvrPrice *= 1.67857163
        psvrPrice = Math.round(psvrPrice)
        upgrades++;
    } else if (score < psvrPrice) {
        alert("You don't have enough money!");
    } else if (mod < 2048) {
        alert("Your multiplier isn't high enough! You need a multplier of 2048!");
    }
    updateScore();
};
var onQuest2Purchase = function() {
    if (score >= quest2Price && mod >= 4096) {
        quest2s++;
        score -= quest2Price;
        quest2Price *= 1.71428592
        quest2Price = Math.round(quest2Price)
        upgrades++;
    } else if (score < quest2Price) {
        alert("You don't have enough money!");
    } else if (mod < 4096) {
        alert("Your multiplier isn't high enough! You need a multplier of 4096!");
    }
    updateScore();
};
var onVivePurchase = function() {
    if (score >= vivePrice && mod >= 8192) {
        vives++;
        score -= vivePrice;
        vivePrice *= 1.75000021
        vivePrice = Math.round(vivePrice)
        upgrades++;
    } else if (score < vivePrice) {
        alert("You don't have enough money!");
    } else if (mod < 8192) {
        alert("Your multiplier isn't high enough! You need a multplier of 8192!");
    }
    updateScore();
};
var onIndexPurchase = function() {
    if (score >= indexPrice && mod >= 16384) {
        indexes++;
        score -= indexPrice;
        indexPrice *= 1.7857145
        indexPrice = Math.round(indexPrice)
        upgrades++;
    } else if (score < indexPrice) {
        alert("You don't have enough money!");
    } else if (mod < 16384) {
        alert("Your multiplier isn't high enough! You need a multplier of 16384!");
    }
    updateScore();
};
var onRankPurchase = function() {
    if (
        score >= 1220703125000 * 5 * 5 * 5 &&
        mod >= 262144 &&
        rank === "Streamer with Donations"
    ) {
        resets++;
        score = 0;
        mod = Math.round(resets / 2) * 2;
        rank = "No";
        time /= 2;
        consoles = 0;
        phones = 0;
        laptops = 0;
        mice = 0;
        keyboards = 0;
        monitors = 0;
        headsets = 0;
        desktops = 0;
        phoneVRs = 0;
        psvrs = 0;
        quest2s = 0;
        vives = 0;
        indexes = 0;
        rankLabelEl.textContent = "Rank up\n" + 1220703125000 * 5 + " points!";
        window.clearInterval(clickAll);
        window.setInterval(clickAll, time);
    } else {
        if (
            score >= 1220703125000 * 5 * 5 &&
            mod >= 131072 &&
            indexes > 0 &&
            rank === "Twitch Streamer"
        ) {
            rank = "Streamer with Donations";
            score -= 1220703125000 * 5 * 5;
            rankLabelEl.textContent =
                "Reset\n" + 1220703125000 * 5 * 5 * 5 + " points!";
        } else {
            if (
                score >= 1220703125000 * 5 &&
                mod >= 65536 &&
                desktops > 0 &&
                rank === "Youtuber"
            ) {
                rank = "Twitch Streamer";
                score -= 1220703125000 * 5;
                rankLabelEl.textContent =
                    "Rank up\n" + 1220703125000 * 5 * 5 + " points!";
            } else {
                if (
                    score >= 1220703125000 &&
                    mod >= 32768 &&
                    laptops > 0 &&
                    rank === "No"
                ) {
                    rank = "Youtuber";
                    score -= 1220703125000;
                    rankLabelEl.textContent =
                        "Rank up\n" + 1220703125000 * 5 + " points!";
                }
            }
        }
    }
    updateScore();
};
//All Click Functions:
var onControllerClick = function() {
    score += 1 * mod;
    totalScore += 1 * mod;
    updateScore();
    saveGame();
};
var onCursorClick = function() {
    score += 1 * mod * cursors;
    totalScore += 1 * mod * cursors;
    updateScore();
};
var onConsoleClick = function() {
    if (psvrs > 0) {
        score += 10 * consoles * (5 * psvrs);
    } else {
        score += 10 * consoles;
    }
    updateScore();
};
var onPhoneClick = function() {
    if (phoneVRs > 0) {
        score += 1 * phones * (5 * phoneVRs);
    } else {
        score += 1 * phones;
    }
    updateScore();
};
var onLaptopClick = function() {
    if (quest2s > 0) {
        score += 100 * laptops * (10 * quest2s);
    } else {
        score += 100 * laptops;
    }
    updateScore();
};
var onMouseClick = function() {
    if (vives > 0) {
        score += 1000 * mice * (20 * vives);
    } else {
        score += 1000 * mice;
    }
    updateScore();
};
var onKeyboardClick = function() {
    if (vives > 0) {
        score += 10000 * keyboards * (20 * vives);
    } else {
        score += 10000 * keyboards;
    }
    updateScore();
};
var onMonitorClick = function() {
    if (indexes > 0) {
        score += 100000 * monitors * (indexes * 50);
    } else {
        score += 100000 * monitors;
    }
    updateScore();
};
var onHeadsetClick = function() {
    if (indexes > 0) {
        score += 1000000 * headsets * (indexes * 50);
    } else {
        score += 1000000 * headsets;
    }
    updateScore();
};

var onDesktopClick = function() {
    if (indexes > 0) {
        score += 10000000 * desktops * (indexes * 50);
    } else {
        score += 10000000 * desktops;
    }
    updateScore();
};
//All Event Listeners:
var detectClick = function(el, func) {
    el.addEventListener("click", func);
};
detectClick(controllerEl, onControllerClick);
detectClick(modPurchaseEl, onModPurchase);
detectClick(rankPurchaseEl, onRankPurchase);
detectClick(cursorPurchaseEl, onCursorPurchase);
detectClick(phonePurchaseEl, onPhonePurchase);
detectClick(consolePurchaseEl, onConsolePurchase);
detectClick(laptopPurchaseEl, onLaptopPurchase);
detectClick(mousePurchaseEl, onMousePurchase);
detectClick(keyboardPurchaseEl, onKeyboardPurchase);
detectClick(monitorPurchaseEl, onMonitorPurchase);
detectClick(headsetPurchaseEl, onHeadsetPurchase);
detectClick(desktopPurchaseEl, onDesktopPurchase);
detectClick(phoneVRPurchaseEl, onPhoneVRPurchase);
detectClick(psvrPurchaseEl, onPSVRPurchase);
detectClick(quest2PurchaseEl, onQuest2Purchase);
detectClick(vivePurchaseEl, onVivePurchase);
detectClick(indexPurchaseEl, onIndexPurchase);
window.addEventListener("load", updateScore);
//All Intervals:


var checkBG = function() {
    document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R19baa1a5815a5b3181c319bee2c8aa12?rik=koHq4MzSlxaPOQ&pid=ImgRaw');"
    if (mice > 0) {
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R23311f3a9b4d887b9519bd35456fc18c?rik=8%2bzm81o%2bWkY91w&riu=http%3a%2f%2fcdn.decoist.com%2fwp-content%2fuploads%2f2012%2f04%2fsmall-dorm-room-design-idea.jpg&ehk=IPglkeabJqNjJr1T5iPU%2fiRzkZAhkuj9IMzF5%2bNNJvg%3d&risl=&pid=ImgRaw')"
        if (headsets > 0) {
            document.body.style.backgroundImage = "url('https://unhappyhipsters.com/wp-content/uploads/2019/03/writing-desk-ideas.jpeg')"
            if (phoneVRs > 0) {
                document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/g0E4m1uPpik/maxresdefault.jpg')"
            }
        }
    }
}
var clickAll = function() {
    for (var i = 0; i < resets * 2 + 1; i++) {
        if (upgrades > 0) {
            onCursorClick();
            onConsoleClick();
            onPhoneClick();
            onLaptopClick();
            onMouseClick();
            onKeyboardClick();
            onMonitorClick();
            onHeadsetClick();
            onDesktopClick();
            saveGame();
        }
    }
};
var refresh = function() {
    clickAll()
    checkBG()
}
window.clearInterval(refresh);
window.setInterval(refresh, time);
checkBG()
    /*
    Add:
      Stats:
        Time Played
    */
loadGame();
var getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
var messages = [
    "Here to cheat?",
    "Poking around?",
    "What are you doing?",
    "How are you doing?",
    "ShadowDeveloper Here!",
    "Hello!",
    "Why are you here?",
    "Are you a web dev looking for bugs?",
    "Are you a cheater trying to get some free points?"
];
var logMessage = function() {
    var message = messages[getRandomInt(0, messages.length - 1)];
    console.log(message);
    messages.splice(messages.indexOf(message), 1);
};
logMessage();
logMessage();
logMessage();
logMessage();