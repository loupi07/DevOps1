build-dev:
	docker build -t sample_client .

build-local:
	docker build -t sample_client-production:local  --build-arg BASE_URL=http://localhost:5000  .

build-production:
	docker build -t sample_client-production -f Dockerfile.production .