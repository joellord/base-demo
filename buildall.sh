export DOCKER_USER=joellord
export BASE_NAME=dd
echo "Build and push all containers as $DOCKER_USER/$BASE_NAME*"
echo "Starting with frontend"
cd frontend
docker build -t $DOCKER_USER/$BASE_NAME-front .
docker push $DOCKER_USER/$BASE_NAME-front

cd ..
echo "API"
cd api
docker build -t $DOCKER_USER/$BASE_NAME-api .
docker push $DOCKER_USER/$BASE_NAME-api

cd ..
echo "Crashing service"
cd crashing
docker build -t $DOCKER_USER/$BASE_NAME-crash .
docker push $DOCKER_USER/$BASE_NAME-crash

cd ..
