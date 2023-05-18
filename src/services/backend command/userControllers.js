let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    //check truong nhap email & password
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: `Chua nhap du du lieu!`
        })
    }

    let userData = await userService.handleUserLogin(email, password)

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}