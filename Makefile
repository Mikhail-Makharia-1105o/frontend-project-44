#Makefile
extends:
	'airbnb-base'
  	'plugin:jest/recommended'

install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .