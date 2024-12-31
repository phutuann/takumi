function addFlashcard() {
    // Tạo các thẻ nhập liệu cho từ vựng và âm thanh
    const word = prompt("Nhập từ vựng Tiếng Pháp:");
    const sound = prompt("Nhập đường dẫn đến âm thanh (ví dụ: 'sounds/word.mp3'):");
    const image = prompt("Nhập đường dẫn đến hình ảnh (ví dụ: 'images/image.jpg'):");
    const meaning = prompt("Nhập nghĩa của từ:");

    // Tạo HTML cho thẻ từ vựng
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');
    
    flashcard.innerHTML = `
        <div class="front">
            <h3>${word}</h3>
            <audio controls>
                <source src="${sound}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
        </div>
        <div class="back">
            <img src="${image}" alt="${word}" style="width: 100%; border-radius: 8px;">
            <p><strong>Nghĩa:</strong> ${meaning}</p>
        </div>
    `;

    // Thêm thẻ vào danh sách
    document.getElementById('flashcard-list').appendChild(flashcard);
}
