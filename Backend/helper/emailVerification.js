const nodemailer = require("nodemailer");

let emailVerification=async(email)=>{

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "arnob4all@gmail.com",
    pass: "yabsholxybizgase",
  },
});
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: email,
    subject: "Email Verification",
    text: "Email Verification Send", 
    html: ` <div style=" border-radius: 10px;
        margin: auto;
        background: rgb(243, 243, 255);
        width: 30%;
        text-align: center;
        padding: 50px 50px">
        <div >
            <h1 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Verify your email.</h1>
            <hr/>
            <p style="padding-top: 20px;">${email}</p>
            <p style="font-size: 17px; padding-top: 50px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 
            sans-serif;"> Please confirm This email is your, then Click in the verification button
        to create your new account. </p>
            <button style="border: thin; margin-top: 30px; background: rgb(17, 144, 255); 
            color: rgb(255, 255, 255); padding: 10px 25px; border-radius: 10px; 
            font-size: 30px; font-weight: 700; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
            Verify</button>
            <div style="padding-top: 50px ; margin-bottom: 50px;">copy right 2011</div>
        </div>
    </div>`,
  });
}

module.exports=emailVerification