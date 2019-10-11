 const nodemailer = require('nodemailer');


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'claudiarossi0707@gmail.com', // Cambialo por tu email
      pass: 'twhr zuuy dbfg ikso'   // password de la app.js
    },
    secure: false, // use SSL
    tls: {
      rejectUnauthorized: false
  }
   });

  
  const mailOptions = {
    from: `"${formulario.nombre} 👻" <${formulario.email}>`,
    to: 'servicios.desarrollo@gmail.com', // Cambia esta parte por el destinatario
    subject: `"${formulario.asunto} "`,
    html: `
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${formulario.email}  <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje}
    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}

