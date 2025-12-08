# Watches Dummy Data Guide

## 📋 Category Structure

### Men Watches Categories:
1. **Men Analog Watches** - Traditional analog watches
2. **Men Digital Watches** - Digital display watches
3. **Men Smart Watches** - Smartwatches with connectivity
4. **Men Sports Watches** - Sports and fitness watches
5. **Men Luxury Watches** - Premium luxury timepieces
6. **Men Chronograph Watches** - Chronograph function watches

### Girl Watches Categories:
1. **Girl Analog Watches** - Analog watches for girls
2. **Girl Digital Watches** - Digital watches for girls
3. **Girl Smart Watches** - Smartwatches for girls
4. **Girl Fitness Trackers** - Fitness tracking devices
5. **Girl Classic Watches** - Classic/traditional designs

## 🔑 Important Fields

### Required Fields
- `title` - Product name
- `mrp` - Maximum Retail Price (number)
- `category` - Exact category name (e.g., "Men Analog Watches", "Girl Smart Watches")
- `images.image1` - At least one image required

### Watch-Specific Fields (in product_info)
- `watchBrand` - Brand name (Titan, Casio, Apple, etc.)
- `movementType` - Quartz, Automatic, Solar, Digital
- `caseMaterial` - Stainless Steel, Aluminum, Plastic, Resin, etc.
- `bandMaterial` - Leather, Metal, Rubber, Silicone, Mesh, etc.
- `waterResistance` - 30m, 50m, 100m, 200m, IP67, IP68
- `watchType` - Analog, Digital, Smart Watch, Fitness Tracker

### Optional Fields
- `discountPercent` - Discount percentage (0-100)
- `description` - Product description
- `product_info.brand` - Brand name (same as watchBrand)
- `product_info.manufacturer` - Manufacturer name
- `product_info.IncludedComponents` - What's included in the box

## 📝 Usage Example

### MongoDB Insert (Admin Panel वरुन)
```json
{
  "title": "Titan Classic Analog Watch",
  "mrp": 3499,
  "discountPercent": 20,
  "description": "Elegant analog watch with classic design...",
  "category": "Men Analog Watches",
  "product_info": {
    "brand": "Titan",
    "watchBrand": "Titan",
    "movementType": "Quartz",
    "caseMaterial": "Stainless Steel",
    "bandMaterial": "Leather",
    "waterResistance": "50m",
    "watchType": "Analog",
    "IncludedComponents": "Watch, Original Box, Warranty Card"
  },
  "images": {
    "image1": "https://example.com/image1.jpg",
    "image2": "https://example.com/image2.jpg",
    "image3": "https://example.com/image3.jpg"
  }
}
```

## ⚠️ Important Notes

1. **Category Name Must Match Exactly:**
   - ✅ "Men Analog Watches"
   - ✅ "Men Digital Watches"
   - ✅ "Men Smart Watches"
   - ✅ "Men Sports Watches"
   - ✅ "Men Luxury Watches"
   - ✅ "Men Chronograph Watches"
   - ✅ "Girl Analog Watches"
   - ✅ "Girl Digital Watches"
   - ✅ "Girl Smart Watches"
   - ✅ "Girl Fitness Trackers"
   - ✅ "Girl Classic Watches"

2. **Water Resistance Formats:**
   - Meters: "30m", "50m", "100m", "200m"
   - IP Rating: "IP67", "IP68"

3. **Movement Types:**
   - "Quartz" - Standard battery-powered
   - "Automatic" - Self-winding mechanical
   - "Solar" - Solar-powered
   - "Digital" - For smartwatches and digital displays

4. **Price Calculation:**
   - `price` automatically calculate होईल: `mrp - (mrp * discountPercent / 100)`
   - Example: mrp=1000, discountPercent=20 → price=800

## 📊 Data Summary

### `mens-watches-products.json` - 18 products:
- Men Analog Watches: 4 products
- Men Digital Watches: 3 products
- Men Smart Watches: 4 products
- Men Sports Watches: 2 products
- Men Luxury Watches: 2 products
- Men Chronograph Watches: 3 products

### `girl-watches-products.json` - 15 products:
- Girl Analog Watches: 2 products
- Girl Digital Watches: 3 products
- Girl Smart Watches: 5 products
- Girl Fitness Trackers: 2 products
- Girl Classic Watches: 3 products

## 🚀 How to Import

### Option 1: Admin Panel (Recommended)
Admin panel वरुन product add करा, हा JSON data copy करून paste करा.

### Option 2: Direct MongoDB Insert
```javascript
// MongoDB shell or script
const mensWatches = require('./mens-watches-products.json');
const girlWatches = require('./girl-watches-products.json');
db.products.insertMany([...mensWatches, ...girlWatches]);
```

### Option 3: API Endpoint
```javascript
// Use POST /api/admin/products for each product
const allWatches = [...mensWatches, ...girlWatches];
allWatches.forEach(async (product) => {
  await fetch('/api/admin/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
});
```

## 🎨 Watch Categories Mapping

| Category in Navbar | Exact Category Name for JSON |
|-------------------|------------------------------|
| Men Analog Watches | "Men Analog Watches" |
| Men Digital Watches | "Men Digital Watches" |
| Men Smart Watches | "Men Smart Watches" |
| Men Sports Watches | "Men Sports Watches" |
| Men Luxury Watches | "Men Luxury Watches" |
| Men Chronograph Watches | "Men Chronograph Watches" |
| Girl Analog Watches | "Girl Analog Watches" |
| Girl Digital Watches | "Girl Digital Watches" |
| Girl Smart Watches | "Girl Smart Watches" |
| Girl Fitness Trackers | "Girl Fitness Trackers" |
| Girl Classic Watches | "Girl Classic Watches" |

## ✅ Filter Compatibility

All watch products are compatible with the filters:
- **Brand** - Extracted from `product_info.brand` or `product_info.watchBrand`
- **Movement Type** - From `product_info.movementType`
- **Case Material** - From `product_info.caseMaterial`
- **Band Material** - From `product_info.bandMaterial`
- **Water Resistance** - From `product_info.waterResistance`


