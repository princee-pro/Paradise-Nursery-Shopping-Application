import snakePlant from '@/assets/snake-plant.jpg';
import spiderPlant from '@/assets/spider-plant.jpg';
import peaceLily from '@/assets/peace-lily.jpg';
import lavender from '@/assets/lavender.jpg';
import rosemary from '@/assets/rosemary.jpg';
import fiddleLeafFig from '@/assets/fiddle-leaf-fig.jpg';
import monstera from '@/assets/monstera.jpg';
import rubberPlant from '@/assets/rubber-plant.jpg';
import aloeVera from '@/assets/aloe-vera.jpg';

export const plants = [
  // Air Purifying Plants
  {
    id: '1',
    name: 'Snake Plant',
    price: 25.99,
    image: snakePlant,
    description: 'Low-maintenance plant that purifies air by removing toxins. Perfect for beginners.',
    category: 'Air Purifying'
  },
  {
    id: '2',
    name: 'Spider Plant',
    price: 18.99,
    image: spiderPlant,
    description: 'Easy-care plant with arching leaves that produces baby plantlets. Great air purifier.',
    category: 'Air Purifying'
  },
  {
    id: '3',
    name: 'Peace Lily',
    price: 32.99,
    image: peaceLily,
    description: 'Beautiful flowering plant that removes harmful toxins from the air.',
    category: 'Air Purifying'
  },

  // Aromatic Plants
  {
    id: '4',
    name: 'Lavender',
    price: 22.99,
    image: lavender,
    description: 'Fragrant herb known for its calming properties and beautiful purple flowers.',
    category: 'Aromatic'
  },
  {
    id: '5',
    name: 'Rosemary',
    price: 19.99,
    image: rosemary,
    description: 'Culinary herb with needle-like leaves and a distinctive pine-like fragrance.',
    category: 'Aromatic'
  },

  // Decorative Plants
  {
    id: '6',
    name: 'Fiddle Leaf Fig',
    price: 65.99,
    image: fiddleLeafFig,
    description: 'Statement plant with large, glossy leaves perfect for modern interiors.',
    category: 'Decorative'
  },
  {
    id: '7',
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: monstera,
    description: 'Trendy plant with unique split leaves that creates stunning visual impact.',
    category: 'Decorative'
  },
  {
    id: '8',
    name: 'Rubber Plant',
    price: 35.99,
    image: rubberPlant,
    description: 'Glossy, dark green leaves make this plant a striking addition to any room.',
    category: 'Decorative'
  },

  // Multi-category plants
  {
    id: '9',
    name: 'Aloe Vera',
    price: 16.99,
    image: aloeVera,
    description: 'Succulent with healing properties. Low-maintenance and great for beginners.',
    category: 'Air Purifying'
  }
];

export const categories = [
  'Air Purifying',
  'Aromatic', 
  'Decorative'
];