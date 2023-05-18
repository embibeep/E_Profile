let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //ton tai user
                //so sanh password
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['email', 'roelId', 'password'],
                    raw: true
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0,
                            userData.errMessage = `OK`,
                            delete user.password
                        userData.user = user
                    } else {
                        userData.errCode = 3,
                            userData.errMessage = `Wrong Password`
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User isn't exist`
                }

            } else {
                userData.errCode = 1;
                userData.errMessage = `Your's email isn't exist in our system. Please try again!`

            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}

let compareUserPassword = () => {
    return new Promise((resolve, reject) => {
        try {

        } catch (e) {
            reject(E)
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}