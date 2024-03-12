export const signup = async(req, res) => {
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body;
    }
    catch(error){
        console.log(error);}
};

export const login = (req, res) => {
    console.log("Login User");
}

export const logout = (req, res) => {
    console.log("Logout User");
}