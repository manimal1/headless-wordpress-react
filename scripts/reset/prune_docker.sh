#!/usr/bin/env bash

# =========================
# Every Once in a while when using containers i get the error
# ERROR: for <image_name>  Cannot create container for service <image_name>: Conflict. 
# The container name "/<image_name>" is already in use by container "<container_id>". You have to remove (or rename) that container
# this cleans all the cached containers
# Do read the following: https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes
# Before running this script
# =========================
docker system prune