import React, { useEffect } from 'react'

import { MdContentCopy } from "react-icons/md";

import '../styles/Homepage.css'

function Homepage () {

  // var choco = document.getElementById("choco");
  // var token = document.getElementById("token");
  // var RevX = document.getElementById("RevX");

  // // Ajouter un écouteur d'événement au bouton
  // useEffect(() => {
  //   const button = document.getElementById("copy-button");
  //   button.addEventListener("click", handleClick());
  // },[]);
  

  // const handleClick = () => {
  //   var ephemeral = document.getElementById("ephemeral");
  //     var statique = document.getElementById("static");
  //     var code;
  //     if (ephemeral.checked) {
  //         code = RevX;
  //     } else if (statique.checked) {
  //         code = token;
  //     } else {
  //         code = choco;
  //     }
  //     // Copier le code dans le presse-papier
  //     code.select();
  //     document.execCommand("copy");
  //     // Afficher un message de confirmation
  //     // alert("Code copié dans le presse-papier !");
  // };

useEffect(() => {
document.getElementById('scrollButton').addEventListener('click', function (){
    const setup = document.getElementById('setup');
    setup.scrollIntoView({behavior:'smooth'});
  });
}, [])

  

  return (
    <div className='home'>
      <section className='welcome'>
        <div>
          <div className='text'>
            <h1>Welcome</h1>
            <p>RevX is your app's front door—a globally distributed reverse proxy that secures, protects and accelerates your applications and network services, no matter where you run them.</p>
            <button id='scrollButton'>Setup & Installation</button>
          </div>
        </div>
        <div>
          <img src='/images/reverse.png' width={350} alt='proxy'/>
        </div>
      </section>

      <section id='setup'>

        <div class="header">
          <h1 class="title">Connect</h1>
          <p>Establish ingress for your application.</p>
          <div class="platform">
            <img src="./images/windows.png" alt="Windows" class="icon"/>
            <span>Windows</span>
          </div>
        </div>

        <div class="content">
          <div>
            <h3>Installation</h3>
            <p>Install RevX via Chocolatey with the following command:</p>
            <div class='code_clip'>
              <input type="text" id="choco" class="code" value="choco install RevX" readonly/>
              <button type="button" id="copy-button" class="button"><MdContentCopy /></button>
            </div>
          </div>
          <div>
            <h3>Deploy your app online</h3>
            <div class="option">
              <input type="radio" id="ephemeral" class="radio" name="domain" checked/>
              <label for="ephemeral">Ephemeral Domain</label>
            </div>
            <div class="option">
              <input type="radio" id="static" class="radio" name="domain"/>
              <label for="static">Static Domain</label>
            </div>
            <p>Put your app online at ephemeral domain & forwarding to your local port 80, by running:</p>
            <div class='code_clip'>
              <input type="text" id="RevX" class="code" value="RevX http 80" readonly/>
              <button type="button" id="copy-button" class="button"><MdContentCopy /></button>
            </div>
            <p>Once running, your endpoints will be listed on the <span class="link"> endpoints page</span>.</p>
          </div>
        </div>
      </section>
      <p>Need help? Visit the <span class="link">RevX documentation</span> or <span class="link">contact support</span>.</p>
    </div>
  )

}

export default Homepage
