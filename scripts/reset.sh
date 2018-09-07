
#!/usr/bin/env bash

sh ./scripts/reset/nuke_containers.sh;
sh ./scripts/reset/nuke_images.sh;
sh ./scripts/reset/prune_docker.sh;