// ==========================================
//  Mock Product Data (Dummy Data for Frontend)
// ==========================================
//
//  This file contains fake product data so we can
//  build and test the UI without a backend.
//
//  When your backend is ready, replace this with
//  real API calls (e.g., GET /api/products).
//

const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 2499,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.5,
    description:
      "Premium wireless headphones with active noise cancellation, 30-hour battery life, and deep bass. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    title: "Men's Casual Slim Fit T-Shirt",
    price: 599,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.2,
    description:
      "Comfortable cotton blend t-shirt with a modern slim fit. Available in multiple colors. Machine washable and durable.",
  },
  {
    id: 3,
    title: "Smart Watch Fitness Tracker",
    price: 3999,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.7,
    description:
      "Track your health with heart rate monitoring, step counter, sleep tracking, and GPS. Water resistant up to 50 meters.",
  },
  {
    id: 4,
    title: "Leather Laptop Bag",
    price: 1899,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.3,
    description:
      "Genuine leather laptop bag fits up to 15.6 inch laptops. Multiple compartments with padded protection and adjustable strap.",
  },
  {
    id: 5,
    title: "Running Shoes - Lightweight",
    price: 2999,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.6,
    description:
      "Ultra-lightweight running shoes with breathable mesh upper, cushioned sole, and anti-slip grip. Ideal for jogging and gym.",
  },
  {
    id: 6,
    title: "Portable Bluetooth Speaker",
    price: 1499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.1,
    description:
      "Compact wireless speaker with 360° surround sound, 12-hour battery, and waterproof design. Take your music anywhere.",
  },
  {
    id: 7,
    title: "Stainless Steel Water Bottle",
    price: 699,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.4,
    description:
      "Double-wall vacuum insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.",
  },
  {
    id: 8,
    title: "Wireless Charging Pad",
    price: 999,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.0,
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices. Slim design with LED indicator and anti-slip surface.",
  },
  {
    id: 9,
    title: "Women's Sunglasses - UV Protection",
    price: 1199,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.3,
    description:
      "Stylish polarized sunglasses with 100% UV400 protection. Lightweight frame with scratch-resistant lenses.",
  },
  {
    id: 10,
    title: "Backpack - Travel & Laptop",
    price: 1799,
    originalPrice: 3299,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.5,
    description:
      "Spacious travel backpack with USB charging port, anti-theft design, and padded laptop compartment. Water-resistant material.",
  },
  {
    id: 11,
    title: "Desk Lamp - LED Adjustable",
    price: 899,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.2,
    description:
      "Modern LED desk lamp with 3 brightness levels, adjustable arm, and touch controls. Eye-friendly light for reading and working.",
  },
  {
    id: 12,
    title: "Organic Green Tea - 100 Bags",
    price: 449,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.6,
    description:
      "Premium organic green tea with natural antioxidants. Helps boost metabolism and improve focus. 100 individually wrapped bags.",
  },
  // ==========================================
  //  Additional Products for Infinite Scroll
  // ==========================================
  {
    id: 13,
    title: "USB-C Hub Multiport Adapter",
    price: 1799,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.4,
    description:
      "7-in-1 USB-C hub with HDMI 4K output, USB 3.0 ports, SD card reader, and PD charging. Compatible with all USB-C laptops.",
  },
  {
    id: 14,
    title: "Women's Floral Summer Dress",
    price: 1299,
    originalPrice: 2799,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.3,
    description:
      "Elegant floral print summer dress with a relaxed fit. Breathable fabric perfect for warm weather outings and casual events.",
  },
  {
    id: 15,
    title: "Mechanical Gaming Keyboard",
    price: 3499,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.8,
    description:
      "RGB mechanical keyboard with Cherry MX switches, programmable macros, and aluminum frame. Built for competitive gaming.",
  },
  {
    id: 16,
    title: "Canvas Tote Bag - Eco Friendly",
    price: 499,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.1,
    description:
      "Reusable canvas tote bag with reinforced handles. Perfect for groceries, shopping, or daily carry. Eco-friendly and washable.",
  },
  {
    id: 17,
    title: "Aromatherapy Essential Oil Set",
    price: 1599,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.5,
    description:
      "Set of 8 pure essential oils including lavender, eucalyptus, peppermint, and tea tree. Perfect for diffusers and aromatherapy.",
  },
  {
    id: 18,
    title: "Noise Cancelling Earbuds",
    price: 4999,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.6,
    description:
      "True wireless earbuds with adaptive noise cancellation, spatial audio, and 36-hour total battery life with charging case.",
  },
  {
    id: 19,
    title: "Men's Denim Jacket - Classic",
    price: 1999,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.4,
    description:
      "Classic-fit denim jacket with button closure and chest pockets. Versatile layering piece for all seasons. Premium cotton denim.",
  },
  {
    id: 20,
    title: "Ceramic Coffee Mug Set",
    price: 799,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.3,
    description:
      "Set of 4 premium ceramic mugs with modern matte finish. Microwave and dishwasher safe. Perfect gift for coffee lovers.",
  },
  {
    id: 21,
    title: "Wireless Gaming Mouse",
    price: 2299,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.7,
    description:
      "Ultra-lightweight wireless gaming mouse with 25K DPI sensor, 70-hour battery, and customizable RGB lighting.",
  },
  {
    id: 22,
    title: "Leather Wallet - RFID Blocking",
    price: 899,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.2,
    description:
      "Slim bifold leather wallet with RFID protection, 8 card slots, and bill compartment. Handcrafted from genuine leather.",
  },
  {
    id: 23,
    title: "Yoga Mat - Non Slip Premium",
    price: 1299,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.5,
    description:
      "Extra thick 6mm yoga mat with non-slip surface and alignment lines. Includes carrying strap. Eco-friendly TPE material.",
  },
  {
    id: 24,
    title: "Women's Sneakers - White",
    price: 2499,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.4,
    description:
      "Classic white sneakers with cushioned insole and premium leather upper. Versatile style that pairs with any outfit.",
  },
  {
    id: 25,
    title: "Smart LED Light Bulbs - 4 Pack",
    price: 1999,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.3,
    description:
      "WiFi-enabled smart LED bulbs with 16 million colors. Voice control compatible with Alexa and Google Home. Energy efficient.",
  },
  {
    id: 26,
    title: "Minimalist Analog Watch",
    price: 3299,
    originalPrice: 6499,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.6,
    description:
      "Elegant minimalist watch with Japanese quartz movement, sapphire crystal glass, and genuine leather strap. Water resistant.",
  },
  {
    id: 27,
    title: "Cotton Bed Sheet Set - Queen",
    price: 1899,
    originalPrice: 3799,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.4,
    description:
      "400 thread count Egyptian cotton bed sheet set. Includes fitted sheet, flat sheet, and 2 pillowcases. Wrinkle-resistant.",
  },
  {
    id: 28,
    title: "4K Webcam with Microphone",
    price: 2799,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.2,
    description:
      "Ultra HD 4K webcam with built-in dual microphone, auto-focus, and low-light correction. Ideal for streaming and video calls.",
  },
  {
    id: 29,
    title: "Linen Shirt - Relaxed Fit",
    price: 1499,
    originalPrice: 2799,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.1,
    description:
      "Breathable pure linen shirt with relaxed fit and button-down collar. Perfect for summer and casual occasions.",
  },
  {
    id: 30,
    title: "Plant Pot Set - Ceramic",
    price: 999,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.5,
    description:
      "Set of 3 ceramic plant pots with drainage holes and bamboo trays. Modern geometric design. Perfect for indoor plants.",
  },
  {
    id: 31,
    title: "Portable Power Bank 20000mAh",
    price: 1299,
    originalPrice: 2599,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.3,
    description:
      "High-capacity 20000mAh power bank with dual USB-C and USB-A ports. Fast charging support. Charges 3 devices simultaneously.",
  },
  {
    id: 32,
    title: "Silver Chain Necklace",
    price: 1699,
    originalPrice: 3299,
    image: "https://images.unsplash.com/photo-1599643478518-a96b58952e21?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.4,
    description:
      "Sterling silver chain necklace with minimalist pendant. Tarnish-resistant finish. Comes in a premium gift box.",
  },
  {
    id: 33,
    title: "Men's Jogger Pants",
    price: 999,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.2,
    description:
      "Comfortable cotton-blend jogger pants with elastic waistband and tapered leg. Side pockets and drawstring closure.",
  },
  {
    id: 34,
    title: "Electric Kettle - Temperature Control",
    price: 2199,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.6,
    description:
      "Smart electric kettle with 5 temperature presets and keep-warm function. 1.7L capacity with boil-dry protection.",
  },
  {
    id: 35,
    title: "Tablet Stand - Adjustable",
    price: 699,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.1,
    description:
      "Foldable aluminum tablet stand with adjustable angle. Compatible with all tablets and phones. Anti-scratch silicone pads.",
  },
  {
    id: 36,
    title: "Crossbody Sling Bag",
    price: 799,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.0,
    description:
      "Compact crossbody sling bag with anti-theft zipper and adjustable strap. Multiple pockets for organized daily carry.",
  },
  {
    id: 37,
    title: "Women's Cardigan - Knit",
    price: 1799,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a20?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.3,
    description:
      "Soft knit cardigan with open front design and ribbed cuffs. Cozy layering piece for cool weather. Available in 5 colors.",
  },
  {
    id: 38,
    title: "Air Purifier - HEPA Filter",
    price: 4499,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.7,
    description:
      "True HEPA air purifier covers up to 500 sq ft. Removes 99.97% of allergens, dust, and smoke. Ultra-quiet sleep mode.",
  },
  {
    id: 39,
    title: "External SSD - 1TB",
    price: 5499,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.5,
    description:
      "Portable 1TB SSD with USB 3.2 Gen 2 interface. Read speeds up to 1050 MB/s. Shock-resistant and pocket-sized design.",
  },
  {
    id: 40,
    title: "Aviator Sunglasses - Unisex",
    price: 1399,
    originalPrice: 2799,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.4,
    description:
      "Classic aviator sunglasses with polarized lenses and metal frame. UV400 protection. Includes hard case and cleaning cloth.",
  },
  {
    id: 41,
    title: "Hoodie - Oversized Unisex",
    price: 1499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.5,
    description:
      "Premium heavyweight cotton hoodie with oversized fit, kangaroo pocket, and drawstring hood. Brushed fleece interior.",
  },
  {
    id: 42,
    title: "Scented Candle Set - Luxury",
    price: 1199,
    originalPrice: 2399,
    image: "https://images.unsplash.com/photo-1602607456109-e77ac3b88fee?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.6,
    description:
      "Set of 3 luxury soy wax scented candles with wooden wicks. Fragrances: Vanilla, Sandalwood, and Ocean Breeze.",
  },
  {
    id: 43,
    title: "Wireless Keyboard & Mouse Combo",
    price: 1999,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.2,
    description:
      "Slim wireless keyboard and mouse combo with 2.4GHz connectivity. Quiet keys, ergonomic design, and long battery life.",
  },
  {
    id: 44,
    title: "Silk Scarf - Printed",
    price: 899,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1601924921557-45e8e0db5828?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.1,
    description:
      "Luxurious printed silk scarf with hand-rolled edges. Versatile accessory that can be worn as a neck scarf, headband, or bag tie.",
  },
  {
    id: 45,
    title: "Men's Chino Shorts",
    price: 899,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
    category: "Fashion",
    rating: 4.0,
    description:
      "Classic chino shorts with a modern slim fit. Stretch cotton blend for comfort. Available in khaki, navy, and olive.",
  },
  {
    id: 46,
    title: "French Press Coffee Maker",
    price: 1399,
    originalPrice: 2599,
    image: "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.4,
    description:
      "Double-wall stainless steel French press with 4-level filtration system. Brews 8 cups. Keeps coffee hot for hours.",
  },
  {
    id: 47,
    title: "Monitor Light Bar",
    price: 1699,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.3,
    description:
      "LED monitor light bar with auto-dimming and adjustable color temperature. No screen glare. USB powered with touch controls.",
  },
  {
    id: 48,
    title: "Travel Organizer Pouch Set",
    price: 599,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.2,
    description:
      "Set of 6 packing cubes in different sizes for organized travel. Lightweight mesh panels and durable zippers.",
  },
];

// Get all unique categories from the products
export const categories = ["All", ...new Set(products.map((p) => p.category))];

// Get a single product by ID
export const getProductById = (id) => {
  return products.find((p) => p.id === parseInt(id));
};

export default products;
