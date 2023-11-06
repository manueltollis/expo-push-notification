build:
	docker-compose build

up:
	docker-compose up

run:
	docker-compose up --build

down:
	docker-compose down --remove-orphans

connect:
	docker exec -it expo-push-service-api-1 bash

generate:
	docker exec -it expo-push-service-api-1 npm run generate

migrate:
	docker exec -it expo-push-service-api-1 npm run migrate

push:
	docker exec -it expo-push-service-api-1 npm run push