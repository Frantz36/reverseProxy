import { signinToken } from "../Utils/AuthConfig.js";
import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import session from "express-session";
import { SessionManager } from "../Utils/SessionManager.js";

const sessionManager = new SessionManager()
//Enregistrer un nouvel utilisateur
export const registerUser = async (req, res) => {
    const { name, email, password } =
      req.body;
  
    const isAdded = await UserModel.findOne({ email: email });
  
    if (isAdded) {
      const token = signinToken(isAdded);
      return res.status(409).send({
        token,
        name: isAdded.name,
        email: isAdded.email,
        message: "Cette addresse email existe déjà",
      });
    }
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    if (!name || !password) {
      res.status(400).json({
        message: `Tous les champs sont obligatoires !`,
      });
    } else {
      req.body.password = hashedPassword;
      const newUser = new UserModel(req.body);
  
      try {
        const savedUser = await newUser.save();
        const token = signinToken(savedUser);
        res.status(201).send({ jwt: token, savedUser });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  };

//Sign in in a new session
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Tous les champs sont obligatoires" });
    } else {
      try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
          const token = signinToken(user);
          const validity = await bcrypt.compare(password, user.password);
          if (validity) {
            sessionManager.loginUser(user.name, token)
            res.status(201).send({ jwt: token, user })
          } else {
            res.status(400).json({ message: "Mot de passe incorrect" });
          }
        } else {
          res.status(404).json("Ce compte n'existe pas !");
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  };

  export default sessionManager