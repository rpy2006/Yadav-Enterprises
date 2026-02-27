const PRODUCTS = [
  { id: 1, name: "Aashirvaad Atta (5kg)", price: 280, category: "Groceries", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80", desc: "Premium whole wheat flour for soft rotis" },
  { id: 2, name: "Tata Salt (1kg)", price: 28, category: "Groceries", image: "https://images.unsplash.com/photo-1624372637996-af58f9a7f9e3?w=400&q=80", desc: "Pure iodized salt — trusted by families" },
  { id: 3, name: "Saffola Gold Oil (1L)", price: 175, category: "Groceries", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80", desc: "Blended edible oil, heart-healthy choice" },
  { id: 4, name: "Fortune Basmati Rice (5kg)", price: 390, category: "Groceries", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", desc: "Aged basmati rice, long grains" },
  { id: 5, name: "Toor Dal (1kg)", price: 145, category: "Groceries", image: "https://images.unsplash.com/photo-1585996747733-7b4b2848a7e2?w=400&q=80", desc: "Premium arhar dal, unpolished" },
  { id: 6, name: "Amul Full Cream Milk (1L)", price: 68, category: "Dairy", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80", desc: "Rich & creamy full cream milk daily pack" },
  { id: 7, name: "Amul Butter (500g)", price: 280, category: "Dairy", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80", desc: "Fresh salted butter — perfect on toast" },
  { id: 8, name: "Amul Paneer (200g)", price: 85, category: "Dairy", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80", desc: "Soft & fresh cottage cheese" },
  { id: 9, name: "Lay's Classic (Pack of 6)", price: 90, category: "Snacks", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80", desc: "Crispy potato chips — everyone's favourite" },
  { id: 10, name: "Haldiram's Namkeen (200g)", price: 65, category: "Snacks", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", desc: "Crunchy & spicy mixed namkeen" },
  { id: 11, name: "Parle-G Biscuits (Pack of 10)", price: 80, category: "Snacks", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80", desc: "India's favourite glucose biscuits" },
  { id: 12, name: "Kurkure Masala (Pack of 5)", price: 60, category: "Snacks", image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=400&q=80", desc: "Crunchy masala twist snacks" },
  { id: 13, name: "Tata Tea Premium (500g)", price: 195, category: "Beverages", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80", desc: "Strong & aromatic premium CTC tea leaves" },
  { id: 14, name: "Thums Up 2L", price: 95, category: "Beverages", image: "https://images.unsplash.com/photo-1491947153227-33d59da6c448?w=400&q=80", desc: "Refreshing cola — taste the thunder!" },
  { id: 15, name: "Nescafe Classic (50g)", price: 185, category: "Beverages", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=80", desc: "Instant coffee granules" },
  { id: 16, name: "Classmate Notebook (Pack of 6)", price: 150, category: "Stationery", image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=400&q=80", desc: "Ruled notebooks — 200 pages each" },
  { id: 17, name: "Reynolds Pen Set (10 pcs)", price: 65, category: "Stationery", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80", desc: "Smooth writing ball pens" },
  { id: 18, name: "Cello Geometry Box", price: 120, category: "Stationery", image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&q=80", desc: "Mathematical instrument box" },
  { id: 19, name: "Dove Soap (Pack of 4)", price: 150, category: "Personal Care", image: "https://images.unsplash.com/photo-1600850059849-6479ff494719?w=400&q=80", desc: "Moisturizing cream bath soap" },
  { id: 20, name: "Colgate Toothpaste (200g)", price: 115, category: "Personal Care", image: "https://images.unsplash.com/photo-1585232351009-aa1c55e3dc30?w=400&q=80", desc: "Active salt & fluoride protection" },
  { id: 21, name: "Head & Shoulders Shampoo (200ml)", price: 210, category: "Personal Care", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80", desc: "Anti-dandruff shampoo, cool menthol" },
  { id: 22, name: "Gillette Razor (2 cartridges)", price: 98, category: "Personal Care", image: "https://images.unsplash.com/photo-1625493180658-87b7f6b7d7d9?w=400&q=80", desc: "Precision blades for smooth shave" },
  { id: 23, name: "Surf Excel (2kg)", price: 320, category: "Household", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&q=80", desc: "Front-load washing powder" },
  { id: 24, name: "Harpic Toilet Cleaner (500ml)", price: 95, category: "Household", image: "https://images.unsplash.com/photo-1626197031507-86b3c6b7d6f6?w=400&q=80", desc: "Powerful disinfectant & stain remover" }

  
  
  
  
  
  
  
];
