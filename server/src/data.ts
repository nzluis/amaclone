import { Product } from "./models/productModel";
import { User } from "./models/userModel";
import bcrypt from 'bcryptjs'

export const sampleProducts: Product[] = [
    {   
        name: 'UAE maillot',
        slug: 'uae-maillot',
        image: '../public/images/uae.jpg',
        category: 'Maillots',
        brand: "Pissei",
        price: 80,
        countInStock: 10,
        description: 'high quality',
        rating: 4.5,
        numReviews: 10,
    },
    {
        name: 'JUMBO maillot',
        slug: 'jumbo-maillot',
        image: '../public/images/jumbo.jpg',
        category: 'Maillots',
        brand: "AGU",
        price: 80,
        countInStock: 10,
        description: 'high quality',
        rating: 4.5,
        numReviews: 10,
    },
    {
        name: 'MOVISTAR maillot',
        slug: 'movistar-maillot',
        image: '../public/images/movistar.jpg',
        category: 'Maillots',
        brand: "Alé",
        price: 80,
        countInStock: 10,
        description: 'high quality',
        rating: 4.5,
        numReviews: 10,
    },
    {
        name: 'INEOS maillot',
        slug: 'ineos-maillot',
        image: '../public/images/ineos.jpg',
        category: 'Maillots',
        brand: "Bioracer",
        price: 80,
        countInStock: 10,
        description: 'high quality',
        rating: 4.5,
        numReviews: 10,
    },
    {
        name: 'QUICKSTEP maillot',
        slug: 'quickstep-maillot',
        image: '../public/images/soudal.jpg',
        category: 'Maillots',
        brand: "Castelli",
        price: 80,
        countInStock: 10,
        description: 'high quality',
        rating: 4.5,
        numReviews: 10,
    }
]

export const sampleUsers: User[] = [
    {
        name: 'Joe',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true
    },
    {
        name: 'John',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false
    }
]