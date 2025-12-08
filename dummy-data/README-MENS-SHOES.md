# Men's Shoes Dummy Data Guide

## 📋 Category Structure

### Parent Category
- **"Men's Shoes"** (या category मध्ये सर्व subcategories included आहेत)

### Subcategories
1. **Men Sports Shoes** - Sports आणि gym साठी
2. **Men Casual Shoes** - Daily wear साठी
3. **Men Formal Shoes** - Office आणि formal occasions साठी
4. **Men Sneakers** - Casual sneakers
5. **Men Boots** - Boots (leather, work boots, etc.)
6. **Men Running Shoes** - Running आणि jogging साठी

## 🔑 Important Fields

### Required Fields
- `title` - Product name
- `mrp` - Maximum Retail Price (number)
- `category` - Exact subcategory name (जसे "Men Sports Shoes")
- `images.image1` - At least one image required

### Optional But Recommended
- `discountPercent` - Discount percentage (0-100)
- `description` - Product description
- `product_info.brand` - Brand name
- `product_info.availableSizes` - Array of sizes like `["7", "8", "9", "10", "11"]`
- `product_info.shoeMaterial` - Material (Leather, Canvas, Mesh, etc.)
- `product_info.shoeColor` - Color
- `product_info.shoeType` - Type (Sports, Casual, Formal, Running, Boots, Sneakers)

## 📝 Usage Example

### MongoDB Insert (Admin Panel वरुन)
```json
{
  "title": "Nike Air Max 270 Running Shoes",
  "mrp": 8999,
  "discountPercent": 15,
  "description": "Comfortable and stylish running shoes...",
  "category": "Men Sports Shoes",
  "product_info": {
    "brand": "Nike",
    "availableSizes": ["7", "8", "9", "10", "11", "12"],
    "shoeMaterial": "Mesh",
    "shoeColor": "Black/White",
    "shoeType": "Sports"
  },
  "images": {
    "image1": "https://example.com/image1.jpg",
    "image2": "https://example.com/image2.jpg",
    "image3": "https://example.com/image3.jpg"
  }
}
```

### API Call Example
```javascript
// POST /api/admin/products
const product = {
  title: "Nike Air Max 270 Running Shoes",
  mrp: 8999,
  discountPercent: 15,
  description: "Comfortable and stylish running shoes...",
  category: "Men Sports Shoes", // Important: Exact subcategory name
  product_info: {
    brand: "Nike",
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    shoeMaterial: "Mesh",
    shoeColor: "Black/White",
    shoeType: "Sports"
  },
  images: {
    image1: "https://example.com/image1.jpg",
    image2: "https://example.com/image2.jpg",
    image3: "https://example.com/image3.jpg"
  }
};
```

## ⚠️ Important Notes

1. **Category Name Must Match Exactly:**
   - ✅ "Men Sports Shoes"
   - ✅ "Men Casual Shoes"
   - ✅ "Men Formal Shoes"
   - ✅ "Men Sneakers"
   - ✅ "Men Boots"
   - ✅ "Men Running Shoes"
   - ❌ "Mens Sports Shoes" (wrong)
   - ❌ "Men's Sports Shoes" (wrong)

2. **Sizes Format:**
   - Use strings: `["7", "8", "9", "10", "11"]`
   - Not numbers: `[7, 8, 9, 10, 11]` ❌

3. **Price Calculation:**
   - `price` automatically calculate होईल: `mrp - (mrp * discountPercent / 100)`
   - Example: mrp=1000, discountPercent=20 → price=800

4. **Image URLs:**
   - Can use Unsplash, Cloudinary, or your own CDN
   - At least `image1` required
   - `image2` and `image3` optional

## 📊 Data Summary

`mens-shoes-products.json` file मध्ये:
- **18 products** included आहेत
- **6 subcategories** मध्ये distribute केले आहेत:
  - Men Sports Shoes: 3 products
  - Men Casual Shoes: 3 products
  - Men Formal Shoes: 3 products
  - Men Sneakers: 3 products
  - Men Boots: 3 products
  - Men Running Shoes: 3 products

## 🚀 How to Import

### Option 1: Admin Panel (Recommended)
Admin panel वरुन product add करा, हा JSON data copy करून paste करा.

### Option 2: Direct MongoDB Insert
```javascript
// MongoDB shell or script
const products = require('./mens-shoes-products.json');
db.products.insertMany(products);
```

### Option 3: API Endpoint
```javascript
// Use POST /api/admin/products for each product
products.forEach(async (product) => {
  await fetch('/api/admin/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
});
```


