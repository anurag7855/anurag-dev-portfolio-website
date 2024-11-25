#!/bin/bash
export PATH="$PATH:./node_modules/.bin"
npm install
npx vite build
