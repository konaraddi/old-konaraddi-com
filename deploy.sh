#!/bin/bash

# One-time-prerequisites:
# Be sure to have `npx` installed (comes with `npm`)
# Install Firebase CLI globally!
# $ npm i firebase-tools
# Login to firebase with CLI
# $ firebase login
# Set up alias
# $ firebase use konaraddio

npx firebase deploy

# Deploys to konaraddio.com, konaraddio.firebaseapp.com