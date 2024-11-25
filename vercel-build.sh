#!/bin/bash

# Install dependencies
npm install

# Install vite globally
npm install -g vite

# Add node_modules/.bin to PATH
export PATH="$PATH:$(pwd)/node_modules/.bin"

# Build the project
vite build
