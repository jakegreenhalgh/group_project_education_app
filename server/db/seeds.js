use website;
db.dropDatabase();

db.categories.insertMany(
        [ 
                {   "category": "biodiversity",
                    "image": "https://images.unsplash.com/photo-1591782695697-5c8dc6e0eebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                    "description": "This is the description for the category page. Biodiversity is the first category we've chosen and I don't really know what it means",
                    "content": [
                                        {
                                            "_id": ObjectId(),                                            
                                            "type": "article",
                                            "name": "Scotland's Amazing Peatlands",
                                            "url": "https://www.wwf.org.uk/scotlands-amazing-peatland",
                                            "images": [
                                                        {"header": "https://images.unsplash.com/photo-1633854678155-7c0756840d27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"},
                                                        {"body1": "https://images.unsplash.com/photo-1587894736501-4e0131bf60b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80"} 
                                                        ],
                                            "text": "Peatlands are incredibly special habitats, made up of highly adapted plant species and home to a range of rare and important wildlife. They absorb carbon from the atmosphere and lock it up in peat. This helps tackle climate change. Peatlands form over thousands of years – 1 metre of peat takes 1,000 years to form, and some peat bogs can be over 10 metres deep! WHY ARE PEATLANDS IMPORTANT? - The peatlands in the UK together store more carbon than all of our forests put together.If we look after peatlands well, they can be our climate ally. But if we damage them, they can contribute to climate change and are less able to help us adapt and respond.  Around 80% of the UK’s peatlands are degraded in some way, leaking climate change emissions out into our atmosphere.NATURE OF THE PEATLANDS -Peatlands are home to birds that like to nest in open ground, such as the curlew, golden plover and hen harrier. Red deer, mountain hares, lizards, amphibians, insect-eating sundew plants and a host of invertebrates also thrive on peatlands. Peatlands are also really important for people. For example, most of Scotland’s drinking water is filtered through peatlands. Healthy peatlands produce clean water which requires fewer chemicals to treat. SCOTLAND'S PEATLANDS - Peatland cover 20% of Scotland's land. The majority of the UK's peatlands are in Scotland. Scotland is home to the Flow Country, in Sutherland. This vast peatland is under consideration for World Heritage Site status because it is a globally-rare type of blanket peatland. The Flows alone holds 5% of the global blanket bog resources. But 80% of Scotland’s peatlands are degraded in some way.  This affects their ability to capture carbon, provide home for wildlife and produce clean water."						
                                        },
                                        {
                                            "_id": ObjectId(),
                                            "type": "article",
                                            "name": "Example Article Number Two",
                                            "url": "https://www.google.co.uk/",
                                            "images": [
                                                        {"header": "https://images.unsplash.com/photo-1633854678155-7c0756840d27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"},
                                                        {"body1": "https://images.unsplash.com/photo-1587894736501-4e0131bf60b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80"} 
                                                        ],
                                            "text": "Example Content Number Two. Example Content Number Two.  Example Content Number Two. Example Content Number Two. Example Content Number Two. Example Content Number Two."		
                                        }		
                                ]
                },
                {   "category": "renewables",
                    "image": "https://images.unsplash.com/photo-1466629437334-b4f6603563c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80",
                    "description": "Renewable energy is described here. It's good. Fossil fuels are bad.",
                    "content": [
                                    {
                                        "_id": ObjectId(),
                                        "type": "article",
                                        "name": "Wind Farms Are Great",
                                        "url": "https://www.wwf.org.uk/updates/increased-offshore-wind-ambition-2030",
                                        "images": [
                                                    {"header": "https://images.unsplash.com/photo-1544250726-cf5d75ffc212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1515&q=80"},
                                                    {"body1": "https://images.unsplash.com/photo-1587894736501-4e0131bf60b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80"} 
                                                    ],
                                        "text": "INCREASED OFFSHORE WIND AMBITION BY 2030 – WWF Scotland comment - Commenting on the release today of the Scottish Government’s new ambition to increase offshore wind capacity [1], Fabrice Leveque, head of policy at WWF Scotland said: ‘Offshore wind is already powering hundreds of thousands of Scottish homes and this new plan will help grow an industry that’s vital to reach net-zero climate emissions by 2045. Each project creates hundreds of jobs and can help put Scotland on a path to a green recovery. In order to ensure local communities and businesses benefit, it’s imperative the UK and Scottish Governments work closely together to ensure as much work as possible goes to local supply chains’"						
                                    },
                                    {
                                        "_id": ObjectId(),
                                        "type": "article",
                                        "name": "Example Article Number Three",
                                        "url": "https://www.google.co.uk/",
                                        "images": [
                                                    {"header": "https://images.unsplash.com/photo-1633854678155-7c0756840d27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"},
                                                    {"body1": "https://images.unsplash.com/photo-1587894736501-4e0131bf60b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80"} 
                                                    ],
                                        "text": "Example Content Number Three. Example Content Number Three.  Example Content Number Three. Example Content Number Three. Example Content Number Three. Example Content Number Three."		
                                    },
                                    {
                                        "_id": ObjectId(),
                                        "type": "quiz",
                                        "name": "Renewables Quiz",
                                        "images": [
                                                    {"header": "https://images.unsplash.com/photo-1580974852861-c381510bc98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80"}
                                                    ],
                                        "questions": [
                                                        {
                                                        "number": "1",
                                                        "title": "Why does Jacob hate wind farms?",
                                                        "choices":
                                                            [   
                                                            {"id": "option1", "text": "He prefers normal farms", "isCorrect": "false"},
                                                            {"id": "option2", "text": "He's financed by Big Oil", "isCorrect": "false"},
                                                            {"id": "option3", "text": "He saw too many wind farm images in his previous job", "isCorrect": "false"},
                                                            {"id": "option4", "text": "He can't say, otherwise he's afraid he'd have to kill you", "isCorrect": "true"}
                                                            ]
                                                        },
                                                        {
                                                            "number": "2",
                                                            "title": "Why does the UK Gov not invest more in renewables?",
                                                            "choices":
                                                                [   
                                                                {"id": "option1", "text": "Tories be crazy", "isCorrect": "false"},
                                                                {"id": "option2", "text": "The Tories are extremely bad", "isCorrect": "false"},
                                                                {"id": "option3", "text": "They're just having a short 12 year blip of ruining the country, they'll sort it soon. They promise", "isCorrect": "false"},
                                                                {"id": "option4", "text": "They're all in the pocket of Big Oil and are also awful people. All other options are valid", "isCorrect": "true"}
                                                                ]
                                                            },
                                                        {
                                                            "number": "3",
                                                            "title": "Generic Renewables Question",
                                                            "choices":
                                                                [   
                                                                {"id": "option1", "text": "Generic Renewables Answer 1", "isCorrect": "true"},
                                                                {"id": "option2", "text": "Generic Renewables Answer 2", "isCorrect": "false"},
                                                                {"id": "option3", "text": "Generic Renewables Answer 3", "isCorrect": "false"},
                                                                {"id": "option4", "text": "Generic Renewables Answer 4", "isCorrect": "false"}
                                                                ]
                                                            }
                                                    ]	
                                    }			
                                ]
                }
        
        ] 

)


