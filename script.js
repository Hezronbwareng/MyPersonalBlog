const categoryFilters = document.querySelectorAll('.category-filter');
const blogPosts = document.querySelectorAll('.blog-post');

categoryFilters.forEach(filter => {
    filter.addEventListener('click', (e) => {
        e.preventDefault();
        const category = filter.getAttribute('data-category');

        blogPosts.forEach(post => {
            post.style.display = 'none';
        });

        if (category === 'all') {
            blogPosts.forEach(post => {
                post.style.display = 'block';
            });
        } else {
            document.querySelectorAll(`.${category}`).forEach(post => {
                post.style.display = 'block';
            });
        }
    });
});

// footer copyright
const currentYear = new Date().getFullYear()
document.getElementById("currentYear").textContent = currentYear

//console.log(currentYear)