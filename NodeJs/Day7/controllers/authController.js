const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req,res) =>{
    const {name ,email, password} = req.body;

    if(!name || !email || !password ){
        return res.status(400).json({
            message : "All fields are required"
        });
    }

    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({name ,email, password: hashPassword});

    res.status(201).json({
        message: "User registred"
    });
};
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};
