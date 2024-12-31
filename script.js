// Lấy phần tử nút chuyển đổi
const themeToggleButton = document.getElementById('theme-toggle');

// Kiểm tra chế độ hiện tại từ localStorage và áp dụng
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = 'Chế độ ban ngày';
} else {
    document.body.classList.remove('dark-mode');
    themeToggleButton.textContent = 'Chế độ ban đêm';
}

// Xử lý sự kiện nhấn nút để chuyển đổi chế độ
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Lưu trạng thái của chế độ vào localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = 'Chế độ ban ngày';
    } else {
        localStorage.removeItem('theme');
        themeToggleButton.textContent = 'Chế độ ban đêm';
    }
});
