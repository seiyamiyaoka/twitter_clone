container_version:
	firebase --version
container_login:
	firebase login
container_logout:
	firebase logout
container_add_to_local:
	firebase use --add
container_start:
	firebase serve --only hosting
firestore_update:
	firebase deploy --only firestore
storage_update:
	firebase deploy --only storage
container_deploy:
	firebase deploy --except functions
container_init:
	firebase init