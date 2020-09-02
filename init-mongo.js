db.createUser(
    {
        user: "oussama",
        pwd: "oussama",
        roles: [
            {
                role: "readWrite",
                db: "unity-master-server"
            }
        ]
    }
)