// Lấy modal và nút đóng
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];

// Lấy phần tử Home và thêm sự kiện click
var homeLink = document.getElementById('homeLink');
homeLink.addEventListener('click', function() {
    modal.style.display = 'block'; // Hiển thị modal khi click vào Home
});

// Đóng modal khi click vào nút đóng (x)
span.addEventListener('click', function() {
    modal.style.display = 'none'; // Ẩn modal khi click vào nút đóng
});

// Đóng modal khi click bên ngoài vùng modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
