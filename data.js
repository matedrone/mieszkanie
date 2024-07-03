var APP_DATA = {
  "scenes": [
    {
      "id": "0-sypialnia",
      "name": "sypialnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.030881651473539,
          "pitch": 0.1849840782335388,
          "rotation": 0,
          "target": "2-przedpokj"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-azienka",
      "name": "łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.2606650440644618,
        "pitch": 0.12755291934215762,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -1.26517935652139,
          "pitch": 0.14145257619180107,
          "rotation": 0,
          "target": "2-przedpokj"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-przedpokj",
      "name": "przedpokój",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.2265663536717728,
        "pitch": 0.2663716788596808,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": 1.4532517628486152,
          "pitch": 0.25648688801521047,
          "rotation": 0,
          "target": "1-azienka"
        },
        {
          "yaw": 0.21871428887833133,
          "pitch": 0.21232929042218274,
          "rotation": 0,
          "target": "0-sypialnia"
        },
        {
          "yaw": -0.5548662124594781,
          "pitch": 0.17099634940938913,
          "rotation": 0,
          "target": "3-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salon",
      "name": "salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2883195984737643,
          "pitch": 0.2483468096408874,
          "rotation": 0,
          "target": "2-przedpokj"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
