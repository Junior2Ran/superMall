var data = {
    "code":1,
    "data":{
        "rows":[
            {
                "style_id":"carousel_view",
                "ratio":0.5,
                "data":[
                    {
                        "img_url":"./images/banner1.png",
                        "url":"/my"
                    },
                    {
                        "img_url":"./images/banner2.png",
                        "url":"/category"
                    },
                    {
                        "img_url":"./images/banner3.png",
                        "url":"/cart"
                    }
                ]
            },
            {
                "style_id":"grid_view",
                "ratio":0.5,
                "data":{
                    "orientation": "h",
                    "weight": 1,
                    "cells": [
                        {
                            "image_url": "./images/4.png",
                            "url":"/my",
                            "weight": 1
                        },
                        {   
                            "orientation": "v",
                            "weight": 1,
                            "cells": [
                                {
                                    "image_url": "./images/5.png",
                                    "url":"/my",
                                    "weight": 1
                                },
                                {   
                                    "orientation": "h",
                                    "weight": 1,
                                    "cells": [
                                        {
                                            "image_url": "./images/4.png",
                                            "url":"/my",
                                            "weight": 1
                                        },
                                        {
                                            "image_url": "./images/5.png",
                                            "url":"/my",
                                            "weight": 1
                                        } 
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "style_id":"separator_view",
                "ratio":0.5,
                "data":{
                    "title":"男装",
                    "img_url":"./images/4.png",
                    "url":"/category"
                }
            }
        ],
    }
}

export default data;
