 const bcrypt = require('bcryptjs')

 const data = {
    users: [
        {
            name: 'Shreedhar',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name: 'aditya',
            email: 'customer@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },

    ],
    products: [
        {
            name: 'Tablets and Mobilephones',
            category: 'mobiles',
            image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter20/OnePlus/DesktopGateway_CategoryCard_379X304._SY304_CB418738800_.jpg',
            price: 12000,
            brand: 'Samsung',
            rating: 4.3,
            countInStock: 10,
            numReviews: 10,
            description: 'Amazing quality of smarphones',
        },
        {
            name: 'Tshirts',
            category: 'shirts',
            image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter20/OnePlus/DesktopGateway_CategoryCard_379X304._SY304_CB418738800_.jpg',
            price: 1200,
            brand: 'Roadster',
            rating: 4.5,
            countInStock: 10,
            numReviews: 17,
            description: 'Amazing quality of Shirts',
        },
        {
            name: 'Washing Machine',
            category: 'Electronic',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US160_FMwebp_QL70_.jpg%201x,%20https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US240_FMwebp_QL65_.jpg%201.5x,%20https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US320_FMwebp_QL65_.jpg%202x,%20https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US400_FMwebp_QL65_.jpg%202.5x,%20https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US480_FMwebp_QL65_.jpg',
            price: 14000,
            brand: 'Lg',
            rating: 4.5,
            countInStock: 10,
            numReviews: 9,
            description: 'Amazing quality of washing machine',
        },
       
        {
            name: 'Watches',
            category: 'Electronic',
            image: 'https://m.media-amazon.com/images/I/61TE85c0WtL._AC_UY218_.jpg%201x,%20https://m.media-amazon.com/images/I/61TE85c0WtL._AC_UY327_FMwebp_QL65_.jpg%201.5x,%20https://m.media-amazon.com/images/I/61TE85c0WtL._AC_UY436_FMwebp_QL65_.jpg%202x,%20https://m.media-amazon.com/images/I/61TE85c0WtL._AC_UY545_FMwebp_QL65_.jpg%202.5x,%20https://m.media-amazon.com/images/I/61TE85c0WtL._AC_UY654_FMwebp_QL65_.jpg',
            price: 7000,
            brand: 'Dollby',
            rating: 4.8,
            countInStock: 100,
            numReviews: 3,
            description: 'Smart headphones and watches',
        },
       
        {
            name: 'PS4',
            category: 'Electronic',
            image: 'https://m.media-amazon.com/images/I/81YBJ4RWDOL._AC_UY218_.jpg%201x,%20https://m.media-amazon.com/images/I/81YBJ4RWDOL._AC_UY327_FMwebp_QL65_.jpg%201.5x,%20https://m.media-amazon.com/images/I/81YBJ4RWDOL._AC_UY436_FMwebp_QL65_.jpg%202x,%20https://m.media-amazon.com/images/I/81YBJ4RWDOL._AC_UY545_FMwebp_QL65_.jpg%202.5x,%20https://m.media-amazon.com/images/I/81YBJ4RWDOL._AC_UY654_FMwebp_QL65_.jpg',
            price: 11000,
            brand: 'playstation',
            rating: 4.8,
            countInStock: 100,
            numReviews: 3,
            description: 'Games an Gaming',
        },
    ]
}

module.exports = data