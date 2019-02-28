.PHONY: install
install:
	@yarn install

.PHONY: build
build:
	@npm run build

.PHONY: start
start:
	@yarn start

.PHONY: swagger
swagger:
	@echo 'copying swagger spec'
	@cp ~/go/src/github.com/waymobetta/go-coindrop-api/swagger/swagger.json src/swagger/

.PHONY: lint
lint:
	@npm run lint:fix

.PHONY: deploy/staging
deploy/staging: build s3/upload/staging cf/invalidate/staging

.PHONY: s3/upload/staging
s3/upload/staging:
	@aws s3 sync ./build s3://staging.coindrop.io --acl=public-read --profile=coindrop --region=us-west-2

.PHONY: cf/invalidate/staging
cf/invalidate/staging:
	@aws cloudfront create-invalidation --profile=coindrop --distribution-id E2J0VJJ36YK92D --paths /index.html /favicon.ico /static/css/* /static/js/* /static/media/*
