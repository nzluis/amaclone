import { Product } from "./models/productModel";
import { User } from "./models/userModel";
import bcrypt from 'bcryptjs'

export const sampleProducts: Product[] = [
    {   
        name: 'UAE maillot',
        slug: 'uae-maillot',
        image: '../images/uae.jpg',
        category: 'Maillots',
        brand: "Pissei",
        price: 80,
        countInStock: 15,
        description: 'high quality',
        rating: 4.5,
        numReviews: 10,
    },
    {
        name: 'JUMBO maillot',
        slug: 'jumbo-maillot',
        image: '../images/jumbo.jpg',
        category: 'Maillots',
        brand: "AGU",
        price: 80,
        countInStock: 10,
        description: 'high quality',
        rating: 3.5,
        numReviews: 13,
    },
    {
        name: 'MOVISTAR maillot',
        slug: 'movistar-maillot',
        image: '../images/movistar.jpg',
        category: 'Maillots',
        brand: "Alé",
        price: 80,
        countInStock: 20,
        description: 'high quality',
        rating: 4.5,
        numReviews: 68,
    },
    {
        name: 'LIDL maillot',
        slug: 'lidl-maillot',
        image: '../images/lidl.jpg',
        category: 'Maillots',
        brand: "unknown",
        price: 80,
        countInStock: 5,
        description: 'high quality',
        rating: 4,
        numReviews: 17,
    },
    {
        name: 'INEOS maillot',
        slug: 'ineos-maillot',
        image: '../images/ineos.jpg',
        category: 'Maillots',
        brand: "unknown",
        price: 80,
        countInStock: 60,
        description: 'high quality',
        rating: 3.5,
        numReviews: 32,
    },
    {
        name: 'ASTANA maillot',
        slug: 'astana-maillot',
        image: '../images/astana.jpg',
        category: 'Maillots',
        brand: "unknown",
        price: 80,
        countInStock: 23,
        description: 'high quality',
        rating: 3,
        numReviews: 3,
    },
    {
        name: 'BURGOS BH maillot',
        slug: 'burgos-maillot',
        image: '../images/burgos.jpg',
        category: 'Maillots',
        brand: "unknown",
        price: 80,
        countInStock: 0,
        description: 'high quality',
        rating: 5,
        numReviews: 98,
    },
    {
        name: 'ALPECIN maillot',
        slug: 'alpecin-maillot',
        image: '../images/alpecin.jpg',
        category: 'Maillots',
        brand: "unknown",
        price: 80,
        countInStock: 15,
        description: 'high quality',
        rating: 4.2,
        numReviews: 8,
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