db.users.insertMany(
    [
        {
            "username": "andrew",
            "password": 123,
            "logged_in": "false",
            "saved_quiz":[],
            "favourites":[],
            "read":[]
        },
        {
            "username": "jacob",
            "password": 123,
            "logged_in": "false",
            "saved_quiz":[],
            "favourites":[],
            "read":[]
        },
        {
            "username": "jack",
            "password": 123,
            "logged_in": "false",
            "saved_quiz":[],
            "favourites":[],
            "read":[]
        },
        {
            "username": "carly",
            "password": 123,
            "logged_in": "false",
            "saved_quiz":[],
            "favourites":[],
            "read":[]
        }
    ]
)

db.ourWorld.insertMany(
    [
        {   "category": "Endangered Species",
            "image": "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80",
            "description": "An endangered species is a species that is very likely to become extinct in the near future, either worldwide or in a particular political jurisdiction. Endangered species may be at risk due to factors such as habitat loss, poaching and invasive species.",
            "content": [
                            {
                                "_id": ObjectId(),
                                "type": "facts" ,
                                "name": "The Snow Leopard",
                                "estimated_number_2000": 10000,
                                "estimated_number_2005": 8000, 
                                "estimated_number_2015": 6590, 
                                "estimated_number_2022": 4080, 
                                "url": "https://www.wwf.org.uk/learn/wildlife/snow-leopards",
                                "image": "https://images.unsplash.com/photo-1639841377321-b54eab2c8430?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25vdyUyMGxlb3BhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                                "text": "Snow leopards are so endangered that it's incredibly difficult to find free images of them on unsplash",
                            },
                            {
                                "_id": ObjectId(),
                                "type": "facts" ,
                                "name": "The Sunda Island Tiger",
                                "estimated_number_2000": 1000,
                                "estimated_number_2005": 800,
                                "estimated_number_2015": 500,
                                "estimated_number_2022": 400,
                                "url": "https://www.worldwildlife.org/species/sunda-tiger",
                                "image":"https://images.unsplash.com/photo-1501705388883-4ed8a543392c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZGElMjBpc2xhbmQlMjB0aWdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                                "text": "This isn't a picture of the Sunda Island Tiger, it's just a normal one. The Sunda Island tiger is so endangered there are only 400 left in the world (estimated)",
                            },
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

