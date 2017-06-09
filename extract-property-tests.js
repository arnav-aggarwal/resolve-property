module.exports = [
    {
        obj: { a: 'Hello!' },
        paths: [
            'obj.a',
            `obj['a']`,
        ],
        property: 'Hello!',
    },
    {
        obj: {
            a: {
                b: {
                    c: [
                        {
                            d: {
                                e: [
                                    '_',
                                    {
                                        f: 'Hello!',
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
        },
        paths: [`obj.a.b.c['0'].d.e[1].f`],
        property: 'Hello!'
    },
    {
        obj: [
            [],
            {
                tags: [
                    'abc',
                    'def',
                ],
                friends: [
                    '01',
                    {
                        id: '1234',
                        name: 'Smith'
                    }
                ],
            },
        ],
        paths: [`test1[1].friends[1].name`],
        property: 'Smith',
    },
    {
        obj: {
            prop1: {
                arr: [
                    {
                        arr: []
                    }, {
                        arr: ['Hello!']
                    }
                ]
            },
            prop2: {
                objProp: {
                    arr: ['Hi!']
                }
            }
        },
        paths: [
            'obj.prop1.arr[1].arr[0]',
            "obj['prop1'].arr[1].arr[0]",
            `obj['prop1']['arr'][1]['arr'][0]`,
        ],
        property: 'Hello!'
    },
    {
        obj: [
            {
                "_id": "5935a1d79b73651ec4d2e8be",
                "index": 0,
                "guid": "c602b0bc-9b71-4368-9d8d-f733c5fba545",
                "isActive": false,
                "balance": "$3,938.34",
                "picture": "http://placehold.it/32x32",
                "age": 38,
                "eyeColor": "green",
                "name": "Aimee Franks",
                "gender": "female",
                "company": "COMTEST",
                "email": "aimeefranks@comtest.com",
                "phone": "+1 (977) 400-2511",
                "address": "710 Story Court, Rodanthe, South Dakota, 7366",
                "about": "Culpa dolore laboris sit deserunt duis dolore et nostrud excepteur ipsum incididunt adipisicing. Dolore deserunt nulla amet nisi eiusmod cillum ex qui exercitation proident. Ea elit mollit mollit excepteur dolore reprehenderit exercitation reprehenderit. Enim reprehenderit officia commodo labore esse id in et excepteur id elit. Dolor duis fugiat laboris minim ad do. Labore mollit amet Lorem occaecat consequat ea voluptate deserunt aute aute excepteur.\r\n",
                "registered": "2016-08-28T03:41:15 +07:00",
                "latitude": 69.157058,
                "longitude": 107.050462,
                "tags": [
                    "aliqua",
                    "anim",
                    "enim",
                    "elit",
                    "occaecat",
                    "velit",
                    "veniam"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Mann Gordon"
                    },
                    {
                        "id": 1,
                        "name": "Rosanne Pope"
                    },
                    {
                        "id": 2,
                        "name": "Laverne Vargas"
                    }
                ],
                "greeting": "Hello, Aimee Franks! You have 8 unread messages.",
                "favoriteFruit": "banana"
            },
            {
                "_id": "5935a1d708e3ee6d56190870",
                "index": 1,
                "guid": "f450a01e-b30e-4030-a187-371ace85dd41",
                "isActive": true,
                "balance": "$2,504.24",
                "picture": "http://placehold.it/32x32",
                "age": 30,
                "eyeColor": "blue",
                "name": "Reese Rowland",
                "gender": "male",
                "company": "GENMEX",
                "email": "reeserowland@genmex.com",
                "phone": "+1 (992) 454-2074",
                "address": "799 Hubbard Street, Ilchester, Illinois, 3100",
                "about": "Lorem cupidatat nostrud ad officia in ex consectetur. Enim aute proident ullamco Lorem minim. Pariatur laboris laboris aliquip velit eiusmod culpa tempor officia veniam officia. Quis amet commodo laboris nisi esse aliquip laboris nisi aliqua adipisicing ea non. Sint culpa ullamco elit excepteur elit ea nulla adipisicing. Ullamco amet amet irure quis voluptate elit adipisicing sint officia duis amet amet ut incididunt. Excepteur anim nostrud irure officia eu aliquip.\r\n",
                "registered": "2014-11-18T12:33:53 +08:00",
                "latitude": -37.07622,
                "longitude": -32.794185,
                "tags": [
                    "occaecat",
                    "duis",
                    "consequat",
                    "non",
                    "sunt",
                    "do",
                    "eu"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Mcconnell Donovan"
                    },
                    {
                        "id": 1,
                        "name": "Spencer Bates"
                    },
                    {
                        "id": 2,
                        "name": "Alta Castro"
                    }
                ],
                "greeting": "Hello, Reese Rowland! You have 1 unread messages.",
                "favoriteFruit": "strawberry"
            },
            {
                "_id": "5935a1d7a5fff07cef6fe1aa",
                "index": 2,
                "guid": "b9516cf1-ac30-4e84-a430-12bc8228e3f1",
                "isActive": true,
                "balance": "$1,403.30",
                "picture": "http://placehold.it/32x32",
                "age": 29,
                "eyeColor": "brown",
                "name": "Johnson Shelton",
                "gender": "male",
                "company": "GINKLE",
                "email": "johnsonshelton@ginkle.com",
                "phone": "+1 (953) 522-2258",
                "address": "226 Prescott Place, Sterling, Delaware, 9570",
                "about": "Sunt do minim reprehenderit qui. Ut qui minim dolore fugiat cillum ut cupidatat consectetur mollit. Ullamco eu in occaecat quis non nisi non consequat ut qui commodo minim consequat magna.\r\n",
                "registered": "2017-01-11T10:09:12 +08:00",
                "latitude": -2.942271,
                "longitude": 39.954186,
                "tags": [
                    "id",
                    "minim",
                    "laboris",
                    "excepteur",
                    "ipsum",
                    "deserunt",
                    "reprehenderit"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Marissa Gonzalez"
                    },
                    {
                        "id": 1,
                        "name": "Marjorie Grant"
                    },
                    {
                        "id": 2,
                        "name": "Pruitt Butler"
                    }
                ],
                "greeting": "Hello, Johnson Shelton! You have 2 unread messages.",
                "favoriteFruit": "apple"
            },
            {
                "_id": "5935a1d7382e9cf3787e5b85",
                "index": 3,
                "guid": "f20ab2aa-f41c-49bf-b59d-46a43f49e395",
                "isActive": false,
                "balance": "$3,990.78",
                "picture": "http://placehold.it/32x32",
                "age": 32,
                "eyeColor": "brown",
                "name": "Clarke Moses",
                "gender": "male",
                "company": "PEARLESEX",
                "email": "clarkemoses@pearlesex.com",
                "phone": "+1 (892) 552-2270",
                "address": "791 Gardner Avenue, Lynn, New Hampshire, 2515",
                "about": "Nostrud amet do mollit qui enim deserunt. Ullamco ad ipsum ullamco dolor irure. Incididunt consequat nulla excepteur ipsum nulla fugiat in magna cupidatat irure. Esse deserunt eiusmod adipisicing esse irure. Ex tempor occaecat ex ad labore laboris et non excepteur labore.\r\n",
                "registered": "2016-03-08T10:47:10 +08:00",
                "latitude": -64.710179,
                "longitude": -146.400047,
                "tags": [
                    "cupidatat",
                    "non",
                    "incididunt",
                    "non",
                    "irure",
                    "ad",
                    "nisi"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Rosie Salazar"
                    },
                    {
                        "id": 1,
                        "name": "Barrett Rich"
                    },
                    {
                        "id": 2,
                        "name": "Minerva Roach"
                    }
                ],
                "greeting": "Hello, Clarke Moses! You have 6 unread messages.",
                "favoriteFruit": "apple"
            },
            {
                "_id": "5935a1d7ca8b71fe5429259c",
                "index": 4,
                "guid": "6b74c445-3823-4bf7-b656-7904fa5cd39d",
                "isActive": false,
                "balance": "$1,496.55",
                "picture": "http://placehold.it/32x32",
                "age": 26,
                "eyeColor": "brown",
                "name": "Agnes Burnett",
                "gender": "female",
                "company": "ZENOLUX",
                "email": "agnesburnett@zenolux.com",
                "phone": "+1 (904) 420-2909",
                "address": "861 Coles Street, Gadsden, Marshall Islands, 5971",
                "about": "Minim laborum aliqua officia ullamco eiusmod non officia anim in officia exercitation laboris proident ullamco. Laborum pariatur ipsum qui fugiat amet duis. Minim commodo consequat occaecat eiusmod non sint. Eu qui anim nulla ad deserunt ipsum laborum aliqua esse fugiat ex adipisicing consequat magna. Tempor irure proident eu sint ex Lorem fugiat.\r\n",
                "registered": "2016-02-16T10:06:21 +08:00",
                "latitude": -18.57469,
                "longitude": 158.457486,
                "tags": [
                    "eu",
                    "qui",
                    "magna",
                    "consectetur",
                    "ad",
                    "proident",
                    "commodo"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Christi Eaton"
                    },
                    {
                        "id": 1,
                        "name": "Crosby Fuentes"
                    },
                    {
                        "id": 2,
                        "name": "Karla Hanson"
                    }
                ],
                "greeting": "Hello, Agnes Burnett! You have 4 unread messages.",
                "favoriteFruit": "strawberry"
            }
        ],
        paths: [`test1[1].friends[1].name`],
        property: "Spencer Bates",
    },
    {
        obj: {
            "foo_code": 404,
            "foo_rbody": {
                "query": {
                    "info": {
                        "acme_no": "444444",
                        "road_runner": "123"
                    },
                    "error": "no_lunch",
                    "message": "runner problem."
                }
            },
            "acme_no": "444444",
            "road_runner": "123",
            "xyzzy_code": 200,
            "xyzzy_rbody": {
                "api": {
                    "items": [
                        {
                            "desc": "OK",
                            "id": 198,
                            "acme_no": "789",
                            "road_runner": "123",
                            "params": {
                                "bicycle": "2wheel",
                                "willie": "hungry",
                                "height": "1",
                                "$coyote_$id": {
                                    "$": "Hello there!"
                                }
                            },
                            "activity": "TRAP",
                            "state": "active",
                            "status": 200,
                            "type": "chase"
                        }
                    ]
                }
            }
        },
        paths: [`obj["xyzzy_rbody"]['api'].items["0"].params.$coyote_$id['$']`],
        property: 'Hello there!',
    },
];
