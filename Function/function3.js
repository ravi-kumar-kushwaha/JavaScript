const products = [
    // Biryani
    {
      category: "Biryani",
      products: [
        {
          title: "Hyderabadi Biryani",
          image: "hyderabadi_biryani.jpg",
          description: "Fragrant basmati rice layered with tender chicken, spiced with saffron, and slow-cooked to perfection.",
          price: 12.99,
        },
        {
          title: "Kolkata Biryani",
          image: "kolkata_biryani.jpg",
          description: "Lightly spiced biryani with succulent chicken, potatoes, and a hint of rose water.",
          price: 11.99,
        },
        {
          title: "Lucknowi Biryani",
          image: "lucknowi_biryani.jpg",
          description: "Aromatic rice cooked with rich, tender lamb, and flavored with saffron and star anise.",
          price: 13.99,
        },
        {
          title: "Egg Biryani",
          image: "egg_biryani.jpg",
          description: "Fluffy rice combined with perfectly boiled eggs and spices for a balanced, delicious meal.",
          price: 9.99,
        },
        {
          title: "Vegetable Biryani",
          image: "vegetable_biryani.jpg",
          description: "A colorful mix of fresh vegetables, fragrant spices, and basmati rice cooked to perfection.",
          price: 8.99,
        },
      ],
    },
    // Pizza
    {
      category: "Pizza",
      products: [
        {
          title: "Margherita Pizza",
          image: "margherita_pizza.jpg",
          description: "Classic pizza with fresh tomatoes, mozzarella, and a sprinkle of basil.",
          price: 10.99,
        },
        {
          title: "BBQ Chicken Pizza",
          image: "bbq_chicken_pizza.jpg",
          description: "Smoky BBQ sauce topped with grilled chicken, onions, and cheese.",
          price: 12.49,
        },
        {
          title: "Pepperoni Pizza",
          image: "pepperoni_pizza.jpg",
          description: "Delicious pepperoni slices layered on a cheesy pizza base with a tangy tomato sauce.",
          price: 11.99,
        },
        {
          title: "Veggie Delight Pizza",
          image: "veggie_delight_pizza.jpg",
          description: "Packed with fresh bell peppers, onions, mushrooms, and olives on a thin, crispy crust.",
          price: 9.99,
        },
        {
          title: "Cheese Burst Pizza",
          image: "cheese_burst_pizza.jpg",
          description: "Ultra-cheesy pizza with a double layer of mozzarella and cheddar for cheese lovers.",
          price: 13.99,
        },
      ],
    },
    // Burgers
    {
      category: "Burgers",
      products: [
        {
          title: "Classic Beef Burger",
          image: "classic_beef_burger.jpg",
          description: "Juicy beef patty topped with fresh lettuce, tomatoes, onions, and a special sauce.",
          price: 8.99,
        },
        {
          title: "Chicken Zinger Burger",
          image: "chicken_zinger_burger.jpg",
          description: "Crispy fried chicken patty served with spicy mayo and pickles on a soft bun.",
          price: 7.99,
        },
        {
          title: "Veggie Supreme Burger",
          image: "veggie_supreme_burger.jpg",
          description: "Grilled vegetable patty with creamy avocado, fresh lettuce, and tomato slices.",
          price: 6.99,
        },
        {
          title: "Fish Fillet Burger",
          image: "fish_fillet_burger.jpg",
          description: "Golden fried fish fillet topped with tangy tartar sauce and crisp lettuce.",
          price: 9.49,
        },
        {
          title: "Double Cheeseburger",
          image: "double_cheeseburger.jpg",
          description: "Two beef patties layered with melted cheese, caramelized onions, and crispy bacon.",
          price: 10.99,
        },
      ],
    },
    // Pasta
    {
      category: "Pasta",
      products: [
        {
          title: "Spaghetti Bolognese",
          image: "spaghetti_bolognese.jpg",
          description: "Traditional Italian pasta with rich tomato and meat sauce, sprinkled with Parmesan.",
          price: 11.99,
        },
        {
          title: "Alfredo Fettuccine",
          image: "alfredo_fettuccine.jpg",
          description: "Creamy Alfredo sauce with fettuccine pasta and grilled chicken.",
          price: 12.49,
        },
        {
          title: "Penne Arrabbiata",
          image: "penne_arrabbiata.jpg",
          description: "Spicy tomato sauce with garlic and chilies, served with al dente penne pasta.",
          price: 9.99,
        },
        {
          title: "Pesto Pasta",
          image: "pesto_pasta.jpg",
          description: "Fresh basil pesto mixed with tender pasta and topped with grilled vegetables.",
          price: 10.49,
        },
        {
          title: "Mac and Cheese",
          image: "mac_and_cheese.jpg",
          description: "Creamy and cheesy macaroni with a crispy breadcrumb topping.",
          price: 8.49,
        },
      ],
    },
    // Fried Rice
    {
      category: "Fried Rice",
      products: [
        {
          title: "Chicken Fried Rice",
          image: "chicken_fried_rice.jpg",
          description: "Classic stir-fried rice with tender chicken pieces and fresh vegetables.",
          price: 9.99,
        },
        {
          title: "Egg Fried Rice",
          image: "egg_fried_rice.jpg",
          description: "Fluffy scrambled eggs stir-fried with rice, carrots, and peas for a simple yet tasty dish.",
          price: 8.49,
        },
        {
          title: "Shrimp Fried Rice",
          image: "shrimp_fried_rice.jpg",
          description: "Juicy shrimp combined with savory fried rice, seasoned to perfection.",
          price: 12.49,
        },
        {
          title: "Vegetable Fried Rice",
          image: "vegetable_fried_rice.jpg",
          description: "Fresh, crunchy vegetables stir-fried with soy sauce and jasmine rice.",
          price: 7.99,
        },
        {
          title: "Schezwan Fried Rice",
          image: "schezwan_fried_rice.jpg",
          description: "Spicy and tangy rice stir-fried with a bold Schezwan sauce, vegetables, and chicken.",
          price: 10.99,
        },
      ],
    },
    // Additional categories would follow the same pattern...
  ];
  
  // Example of accessing all products:

