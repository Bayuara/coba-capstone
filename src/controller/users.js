const getAllUsers = (req, res) => {
    const data = {
        id:"1",
        name:"Joko",
        email: "Joko@gmail.com",
        address:"Jakarta"
    }

    res.json({
        message: 'GET users Success',
        data: data
    })
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new users Success',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    res.json({
        message:"UPDATE user succes",
        data: req.body,
    })
}

const deleteuser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message: 'DELETE user success',
        data: {
            id: idUser,
            name: "Bayu",
            email: "bayu@gmail.com",
            address:"Jakarta"
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteuser,
}