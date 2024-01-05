import React, { useState } from "react";
import axios from 'axios';

const {signup} = 'src/backend/controllers/UserController';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post(signup, {
        name: name,
        email: email,
        password: password,
      });

      // Traitez la réponse du backend en fonction de votre logique
      console.log(response.data);
    } catch (error) {
      // Traitez les erreurs de requête
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
