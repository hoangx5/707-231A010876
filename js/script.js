    const symbols = ["🍎","🍌","🍇","🍒"];
    let cards = [...symbols, ...symbols]; // 4 cặp
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let moves = 0;

    // Shuffle
    function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
    }

    // Render cards
    function initGame() {
    const board = document.getElementById("gameBoard");
    board.innerHTML = "";
    cards = shuffle(cards);

    cards.forEach((symbol, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;

        card.innerHTML = `
        <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back">${symbol}</div>
        </div>
        `;

        card.addEventListener("click", () => flipCard(card));
        board.appendChild(card);
    });
    }

    // Flip logic
    function flipCard(card) {
    if (lockBoard || card === firstCard || card.classList.contains("matched")) return;

    card.classList.add("flip");

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    moves++;
    document.getElementById("moves").innerText = moves;

    checkMatch();
    }

    // Check match
    function checkMatch() {
    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        resetTurn();
        checkWin();
    } else {
        lockBoard = true;
        setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetTurn();
        }, 800);
    }
    }

    // Reset turn
    function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
    }

    // Check win
    function checkWin() {
    const matched = document.querySelectorAll(".matched");
    if (matched.length === cards.length) {
        setTimeout(() => {
        alert("🎉 Bạn đã thắng!");
        }, 300);
    }
    }

    // Reset game
    function resetGame() {
    moves = 0;
    document.getElementById("moves").innerText = moves;
    initGame();
    }

    // Start
    initGame();