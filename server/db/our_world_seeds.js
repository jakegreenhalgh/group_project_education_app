use website;
db.dropDatabase();

db.categories.insertMany(
        [
            {   "category": "Endangered Species",
                // "image": INSERT",
                "description": "An endangered species is a species that is very likely to become extinct in the near future, either worldwide or in a particular political jurisdiction. Endangered species may be at risk due to factors such as habitat loss, poaching and invasive species.",
                "content": [
                    {
                        "_id": ObjectId(),
                        "type": "facts" ,
                        "name": "The Snow Leopard",
                        "url": "https://www.wwf.org.uk/learn/wildlife/snow-leopards",
                        // "image": INSERT,
                        "text": "Snow leopards are so endangered that it's incredibly difficult to find free images of them on unsplash",
                    },
                    {
                        "_id": ObjectId(),
                        "type": "facts" ,
                        "name": "The Sunda Island Tiger",
                        "url": "https://www.worldwildlife.org/species/sunda-tiger",
                        // "image":INSERT,
                        "text": "This isn't a picture of the Sunda Island Tiger, it's just a normal one. The Sunda Island tiger is so endangered there are only 400 left in the world (estimated)",
                    }
                ]
            },

            {   "category": "Rising Sea Levels",
                // "image": INSERT
                "description": "As the title suggests the sea levels are rising. They are rising at double the rate they were in 1900. Did you know by 2050 lots of England (and plenty of Scotland) will be underwater? Did you know that's only 28 years away? Why is no one doing anything about this?",
                "content": [
                    {
                        "_id": ObjectId(),
                        "type": "facts",
                        "name": "Facts about the rising sea",
                        "url": "https://blog.historicenvironment.scot/2016/02/scotlands-dynamic-coasts/",
                        // "image": INSERT
                        "text": "Rising sea levels are a result of increased global warming melting the ice caps. By 2050 to give you an idea of how much trouble we are in the sea level is expected to rise by as much as 22cm. Fun fact: The way the UK is going it's probably going to be much higher!! ",

                    },
                    {
                        "_id": ObjectId(),
                        "type": "facts",
                        "name": "Skara Brae and the rising sea levels",
                        "url": "https://yaleclimateconnections.org/2019/04/stone-age-village-could-be-lost-2/",
                        // "image": INSERT
                        "text": "Skara Brae is an ancient stone age coastal village on the island of Orkney. It's actually older than the pyramids, but weirdly no one seems to care about this. With the rising sea, this amazing presereved historic site will probably be underwater.",
                    }
                ]
            
            },

            {   "category": "Deforestation",
                // "Image": INSERT
                "description": "Deforestation is occurring at an incredible speed, by the time you say the word 'deforestation' another chunk of forest the size of a football pitch has been destroyed. Forests provide habitats to endangered species, affect the rainfall cycle, and turn Co2 into oxygen",
                "content": [
                    {
                        "_id": ObjectId(),
                        "type": "facts",    
                        "name": "Why deforestation is really bad in general",
                        "url":"https://www.wwf.org.uk/learn/effects-of/deforestation",
                        // "image": INSERT 
                        "text":"Forest loss and damage is the cause of around 10% of global warming. There is simply no way we can fight the climate crisis if we do not stop deforestation.",

                    },
                    {
                        "_id": ObjectId(),
                        "type": "facts",
                        "name": "Deforestation and the Amazon Rainforest",
                        "url":
                        // "image": INSERT
                        "text":,
                    }
                ]

            }

        ]





);