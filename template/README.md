# {{ name }}
## Portal Web -> Front-end

Web Portal for visualization spatial data

### technology
- Vue.js (CLI 3)
- Leaflet.js (v1.3.2)
- Vuetify
- Element.io

### Project setup/running
```
npm install
npm run serve (to development)
npm run build (to building)
```

Folder build => `deploy/dist`

#### RUNNING WITH DOCKER
```
cd deploy
docker build -t teste-portal .
docker run --name portal-web -p 3000:3000 teste-portal -d
```

 - environment: 
    - VUE_APP_API_URL = url to server (back-end)
 - access => http://localhost:3000
