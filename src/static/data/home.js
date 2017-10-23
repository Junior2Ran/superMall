var data = {
    "code":1,
    "data":{
        "rows":[
            {
                "style_id":"carousel_view",
                "ratio":0.5,
                "data":[
                    {
                        "img_url":"http://img1",
                        "url":"wfshop://abc"
                    },
                    {
                        "img_url":"http://img2",
                        "url":"wfshop://abc"
                    },
                    {
                        "img_url":"http://img3",
                        "url":"wfshop://abc"
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
                            "image_url": "http://img",
                            "url":"wfshop://abc",
                            "weight": 1
                        },
                        {
                            "cells": [
                            {
                                "image": "http://img",
                                "url":"wfshop://abc",
                                "weight": 1
                            },
                            {
                                "image": "http://img1",
                                "url":"wfshop://abc",
                                "weight": 1
                            },
                            {
                                "cells": [
                                    {
                                        "image": "http://img1",
                                        "url":"wfshop://abc",
                                        "weight": 1
                                    },
                                    {
                                        "image": "http://img1",
                                        "url":"wfshop://abc",
                                        "weight": 1
                                    } 
                                ],
                                "orientation": "h",
                                "weight": 1
                            }],
                        "orientation": "v",
                        "weight": 1
                    }]
                }
            },
            {
                "style_id":"separator_view",
                "ratio":0.5,
                "data":{
                    "title":"男装",
                    "img_url":"http://img4",
                    "url":"wfshop://abcd"
                }
            }
        ],
    }
}

export default data;
