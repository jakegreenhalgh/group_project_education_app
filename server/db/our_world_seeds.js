use website;
db.dropDatabase();

db.categories.insertMany(
        [
            {   "category": "Endangered Species",
                "image": "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80",
                "description": "An endangered species is a species that is very likely to become extinct in the near future, either worldwide or in a particular political jurisdiction. Endangered species may be at risk due to factors such as habitat loss, poaching and invasive species.",
                "content": [
                                {
                                    "_id": ObjectId(),
                                    "type": "facts" ,
                                    "name": "The Snow Leopard",
                                    "url": "https://www.wwf.org.uk/learn/wildlife/snow-leopards",
                                    "image": "https://images.unsplash.com/photo-1639841377321-b54eab2c8430?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25vdyUyMGxlb3BhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                                    "text": "Snow leopards are so endangered that it's incredibly difficult to find free images of them on unsplash",
                                },
                                {
                                    "_id": ObjectId(),
                                    "type": "facts" ,
                                    "name": "The Sunda Island Tiger",
                                    "url": "https://www.worldwildlife.org/species/sunda-tiger",
                                    "image":"https://images.unsplash.com/photo-1501705388883-4ed8a543392c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZGElMjBpc2xhbmQlMjB0aWdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                                    "text": "This isn't a picture of the Sunda Island Tiger, it's just a normal one. The Sunda Island tiger is so endangered there are only 400 left in the world (estimated)",
                                }
                              ]
            },
            {   "category": "Rising Sea Levels",
                "image": "https://images.unsplash.com/photo-1503942142281-94af0aded523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJpc2luZyUyMHNlYSUyMGxldmVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                "description": "As the title suggests the sea levels are rising. They are rising at double the rate they were in 1900. Did you know by 2050 lots of England (and plenty of Scotland) will be underwater? Did you know that's only 28 years away? Why is no one doing anything about this?",
                "content":   [
                                {
                                    "_id": ObjectId(),
                                    "type": "facts",
                                    "name": "Facts about the rising sea",
                                    "url": "https://blog.historicenvironment.scot/2016/02/scotlands-dynamic-coasts/",
                                    "image": "https://images.unsplash.com/photo-1494086540177-cb524d1bc2f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmlzaW5nJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                                    "text": "Rising sea levels are a result of increased global warming melting the ice caps. By 2050 to give you an idea of how much trouble we are in the sea level is expected to rise by as much as 22cm. Fun fact: The way the UK is going it's probably going to be much higher!! ",

                                },
                                {
                                    "_id": ObjectId(),
                                    "type": "facts",
                                    "name": "Skara Brae and the rising sea levels",
                                    "url": "https://yaleclimateconnections.org/2019/04/stone-age-village-could-be-lost-2/",
                                    "image": "https://images.unsplash.com/photo-1626707472173-9316cbfd360a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
                                    "text": "Skara Brae is an ancient stone age coastal village on the island of Orkney. It's actually older than the pyramids, but weirdly no one seems to care about this. With the rising sea, this amazing presereved historic site will probably be underwater.",
                                }
                             ]
            
            },
            {   "category": "Deforestation",
                "Image": "https://images.unsplash.com/photo-1659698146801-3076e916f1bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                "description": "Deforestation is occurring at an incredible speed, by the time you say the word 'deforestation' another chunk of forest the size of a football pitch has been destroyed. Forests provide habitats to endangered species, affect the rainfall cycle, and turn Co2 into oxygen",
                "content": [
                                {
                                    "_id": ObjectId(),
                                    "type": "facts",    
                                    "name": "Why deforestation is really bad in general",
                                    "url":"https://www.wwf.org.uk/learn/effects-of/deforestation",
                                    "image": "https://images.unsplash.com/photo-1564750575890-a7f5c5e690a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVhZCUyMGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                                    "text":"Forest loss and damage is the cause of around 10% of global warming. There is simply no way we can fight the climate crisis if we do not stop deforestation.",

                                },
                                {
                                    "_id": ObjectId(),
                                    "type": "facts",
                                    "name": "Deforestation and the Amazon Rainforest",
                                    "url": "https://www.amazonconservation.org/the-challenge/threats/",
                                    "image": "https://images.unsplash.com/photo-1602484894924-75eddc89d32b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                                    "text": "The Amazon Rainforest has a tipping point at which it is no longer able to sustain itself and the life within it. This tipping point is thought to be 20%, and deforestation is already at 17%. If 20% is reached, the Amazon will turn into a dried out grassland",
                                }
                       ]
            }
        ]
);