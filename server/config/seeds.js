const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Coffee' },
    { name: 'Merchandise' },
    { name: 'Subscriptions' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Deja Brew - Light Roast',
      description:
        'A light roast from Ethiopia with tasting notes of lemon and blueberry, with a floral aroma and a delicate body. The acidity is high, but not overpowering, making for a clean and refreshing cup of coffee. The light roast allows for the subtle nuances of the coffee to shine through, making it a great option for those who want to experience the full flavor profile of the bean.',
      image: 'light-roast.png',
      category: categories[0]._id,
      price: 12.99,
      quantity: 500
    },
    {
      name: 'Deja Brew - Dark Roast',
      description:
        'A dark roast from Colombia with tasting notes of dark chocolate, caramel, and a smoky finish. The body is full and rich, with low acidity and a pleasant bitterness that lingers on the palate. The dark roast caramelizes the natural sugars in the bean, resulting in a more pronounced bitterness and a fuller body.',
      image: 'dark-roast.png',
      category: categories[0]._id,
      price: 12.99,
      quantity: 500
    },
    {
      name: 'Deja Brew - Groundhog Blend',
      category: categories[0]._id,
      description:
        'A blended roast made with beans from Brazil and Guatemala may offer tasting notes of milk chocolate, toasted nuts, and a subtle hint of citrus. The body is medium, with a balanced acidity that enhances the sweetness of the chocolate notes. The Brazilian beans contribute to the rich and creamy mouthfeel, while the Guatemalan beans add a bright and fruity complexity.',
      image: 'groundhog.png',
      price: 12.99,
      quantity: 500
    },
    {
      name: 'Deja Brew T-Shirt',
      category: categories[1]._id,
      description:
        'Introducing the Deja Brew t-shirt, the perfect addition to your wardrobe! Made from high-quality, soft cotton, this t-shirt is comfortable and durable, perfect for everyday wear. The classic design features the Deja Brew logo on the front, making it a stylish way to show your support.',
      image: 'tshirt.png',
      price: 19.99,
      quantity: 100
    },
    {
      name: 'Deja Brew Coffee Mug',
      category: categories[1]._id,
      description:
        "The Deja Brew coffee mug is microwave and dishwasher safe, making it easy to use and care for. The comfortable handle and generous 16-ounce capacity make it easy to hold and enjoy your favorite hot beverage, whether you're sipping coffee in the morning or relaxing with a cup of tea in the evening.",
      image: 'mug.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Monthly Subscription - 1 bag / month',
      category: categories[2]._id,
      description:
        "Introducing our coffee subscription service, the perfect way to enjoy a variety of high-quality, freshly roasted coffees delivered right to your door! With our subscription service, you'll receive a new selection of premium coffee(s) each month, carefully curated from around the world by our expert roasters. In addition to great coffee, our subscription service offers the convenience of automatic deliveries, so you'll never run out of your favorite brew. The price listed is the monthly total for the service.",
      image: 'logo.png',
      price: 12.99,
      quantity: 100
    },
    {
      name: 'Monthly Subscription - 2 bags / month',
      category: categories[2]._id,
      description:
      "Introducing our coffee subscription service, the perfect way to enjoy a variety of high-quality, freshly roasted coffees delivered right to your door! With our subscription service, you'll receive a new selection of premium coffee(s) each month, carefully curated from around the world by our expert roasters. In addition to great coffee, our subscription service offers the convenience of automatic deliveries, so you'll never run out of your favorite brew. The price listed is the monthly total for the service.",
      image: 'logo.png',
      price: 21.99,
      quantity: 100
    },
    {
      name: 'Monthly Subscription - 3 bags / month',
      category: categories[3]._id,
      description:
      "Introducing our coffee subscription service, the perfect way to enjoy a variety of high-quality, freshly roasted coffees delivered right to your door! With our subscription service, you'll receive a new selection of premium coffee(s) each month, carefully curated from around the world by our expert roasters. In addition to great coffee, our subscription service offers the convenience of automatic deliveries, so you'll never run out of your favorite brew. The price listed is the monthly total for the service.",
      image: 'logo.png',
      price: 29.99,
      quantity: 100
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Tim',
    lastName: 'Wardlow',
    email: 'tw@dejabrew.com',
    password: 'password123',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Andrew',
    lastName: 'Simmons',
    email: 'as@dejabrew.com',
    password: 'password123'
  });

  console.log('users seeded');

  process.exit();
});
