document.addEventListener('DOMContentLoaded', () => {
    // 캔버스 만들기
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    // 이미지 넣기
    const background = new Background('src/background/cafeteria.jpg', canvas.width, canvas.height);
    const character = new Character('src/characters/poony.png', 20, 50);

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        background.draw(ctx);
        character.draw(ctx);
        character.update();

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});
