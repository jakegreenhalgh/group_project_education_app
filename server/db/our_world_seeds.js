use website;
db.dropDatabase();

db.categories.insertMany(
        [
            {   "category": "Endangered Species",
                "image": "https://unsplash.com/photos/Uu1CtKngEXY",
                "description": "An endangered species is a species that is very likely to become extinct in the near future, either worldwide or in a particular political jurisdiction. Endangered species may be at risk due to factors such as habitat loss, poaching and invasive species."
                [
                    {
                        "_id": ObjectId(),
                        "type": "facts" ,
                        "name": "The Snow Leopard",
                        "url": "https://www.wwf.org.uk/learn/wildlife/snow-leopards",
                        "image": "https://unsplash.com/photos/HFIvhaOcHVA",
                        "text": "Snow leopards are so endangered that it's incredibly difficult to find free images of them on unsplash",
                    },
                    {
                        "_id": ObjectId(),
                        "type": "facts" ,
                        "name": "The Sunda Island Tiger",
                        "url": "https://www.worldwildlife.org/species/sunda-tiger",
                        "image":"https://unsplash.com/photos/-KNNQqX9rqY",
                        "text": "This isn't a picture of the Sunda Island Tiger, it's just a normal one. The Sunda Island tiger is so endangered there are only 400 left in the world (estimated)",
                    }
                ]
            },

            {   "category": "Rising Sea Levels",
                // "image": INSERT
                "description": "As the title suggests the sea levels are rising. They are rising at double the rate they were in 1900. Did you know by 2050 lots of England will be underwater? Did you know that's only 28 years away? Why is no one doing anything about this?"
                [
                    {
                        "_id": ObjectId(),
                        "type":
                        "name": 
                        "url":
                        "image":
                        "text":,

                    },
                    {

                    }
                ]
            
            },

            {   "category": "Deforestation",
                // "Image": INSERT
                "description":
                [
                    {

                    },
                    {

                    }
                ]

            }

        ]





);