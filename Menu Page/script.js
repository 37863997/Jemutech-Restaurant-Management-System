const menuItems = {
    'starters': [
        { name: 'Bruschetta',  price: 50 },
        { name: 'calamari',  price: 40},
        { name: 'Fried Ravioli',  price: 30 },
        { name: 'Fried Green Beans', price: 35 },
        { name: 'Zucchini Fries',  price: 70 },
        { name: 'Eggplant Bites',  price: 60 },



    ],
    'main-courses': [
        { name: 'Cheeseburger',  price: 3 },
        { name: 'cheese sandwich',  price: 55},
        { name: 'Spicy chicken',  price: 54 },
        { name: 'Hot dog',  price: 55},
        
    ],
    'desserts': [
        { name: 'Cheese cake',  price: 6.44 },
        { name: 'French Gelato',  price: 24.10 },
        { name: 'ripple layer CAKE',  price:  23.30 },
        { name: 'Dessert sampler',  price:  12.42},
        { name: 'Apple Fritters',  price: 18.33},
        { name: 'Skillet Brownie',  price:12.44 },
        { name: 'Tiramisu',  price: 43.22 },
        
    ],
    'drinks': [
        { name: 'Milk Shake',  price:  58 },
        { name: 'Orange juice',  price:  66 },
        { name: 'Lemon Tea',  price:  65 },
        { name: 'Coffee',  price:  75 },
        { name: 'Iced Tea',  price:  120 },
        
        
    ]
};
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-button');
    const categories = document.querySelectorAll('.category');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            categories.forEach(cat => {
                const dataCategory = cat.querySelector('.data-category').textContent.trim().toLowerCase();
                if (dataCategory === category) {
                    cat.style.display = 'block';
                } else {
                    cat.style.display = 'none';
                }
            });
        });
    });

    // Initially hide all categories except the first one
    categories.forEach((cat, index) => {
        if (index === 0) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });
});