//   products.forEach((category) => {
//     console.log(`Category: ${category.category}`);
//     category.products.forEach((product) => {
//       console.log(`Title: ${product.title}`);
//       console.log(`Image: ${product.image}`);
//       console.log(`Description: ${product.description}`);
//       console.log(`Price: $${product.price}`);
//       console.log("----------");
//     });
//   });

// products.forEach((category)=>{
// console.log(`category:${category.category}`);
// console.log(`Product:${category.products}`);
// let totalPrice  = 0;
// category.products.forEach((product)=>{
   
//     console.log(`Title:${product.title}`);
//     console.log(`Image:${product.image}`);
//     console.log(`Description:${product.description}`);
//     console.log(`Price:${product.price}`);
//     totalPrice+=product.price;
    
// })
// console.log(`Total Cart Price is :${totalPrice}`);
// })
/*

category:Biryani
Product:[object Object],[object Object],[object Object],[object Object],[object Object]
Title:Hyderabadi Biryani
Image:hyderabadi_biryani.jpg
Description:Fragrant basmati rice layered with tender chicken, spiced with saffron, and slow-cooked to perfection.
Price:12.99
Title:Kolkata Biryani
Image:kolkata_biryani.jpg
Description:Lightly spiced biryani with succulent chicken, potatoes, and a hint of rose water.
Price:11.99
Title:Lucknowi Biryani
Image:lucknowi_biryani.jpg
Description:Aromatic rice cooked with rich, tender lamb, and flavored with saffron and star anise.
Price:13.99
Title:Egg Biryani
Image:egg_biryani.jpg
Description:Fluffy rice combined with perfectly boiled eggs and spices for a balanced, delicious meal.
Price:9.99
Title:Vegetable Biryani
Image:vegetable_biryani.jpg
Description:A colorful mix of fresh vegetables, fragrant spices, and basmati rice cooked to perfection.
Price:8.99
Total Cart Price is :57.95
category:Pizza
Product:[object Object],[object Object],[object Object],[object Object],[object Object]
Title:Margherita Pizza
Image:margherita_pizza.jpg
Description:Classic pizza with fresh tomatoes, mozzarella, and a sprinkle of basil.
Price:10.99
Title:BBQ Chicken Pizza
Image:bbq_chicken_pizza.jpg
Description:Smoky BBQ sauce topped with grilled chicken, onions, and cheese.
Price:12.49
Title:Pepperoni Pizza
Image:pepperoni_pizza.jpg
Description:Delicious pepperoni slices layered on a cheesy pizza base with a tangy tomato sauce.
Price:11.99
Title:Veggie Delight Pizza
Image:veggie_delight_pizza.jpg
Description:Packed with fresh bell peppers, onions, mushrooms, and olives on a thin, crispy crust.
Price:9.99
Title:Cheese Burst Pizza
Image:cheese_burst_pizza.jpg
Description:Ultra-cheesy pizza with a double layer of mozzarella and cheddar for cheese lovers.
Price:13.99
Total Cart Price is :59.45
category:Burgers
Product:[object Object],[object Object],[object Object],[object Object],[object Object]
Title:Classic Beef Burger
Image:classic_beef_burger.jpg
Description:Juicy beef patty topped with fresh lettuce, tomatoes, onions, and a special sauce.
Price:8.99
Title:Chicken Zinger Burger
Image:chicken_zinger_burger.jpg
Description:Crispy fried chicken patty served with spicy mayo and pickles on a soft bun.
Price:7.99
Title:Veggie Supreme Burger
Image:veggie_supreme_burger.jpg
Description:Grilled vegetable patty with creamy avocado, fresh lettuce, and tomato slices.
Price:6.99
Title:Fish Fillet Burger
Image:fish_fillet_burger.jpg
Description:Golden fried fish fillet topped with tangy tartar sauce and crisp lettuce.
Price:9.49
Title:Double Cheeseburger
Image:double_cheeseburger.jpg
Description:Two beef patties layered with melted cheese, caramelized onions, and crispy bacon.
Price:10.99
Total Cart Price is :44.45
category:Pasta
Product:[object Object],[object Object],[object Object],[object Object],[object Object]
Title:Spaghetti Bolognese
Image:spaghetti_bolognese.jpg
Description:Traditional Italian pasta with rich tomato and meat sauce, sprinkled with Parmesan.
Price:11.99
Title:Alfredo Fettuccine
Image:alfredo_fettuccine.jpg
Description:Creamy Alfredo sauce with fettuccine pasta and grilled chicken.
Price:12.49
Title:Penne Arrabbiata
Image:penne_arrabbiata.jpg
Description:Spicy tomato sauce with garlic and chilies, served with al dente penne pasta.
Price:9.99
Title:Pesto Pasta
Image:pesto_pasta.jpg
Description:Fresh basil pesto mixed with tender pasta and topped with grilled vegetables.
Price:10.49
Title:Mac and Cheese
Image:mac_and_cheese.jpg
Description:Creamy and cheesy macaroni with a crispy breadcrumb topping.
Price:8.49
Total Cart Price is :53.45
category:Fried Rice
Product:[object Object],[object Object],[object Object],[object Object],[object Object]
Title:Chicken Fried Rice
Image:chicken_fried_rice.jpg
Description:Classic stir-fried rice with tender chicken pieces and fresh vegetables.
Price:9.99
Title:Egg Fried Rice
Image:egg_fried_rice.jpg
Description:Fluffy scrambled eggs stir-fried with rice, carrots, and peas for a simple yet tasty dish.
Price:8.49
Title:Shrimp Fried Rice
Image:shrimp_fried_rice.jpg
Description:Juicy shrimp combined with savory fried rice, seasoned to perfection.
Price:12.49
Title:Vegetable Fried Rice
Image:vegetable_fried_rice.jpg
Description:Fresh, crunchy vegetables stir-fried with soy sauce and jasmine rice.
Price:7.99
Title:Schezwan Fried Rice
Image:schezwan_fried_rice.jpg
Description:Spicy and tangy rice stir-fried with a bold Schezwan sauce, vegetables, and chicken.
Price:10.99
Total Cart Price is :49.95

*/

