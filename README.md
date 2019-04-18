# Semantic Accessible React Component Library

Preview existing components in the library at:

## Mission

<b>'Make re-usable react components for everyone'</b>

## Contribute

I welcome contributions and improvements to the library

### Add a new component

Note: Each component is exported as its own NPM repo.

1. Each component requires 3 files in its component folder:

- component-name.js
- component-name.scss
- package.json

2. Add a story file to the stories folder

- component-name.js

3. Require the component in .storybook > config.js

### Publish Components to NPM

```lerna bootstrap```

```lerna publish```