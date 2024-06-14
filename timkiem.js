// JavaScript để hiển thị/ẩn thanh tìm kiếm khi click vào biểu tượng tìm kiếm
const searchIcon = document.getElementById('search-icon');
const searchForm = document.getElementById('search-form');

searchIcon.addEventListener('click', function(event) {
    event.preventDefault();
    if (searchForm.style.display === 'block') {
        searchForm.style.display = 'none';
    } else {
        searchForm.style.display = 'block';
    }
});

// Bổ sung để ẩn thanh tìm kiếm khi click bất kỳ đâu ngoài form
document.addEventListener('click', function(event) {
    const isClickInside = searchForm.contains(event.target) || searchIcon.contains(event.target);
    if (!isClickInside) {
        searchForm.style.display = 'none';
    }
});
