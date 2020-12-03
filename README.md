# Gotta-Shop-Em-All-Pasqualini-Poggi-Konchenkov

- This is a MEAN web application
- Gotta Shop 'Em All is a web platform to allow merchants, deliverymen and customers to communicate with each other
- Backend server based on Node.js/Express
- Frontend based on Angular-cli

# Installation

- Clone or Download Repository

```
git clone https://github.com/GiovanniPoggi/Gotta-Shop-Em-All-Pasqualini-Poggi-Konchenkov.git
```

# Set Up

```
cd progettoweb-elia-oleg-giovanni
docker-compose build
```

# MongoDB Set Up

```
docker ps -a (Per reperire le informazioni dai Container Docker presenti e quindi per poter visualizzare il nome del container del Database.)
docker exec -it "NOMECONTAINERDB" bash
cd /backup/
mongorestore /backup/
```

# Run Application:

```
cd progettoweb-elia-oleg-giovanni
docker-compose up
```

# Technologies and Packages

- Docker
- Nginx
- Bootstrap 4
- Mongoose
- RabbitMQ
- BCrypt
- Json Web Token
- Leaflet
- Socket.IO
- Cropper.js
- Angular CLI
