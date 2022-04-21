# Docker Hub Remove Access Token 

Remove a Docker Hub access token using Docker Hub API

## Inputs

## `username`

**Required** The username of the Docker Hub account to authenticate with

## `password`

**Required** The password or personal access token (PAT) of the Docker Hub account to authenticate with

## `uuid`

**Required** UUID of access token that will be removed

## Example usage

uses: actions/docker-hub-remove-access-token-action@v1.0
with:
	username: "my-username"
	password: "my-password"
	uuid: "token-uuid"