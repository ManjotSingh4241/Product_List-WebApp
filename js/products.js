/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */

    {
      id: "Product:01",
      title: "White Chocolate",
      description: "This homemade ivory coloured chocolate is enriched with cream and melts in mouth.",
      price: 120,
      discontinued: false,
      categories: ["category:01"]
    },
    {
      id: "Product:02",
      title: "Nutty Chocolate",
      description: "This chocolate is loaded with nuts and chocolate which is perfect mixture to resolve hunger!",
      price: 140,
      discontinued: true,
      categories: ["category:01"]
    },
    {
      id: "Product:03",
      title: "Caramel Chocolate",
      description: "This candy has chocolate cubes filled with caramel. Perfect for everlasting sweetness:)",
      price: 130,
      discontinued: false,
      categories: ["category:01"]
    },
    {
      id: "Product:04",
      title: "Oreo Chocolate",
      description: "The absolute favorite among kids. This chocolate is made with Oreo cookies blended with homemade dark chocolate roasted with Cream",
      price: 109,
      discontinued: false,
      categories: ["c1"]
    },
    {
      id: "Product:05",
      title: "Crazy Bubbles Chocolate",
      description: "This is a crafty chocolate made with bubble candy coated with silk chocolate and is perfect combination for some craziness!!",
      price: 150,
      discontinued: false,
      categories: ["category:01", "category:02"]
    },
    {
      id: "Product:06",
      title: "Chocolate Buttons",
      description: "there are different types of chocolates, like white, caramel, and dark, melted into buttons making it fun to eat chocolates..!",
      price: 160,
      discontinued: true,
      categories: ["category:01"]
    },
    {
      id: "Product:07",
      title: "Chocolate Cotton",
      description: "This chocolate comes inside the chocolate flavoured cotton candy so double taste of the chocolate!!",
      price: 140,
      discontinued: false,
      categories: ["category:01", "category:03"]
    },
    {
      id: "Product:08",
      title: "Lollipop",
      description: "This is sugar and sprinkles coated candy lollipop which is our best seller!!",
      price: 100,
      discontinued: false,
      categories: ["category:02"]
    },
    {
      id: "Product:09",
      title: "Chocolate Brittles",
      description: "These brittles are coated with dense chocolate enriching its yummy flavour.",
      price: 130,
      discontinued: false,
      categories: ["category:01", "category:02"]
    },
    {
      id: "Product:10",
      title: "Candy Canes",
      description: "These sugary candies is made from fresh beets and canes",
      price: 120,
      discontinued: false,
      categories: ["category:02"]
    },
    {
      id: "Product:11",
      title: "Fruity Blast Candy",
      description: "This candy is made of 5 fruits, namely, apple, pineapple, grapes, orange, and peach which gives a mesmerizing fruity experience!",
      price: 110,
      discontinued: false,
      categories: ["category:02"]
    },
    {
      id: "Product:12",
      title: "Rock Candy",
      description: "These multi-coloured candies are made with no artificial flavour and looks delicious.. ",
      price: 100,
      discontinued: true,
      categories: ["category:02"]
    },
    {
      id: "Product:13",
      title: "Toffee",
      description: "this chewy candy comes with a blast of caramel in it.",
      price: 100,
      discontinued: false,
      categories: ["category:02"]
    },
    {
      id: "Product:14",
      title: "gummy bears",
      description: "The sugary gummy bears are made of different fruit flavours and are loved by the kids.",
      price: 110,
      discontinued: false,
      categories: ["category:02"]
    },

    {
      id: "Product:15",
      title: "Grapy-grape",
      description: "This cotton candy is made up of grape flavor and is shaped like a grape so best suited with the name..",
      price: 450,
      discontinued: false,
      categories: ["category:03"]
    },
    {
      id: "Product:16",
      title: "Cherry-Blossom",
      description: "This cotton candy is made with the flavor of cherry and it looks like the cherry blossom tree!!",
      price: 490,
      discontinued: false,
      categories: ["category:03"]
    },
    {
      id: "Product:17",
      title: "Unicorn",
      description: "Unicorn cotton candy is made up of different fruit flavours and is styled like a unicorn which is fun for kids!!",
      price: 490,
      discontinued: false,
      categories: ["category:03"]
    },
    {
      id: "Product:18",
      title: "Caramel Camel",
      description: "This cotton candy is made up of caramel cotton and is designed like a camel with strips of solid caramel as leash",
      price: 570,
      discontinued: false,
      categories: ["category:03"]
    },
    {
      id: "Product:19",
      title: "Blue berry",
      description: "This is a cute little bear made up of blue berry flavoured cotton candy",
      price: 580,
      discontinued: false,
      categories: ["category:03"]
    },
    {
      id: "Product:20",
      title: "Sparkle",
      description: "This is vanilla cotton candy with sprinkles on it",
      price: 470,
      discontinued: false,
      categories: ["category:03"]
    },
];
