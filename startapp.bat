docker stop my-running-app
docker rm my-running-app
docker rmi my-apache-app
docker build -t my-apache-app .
docker run -dit --name my-running-app -p 8080:80 my-apache-app
docker ps