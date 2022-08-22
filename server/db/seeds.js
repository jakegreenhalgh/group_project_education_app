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
                                                            {"option1": "He prefers normal farms"},
                                                            {"option2": "He's financed by Big Oil"},
                                                            {"option3": "He saw too many wind farm images in his previous job"},
                                                            {"option4": "He can't say, otherwise he's afraid he'd have to kill you"}
                                                            ],
                                                        "answer": {"option3": "He saw too many wind farm images in his previous job"}
                                                        },
                                                        {
                                                            "number": "2",
                                                            "title": "Why does the UK Gov not invest more in renewables?",
                                                            "choices":
                                                                [   
                                                                {"option1": "Tories be crazy"},
                                                                {"option2": "The Tories are extremely bad"},
                                                                {"option3": "They're just having a short 12 year blip of ruining the country, they'll sort it soon. They promise"},
                                                                {"option4": "They're all in the pocket of Big Oil and are also awful people. All other options are valid"}
                                                                ],
                                                            "answer": {"option4": "They're all in the pocket of Big Oil and are also awful people. All other options are valid"}
                                                            },
                                                        {
                                                            "number": "3",
                                                            "title": "Generic Renewables Question",
                                                            "choices":
                                                                [   
                                                                {"option1": "Generic Renewables Answer 1"},
                                                                {"option2": "Generic Renewables Answer 2"},
                                                                {"option3": "Generic Renewables Answer 3"},
                                                                {"option4": "Generic Renewables Answer 4"}
                                                                ],
                                                            "answer": {"option2": "Generic Renewables Answer 2"}
                                                            }
                                                    ]	
                                    }			
                                ]
                }
        
        ] 

)
