const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 20;

let snake, direction, food, score, game;

function resetGame() {
    snake = [{ x: 200, y: 200 }];
    direction = "RIGHT";
    score = 0;

    food = {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box
    };
}

function startGame() {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("gameOver").classList.add("hidden");

    resetGame();

    if (game) clearInterval(game);
    game = setInterval(draw, 120);
}

// ✅ TECLADO CORRIGIDO
window.addEventListener("keydown", e => {
    e.preventDefault();

    if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    else if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    else if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    else if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});

function drawGrid() {
    ctx.strokeStyle = "#1a1a1a";
    for (let i = 0; i < 400; i += box) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 400);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(400, i);
        ctx.stroke();
    }
}

function draw() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 400, 400);

    drawGrid();

    // cobra
    snake.forEach((p, i) => {
        ctx.fillStyle = i === 0 ? "#0f0" : "#0a0";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#0f0";
        ctx.fillRect(p.x, p.y, box, box);
        ctx.shadowBlur = 0;
    });

    // comida
    ctx.fillStyle = "red";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "red";
    ctx.fillRect(food.x, food.y, box, box);
    ctx.shadowBlur = 0;

    let x = snake[0].x;
    let y = snake[0].y;

    if (direction === "UP") y -= box;
    if (direction === "DOWN") y += box;
    if (direction === "LEFT") x -= box;
    if (direction === "RIGHT") x += box;

    // comeu
    if (x === food.x && y === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.pop();
    }

    const head = { x, y };

    // colisão
    if (
        x < 0 || y < 0 ||
        x >= 400 || y >= 400 ||
        snake.some(p => p.x === x && p.y === y)
    ) {
        clearInterval(game);

        document.getElementById("finalScore").innerText =
            "Pontuação: " + score;

        document.getElementById("gameOver").classList.remove("hidden");
        return;
    }

    snake.unshift(head);
}