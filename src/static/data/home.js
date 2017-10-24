var data = {
    "code":1,
    "data":{
        "rows":[
            {
                "style_id":"carousel_view",
                "ratio":0.5,
                "data":[
                    {
                        "img_url":"/images/chs_banner1.jpg",
                        "url":"/my"
                    },
                    {
                        "img_url":"/images/chs_banner2.jpg",
                        "url":"/category"
                    },
                    {
                        "img_url":"/images/chs_banner3.jpg",
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
                            "image_url": "/images/1.jpg",
                            "url":"/my",
                            "weight": 1
                        },
                        {
                            "cells": [
                                {
                                    "image_url": "/images/1.jpg",
                                    "url":"/my",
                                    "weight": 1
                                },
                                {
                                    "image_url": "/images/2.jpg",
                                    "url":"/my",
                                    "weight": 1
                                },
                                {
                                    "cells": [
                                        {
                                            "image_url": "/images/2.jpg",
                                            "url":"/my",
                                            "weight": 1
                                        },
                                        {
                                            "image_url": "/images/3.jpg",
                                            "url":"/my",
                                            "weight": 1
                                        } 
                                    ],
                                    "orientation": "h",
                                    "weight": 1
                                }
                            ],
                            "orientation": "v",
                            "weight": 1
                        }
                    ]
                }
            },
            {
                "style_id":"separator_view",
                "ratio":0.5,
                "data":{
                    "title":"男装",
                    "img_url":"/images/1.jpg",
                    "url":"/category"
                }
            }
        ],
    }
}

export default data;
