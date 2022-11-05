# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{"name": "Ibrahim", "email": "ibrahim@officelilies.com", "has_admin_privileges": true}, {"name": "Anul", "email": "anul@email.com"}, {"name": "Kedy", "email": "Kedy@email.com"}, {"name": "benji", "email": "benji@email.com"}])

plants = Plant.create([{"name": "Peace lily", "price": 70, "number_in_stock": 5, "image": "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/12/peace-lily.jpg"}, {"name": "Cast iron plant", "price": 90, "number_in_stock": 4, "image": "http://cdn.shopify.com/s/files/1/0062/8532/8445/products/Cast_Iron_Plant_BB_600x600_a24d8d61-9b54-4df4-a879-333035f00dda_grande.jpg?v=1633113833"}, {"name": "Pothos(Devil's ivy)", "price": 80, "number_in_stock": 3, "image": "https://h2.commercev3.net/cdn.brecks.com/images/800/76447A.jpg"}, {"name": "Snake plant", "price": 65, "number_in_stock": 1, "image": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_burbank_almond.jpg?v=1660320223"}])

orders = Order.create([{"amount": 90, "user_id": 3, "plant_id": 2}, {"amount": 70, "user_id": 2, "plant_id": 1}, {"amount": 80, "user_id": 3, "plant_id": 3}])

reviews = Review.create([{"message": "This amazing plant has stablized the humidity in my office. It is easy to maintain too.", "rating": 5, "user_id": 3, "plant_id": 2}, {"message": "This plant has made my office lively and natural. But the leaves drop frequently.", "rating": 4, "user_id": 3, "plant_id": 3}, {"message": "This has really decorated my office and makes my office highly ventilated", "rating": 5, "user_id": 2, "plant_id": 1}])

replies = Reply.create([{"message": "That's so bad. Thanks for letting us know. please contact us on 0234567895. we could help you maintain that.", "review_id": 2}])
