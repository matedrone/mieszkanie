var APP_DATA = {
  "scenes": [
    {
      "id": "0-przedpokj",
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
        "yaw": -0.2279993019469284,
        "pitch": 0.21364708860187065,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -0.5452229178254111,
          "pitch": 0.09787547150670406,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": 0.2378645949720628,
          "pitch": 0.08825933068411373,
          "rotation": 0,
          "target": "2-sypialnia"
        },
        {
          "yaw": 1.391163434427943,
          "pitch": 0.3850678282305324,
          "rotation": 0,
          "target": "3-azienka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
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
        "yaw": 0.18737133122801808,
        "pitch": 0.3183763886373576,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -0.26830852921215964,
          "pitch": 0.1741658288793566,
          "rotation": 0,
          "target": "0-przedpokj"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sypialnia",
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
        "yaw": 0.43095319093831286,
        "pitch": 0.5436427013524572,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": 0.9574479020308075,
          "pitch": 0.2016456284128978,
          "rotation": 0,
          "target": "0-przedpokj"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-azienka",
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
        "yaw": 2.2136657406386337,
        "pitch": 0.5683252560810352,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -1.271585419154519,
          "pitch": 0.2773991211795632,
          "rotation": 0,
          "target": "0-przedpokj"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
