
build-dev:
	cd client && ${MAKE} build-dev
	cd server && ${MAKE} build-dev

run-dev:
	docker-compose -f docker-compose-dev.yml up


build-production:
	cd client && ${MAKE} build-production
	cd server && ${MAKE} build

run-production:
	ENV=production docker-compose -f docker-compose-production.yml up

run-api-dev:
	docker run -it api-dev:latest

run-api-prod:
	docker run -it api-prod:latest

run-client-dev:
	docker run -it client-dev:latest

run-client-prod:
	docker run -it client-prod:latest

build-dev-client:
	cd client && ${MAKE} build-dev

build-prod-client:
	cd client && ${MAKE} build-prod

build-dev-serv:
	cd server && ${MAKE} build-dev

build-prod-serv:
	cd server && ${MAKE} build-prod

build-registry:
	cd client && docker build -t registry-client:latest -f Dockerfile.registry-client .
	cd server && docker build -t registry-server:latest -f Dockerfile.registry-server .

build-registry-client:
	cd client && docker build -t registry-client:latest -f Dockerfile.registry-client .

build-registry-server:
	cd server && docker build -t registry-server:latest -f Dockerfile.registry-server .