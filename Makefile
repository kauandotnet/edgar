help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

compose = docker-compose -p edgar
exec = ${compose} exec
run = ${compose} run
logs = ${compose} logs -f

install: ## Install API and client
	cp server/ormconfig.json.dist server/ormconfig.json
	docker run -it --rm -v ${PWD}/server:/app -w /app node npm i
	make start
	make api-build-dist
	make database-migrate
stop: ## Stop docker containers
	${compose} stop
rm: ## Remove docker containers
	${compose} rm
ps: ## List docker containers
	${compose} ps
start: ## Start docker containers
	${compose} up -d
test: ## Run test suite
	${exec} api npm run test
linter: ## Linter
	${exec} api npm run lint
api-logs: ## Display API logs
	${logs} api
api-bash: ## Connect to API container
	${exec} api bash
api-build-dist: ## Build API dist
	${exec} api npm run build
client-logs: ## Display Client logs
	${logs} client
client-bash: ## Connect to client container
	${exec} client bash
database-migrate: ## Database migrations
	${exec} api npm run migration:migrate
database-diff: ## Generate database diff
	${exec} api npm run migration:diff $(MIGRATION_NAME)
database-connect: ## Connect to the database container
	${exec} database psql -h database -d edgar
ci: ## Run CI checks
	${run} api npm run test:cov
	${run} api npm run lint