products.map((item)=>{
     console.log(`Category:${item.category}`);
    // Category:Biryani
    // Category:Pizza
    // Category:Burgers
    // Category:Pasta
    // Category:Fried Rice
//to find product object
   console.log(`total product:${item.products}`);
    // total product:[object Object],[object Object],[object Object],[object Object],[object Object]
    // total product:[object Object],[object Object],[object Object],[object Object],[object Object]
    // total product:[object Object],[object Object],[object Object],[object Object],[object Object]
    // total product:[object Object],[object Object],[object Object],[object Object],[object Object]
    // total product:[object Object],[object Object],[object Object],[object Object],[object Object]

// to find each product of products
item.products.map((product_item)=>{
    console.log(`Title:${product_item.title}`);
    console.log(`Image:${product_item.image}`);
    console.log(`Price:${product_item.price}`);
    console.log(`Description:${product_item.description}`);
    /**
     
    Title:Hyderabadi Biryani
Image:hyderabadi_biryani.jpg
Price:12.99
Description:Fragrant basmati rice layered with tender chicken, spiced with saffron, and slow-cooked to perfection.
Title:Kolkata Biryani
Image:kolkata_biryani.jpg
Price:11.99
Description:Lightly spiced biryani with succulent chicken, potatoes, and a hint of rose water.
Title:Lucknowi Biryani
Image:lucknowi_biryani.jpg
Price:13.99
Description:Aromatic rice cooked with rich, tender lamb, and flavored with saffron and star anise.
Title:Egg Biryani
Image:egg_biryani.jpg
Price:9.99
Description:Fluffy rice combined with perfectly boiled eggs and spices for a balanced, delicious meal.
Title:Vegetable Biryani
Image:vegetable_biryani.jpg
Price:8.99
Description:A colorful mix of fresh vegetables, fragrant spices, and basmati rice cooked to perfection.
Title:Margherita Pizza
Image:margherita_pizza.jpg
Price:10.99
Description:Classic pizza with fresh tomatoes, mozzarella, and a sprinkle of basil.
Title:BBQ Chicken Pizza
Image:bbq_chicken_pizza.jpg
Price:12.49
Description:Smoky BBQ sauce topped with grilled chicken, onions, and cheese.
Title:Pepperoni Pizza
Image:pepperoni_pizza.jpg
Price:11.99
Description:Delicious pepperoni slices layered on a cheesy pizza base with a tangy tomato sauce.
Title:Veggie Delight Pizza
Image:veggie_delight_pizza.jpg
Price:9.99
Description:Packed with fresh bell peppers, onions, mushrooms, and olives on a thin, crispy crust.
Title:Cheese Burst Pizza
Image:cheese_burst_pizza.jpg
Price:13.99
Description:Ultra-cheesy pizza with a double layer of mozzarella and cheddar for cheese lovers.
Title:Classic Beef Burger
Image:classic_beef_burger.jpg
Price:8.99
Description:Juicy beef patty topped with fresh lettuce, tomatoes, onions, and a special sauce.
Title:Chicken Zinger Burger
Image:chicken_zinger_burger.jpg
Price:7.99
Description:Crispy fried chicken patty served with spicy mayo and pickles on a soft bun.
Title:Veggie Supreme Burger
Image:veggie_supreme_burger.jpg
Price:6.99
Description:Grilled vegetable patty with creamy avocado, fresh lettuce, and tomato slices.
Title:Fish Fillet Burger
Image:fish_fillet_burger.jpg
Price:9.49
Description:Golden fried fish fillet topped with tangy tartar sauce and crisp lettuce.
Title:Double Cheeseburger
Image:double_cheeseburger.jpg
Price:10.99
Description:Two beef patties layered with melted cheese, caramelized onions, and crispy bacon.
Title:Spaghetti Bolognese
Image:spaghetti_bolognese.jpg
Price:11.99
Description:Traditional Italian pasta with rich tomato and meat sauce, sprinkled with Parmesan.
Title:Alfredo Fettuccine
Image:alfredo_fettuccine.jpg
Price:12.49
Description:Creamy Alfredo sauce with fettuccine pasta and grilled chicken.
Title:Penne Arrabbiata
Image:penne_arrabbiata.jpg
Price:9.99
Description:Spicy tomato sauce with garlic and chilies, served with al dente penne pasta.
Title:Pesto Pasta
Image:pesto_pasta.jpg
Price:10.49
Description:Fresh basil pesto mixed with tender pasta and topped with grilled vegetables.
Title:Mac and Cheese
Image:mac_and_cheese.jpg
Price:8.49
Description:Creamy and cheesy macaroni with a crispy breadcrumb topping.
Title:Chicken Fried Rice
Image:chicken_fried_rice.jpg
Price:9.99
Description:Classic stir-fried rice with tender chicken pieces and fresh vegetables.
Title:Egg Fried Rice
Image:egg_fried_rice.jpg
Price:8.49
Description:Fluffy scrambled eggs stir-fried with rice, carrots, and peas for a simple yet tasty dish.
Title:Shrimp Fried Rice
Image:shrimp_fried_rice.jpg
Price:12.49
Description:Juicy shrimp combined with savory fried rice, seasoned to perfection.
Title:Vegetable Fried Rice
Image:vegetable_fried_rice.jpg
Price:7.99
Description:Fresh, crunchy vegetables stir-fried with soy sauce and jasmine rice.
Title:Schezwan Fried Rice
Image:schezwan_fried_rice.jpg
Price:10.99
     */
})
/*
Category:Biryani
total product:[object Object],[object Object],[object Object],[object Object],[object Object]
Hyderabadi Biryani
hyderabadi_biryani.jpg
12.99
Fragrant basmati rice layered with tender chicken, spiced with saffron, and slow-cooked to perfection.
Kolkata Biryani
kolkata_biryani.jpg
11.99
Lightly spiced biryani with succulent chicken, potatoes, and a hint of rose water.
Lucknowi Biryani
lucknowi_biryani.jpg
13.99
Aromatic rice cooked with rich, tender lamb, and flavored with saffron and star anise.
Egg Biryani
egg_biryani.jpg
9.99
Fluffy rice combined with perfectly boiled eggs and spices for a balanced, delicious meal.
Vegetable Biryani
vegetable_biryani.jpg
8.99
A colorful mix of fresh vegetables, fragrant spices, and basmati rice cooked to perfection.
Category:Pizza
total product:[object Object],[object Object],[object Object],[object Object],[object Object]
Margherita Pizza
margherita_pizza.jpg
10.99
Classic pizza with fresh tomatoes, mozzarella, and a sprinkle of basil.
BBQ Chicken Pizza
bbq_chicken_pizza.jpg
12.49
Smoky BBQ sauce topped with grilled chicken, onions, and cheese.
Pepperoni Pizza
pepperoni_pizza.jpg
11.99
Delicious pepperoni slices layered on a cheesy pizza base with a tangy tomato sauce.
Veggie Delight Pizza
veggie_delight_pizza.jpg
9.99
Packed with fresh bell peppers, onions, mushrooms, and olives on a thin, crispy crust.
Cheese Burst Pizza
cheese_burst_pizza.jpg
13.99
Ultra-cheesy pizza with a double layer of mozzarella and cheddar for cheese lovers.
Category:Burgers
total product:[object Object],[object Object],[object Object],[object Object],[object Object]
Classic Beef Burger
classic_beef_burger.jpg
8.99
Juicy beef patty topped with fresh lettuce, tomatoes, onions, and a special sauce.
Chicken Zinger Burger
chicken_zinger_burger.jpg
7.99
Crispy fried chicken patty served with spicy mayo and pickles on a soft bun.
Veggie Supreme Burger
veggie_supreme_burger.jpg
6.99
Grilled vegetable patty with creamy avocado, fresh lettuce, and tomato slices.
Fish Fillet Burger
fish_fillet_burger.jpg
9.49
Golden fried fish fillet topped with tangy tartar sauce and crisp lettuce.
Double Cheeseburger
double_cheeseburger.jpg
10.99
Two beef patties layered with melted cheese, caramelized onions, and crispy bacon.
Category:Pasta
total product:[object Object],[object Object],[object Object],[object Object],[object Object]
Spaghetti Bolognese
spaghetti_bolognese.jpg
11.99
Traditional Italian pasta with rich tomato and meat sauce, sprinkled with Parmesan.
Alfredo Fettuccine
alfredo_fettuccine.jpg
12.49
Creamy Alfredo sauce with fettuccine pasta and grilled chicken.
Penne Arrabbiata
penne_arrabbiata.jpg
9.99
Spicy tomato sauce with garlic and chilies, served with al dente penne pasta.
Pesto Pasta
pesto_pasta.jpg
10.49
Fresh basil pesto mixed with tender pasta and topped with grilled vegetables.
Mac and Cheese
mac_and_cheese.jpg
8.49
Creamy and cheesy macaroni with a crispy breadcrumb topping.
Category:Fried Rice
total product:[object Object],[object Object],[object Object],[object Object],[object Object]
Chicken Fried Rice
chicken_fried_rice.jpg
9.99
Classic stir-fried rice with tender chicken pieces and fresh vegetables.
Egg Fried Rice
egg_fried_rice.jpg
8.49
Fluffy scrambled eggs stir-fried with rice, carrots, and peas for a simple yet tasty dish.
Shrimp Fried Rice
shrimp_fried_rice.jpg
12.49
Juicy shrimp combined with savory fried rice, seasoned to perfection.
Vegetable Fried Rice
vegetable_fried_rice.jpg
7.99
Fresh, crunchy vegetables stir-fried with soy sauce and jasmine rice.
Schezwan Fried Rice
schezwan_fried_rice.jpg
10.99
Spicy and tangy rice stir-fried with a bold Schezwan sauce, vegetables, and chicken.
@ravi-kumar-kushwaha ➜ /workspaces/JavaScript/Function (main) $ node function3.js
Category:Biryani
total product:[object Object],[object Object],[object Object],[object Object],[object Object]
Title:Hyderabadi Biryani
Image:hyderabadi_biryani.jpg
Price:12.99
Description:Fragrant basmati rice layered with tender chicken, spiced with saffron, and slow-cooked to perfection.
Title:Kolkata Biryani
Image:kolkata_biryani.jpg
Price:11.99
Description:Lightly spiced biryani with succulent chicken, potatoes, and a hint of rose water.
Title:Lucknowi Biryani
Image:lucknowi_biryani.jpg
Price:13.99
Description:Aromatic rice cooked with rich, tender lamb, and flavored with saffron and star anise.
Title:Egg Biryani
Image:egg_biryani.jpg
Price:9.99
Description:Fluffy rice combined with perfectly boiled eggs and spices for a balanced, delicious meal.
Title:Vegetable Biryani
Image:vegetable_biryani.jpg
Price:8.99
Description:A colorful mix of fresh vegetables, fragrant spices, and basmati rice cooked to perfection.
Category:Pizza
total product:[object Object],[object Object],[object Object],[object Object],[object Object]
Title:Margherita Pizza
Image:margherita_pizza.jpg
Price:10.99
Description:Classic pizza with fresh tomatoes, mozzarella, and a sprinkle of basil.
Title:BBQ Chicken Pizza
Image:bbq_chicken_pizza.jpg
Price:12.49
Description:Smoky BBQ sauce topped with grilled chicken, onions, and cheese.
Title:Pepperoni Pizza
Image:pepperoni_pizza.jpg
Price:11.99
Description:Delicious pepperoni slices layered on a cheesy pizza base with a tangy tomato sauce.
Title:Veggie Delight Pizza
Image:veggie_delight_pizza.jpg
Price:9.99
Description:Packed with fresh bell peppers, onions, mushrooms, and olives on a thin, crispy crust.
Title:Cheese Burst Pizza
Image:cheese_burst_pizza.jpg
Price:13.99
Description:Ultra-cheesy pizza with a double layer of mozzarella and cheddar for cheese lovers.
Category:Burgers
total product:[object Object],[object Object],[object Object],[object Object],[object Object]
Title:Classic Beef Burger
Image:classic_beef_burger.jpg
Price:8.99
Description:Juicy beef patty topped with fresh lettuce, tomatoes, onions, and a special sauce.
Title:Chicken Zinger Burger
Image:chicken_zinger_burger.jpg
Price:7.99
Description:Crispy fried chicken patty served with spicy mayo and pickles on a soft bun.
Title:Veggie Supreme Burger
Image:veggie_supreme_burger.jpg
Price:6.99
Description:Grilled vegetable patty with creamy avocado, fresh lettuce, and tomato slices.
Title:Fish Fillet Burger
Image:fish_fillet_burger.jpg
Price:9.49
Description:Golden fried fish fillet topped with tangy tartar sauce and crisp lettuce.
Title:Double Cheeseburger
Image:double_cheeseburger.jpg
Price:10.99
Description:Two beef patties layered with melted cheese, caramelized onions, and crispy bacon.
Category:Pasta
total product:[object Object],[object Object],[object Object],[object Object],[object Object]
Title:Spaghetti Bolognese
Image:spaghetti_bolognese.jpg
Price:11.99
Description:Traditional Italian pasta with rich tomato and meat sauce, sprinkled with Parmesan.
Title:Alfredo Fettuccine
Image:alfredo_fettuccine.jpg
Price:12.49
Description:Creamy Alfredo sauce with fettuccine pasta and grilled chicken.
Title:Penne Arrabbiata
Image:penne_arrabbiata.jpg
Price:9.99
Description:Spicy tomato sauce with garlic and chilies, served with al dente penne pasta.
Title:Pesto Pasta
Image:pesto_pasta.jpg
Price:10.49
Description:Fresh basil pesto mixed with tender pasta and topped with grilled vegetables.
Title:Mac and Cheese
Image:mac_and_cheese.jpg
Price:8.49
Description:Creamy and cheesy macaroni with a crispy breadcrumb topping.
Category:Fried Rice
total product:[object Object],[object Object],[object Object],[object Object],[object Object]
Title:Chicken Fried Rice
Image:chicken_fried_rice.jpg
Price:9.99
Description:Classic stir-fried rice with tender chicken pieces and fresh vegetables.
Title:Egg Fried Rice
Image:egg_fried_rice.jpg
Price:8.49
Description:Fluffy scrambled eggs stir-fried with rice, carrots, and peas for a simple yet tasty dish.
Title:Shrimp Fried Rice
Image:shrimp_fried_rice.jpg
Price:12.49
Description:Juicy shrimp combined with savory fried rice, seasoned to perfection.
Title:Vegetable Fried Rice
Image:vegetable_fried_rice.jpg
Price:7.99
Description:Fresh, crunchy vegetables stir-fried with soy sauce and jasmine rice.
Title:Schezwan Fried Rice
Image:schezwan_fried_rice.jpg
Price:10.99
Description:Spicy and tangy rice stir-fried with a bold Schezwan sauce, vegetables, and chicken.
*/
})
