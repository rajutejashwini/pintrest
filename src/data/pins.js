// Sample pins. Images come from picsum.photos (seeded, so each id always shows the same photo).
const img = (seed, h) => `https://picsum.photos/seed/${seed}/500/${h}`;
const pins = [
  { id: 1, title: 'Misty mountain trail', imageUrl: img('mountain', 700), author: 'rohan', category: 'Nature', boardId: 'b1', keywords: ['hike', 'fog', 'mountains'] },
  { id: 2, title: 'Sunset over the old town', imageUrl: img('oldtown', 520), author: 'ananya', category: 'Travel', boardId: 'b1', keywords: ['city', 'sunset', 'europe'] },
  { id: 3, title: 'Fresh pasta night', imageUrl: img('pasta', 600), author: 'meera', category: 'Food', boardId: 'b2', keywords: ['dinner', 'italian', 'recipe'] },
  { id: 4, title: 'Minimal linen outfit', imageUrl: img('linen', 800), author: 'ananya', category: 'Fashion', boardId: 'b3', keywords: ['style', 'summer', 'outfit'] },
  { id: 5, title: 'Cozy reading corner', imageUrl: img('reading', 560), author: 'meera', category: 'Home Decor', boardId: 'b4', keywords: ['living room', 'books', 'cozy'] },
  { id: 6, title: 'Abstract watercolor waves', imageUrl: img('watercolor', 660), author: 'kabir', category: 'Art', boardId: 'b3', keywords: ['painting', 'blue', 'abstract'] },
  { id: 7, title: 'Desk setup for focus', imageUrl: img('desk', 520), author: 'kabir', category: 'Technology', boardId: 'b4', keywords: ['workspace', 'gadgets', 'laptop'] },
  { id: 8, title: 'Forest after the rain', imageUrl: img('forest', 740), author: 'rohan', category: 'Nature', boardId: 'b1', keywords: ['trees', 'green', 'rain'] },
  { id: 9, title: 'Brunch board with berries', imageUrl: img('brunch', 580), author: 'meera', category: 'Food', boardId: 'b2', keywords: ['breakfast', 'fruit', 'healthy'] },
  { id: 10, title: 'Coastal road trip', imageUrl: img('coast', 620), author: 'rohan', category: 'Travel', boardId: 'b1', keywords: ['beach', 'car', 'ocean'] },
  { id: 11, title: 'Earth-tone living room', imageUrl: img('earthtone', 780), author: 'meera', category: 'Home Decor', boardId: 'b4', keywords: ['sofa', 'neutral', 'interior'] },
  { id: 12, title: 'Street style in denim', imageUrl: img('denim', 540), author: 'ananya', category: 'Fashion', boardId: 'b3', keywords: ['jeans', 'street', 'casual'] },
  { id: 13, title: 'Ink and line drawing', imageUrl: img('inkdraw', 680), author: 'kabir', category: 'Art', boardId: 'b3', keywords: ['sketch', 'black and white'] },
  { id: 14, title: 'Smart home gadgets', imageUrl: img('gadgets', 500), author: 'kabir', category: 'Technology', boardId: 'b4', keywords: ['smart', 'devices', 'tech'] },
  { id: 15, title: 'Homemade sourdough', imageUrl: img('sourdough', 720), author: 'ananya', category: 'Food', boardId: 'b2', keywords: ['bread', 'baking'] },
  { id: 16, title: 'Wildflower meadow', imageUrl: img('meadow', 600), author: 'rohan', category: 'Nature', boardId: 'b1', keywords: ['flowers', 'spring', 'field'] },
];
export default pins;
