@echo off

:: Zatrzymaj kontener, jeśli działa
docker ps -q --filter "name=my-running-app" >nul
IF NOT ERRORLEVEL 1 (
    echo Stopping running container: my-running-app
    docker stop my-running-app
)

:: Usuń kontener, jeśli istnieje
docker ps -a -q --filter "name=my-running-app" >nul
IF NOT ERRORLEVEL 1 (
    echo Removing container: my-running-app
    docker rm my-running-app
)

:: Usuń obraz, jeśli istnieje
docker images -q my-apache-app >nul
IF NOT ERRORLEVEL 1 (
    echo Removing image: my-apache-app
    docker rmi my-apache-app
)

:: Zbuduj nowy obraz
echo Building image: my-apache-app
docker build -t my-apache-app .

:: Uruchom nowy kontener
echo Running container: my-running-app
docker run -dit --name my-running-app -p 8080:80 my-apache-app

:: Wyświetl uruchomione kontenery
docker ps
