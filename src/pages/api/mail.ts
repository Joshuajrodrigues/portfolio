import type { APIRoute } from "astro"
import nodemailer from "nodemailer"


export const POST: APIRoute = async({ request }) => {
  
  const data = await request.formData();
   const from = data.get("from");
   const body = data.get("body");
  
  // // Validate the data - you'll probably want to do more than this
   if (!from || !body) {
     return new Response(
       JSON.stringify({
         message: "Missing required fields",
       }),
       { status: 400 }
     );
     
   }
 
   
   let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: import.meta.env.MAIL_USERNAME,
      pass: import.meta.env.MAIL_PASSWORD,
      clientId: import.meta.env.OAUTH_CLIENTID,
      clientSecret: import.meta.env.OAUTH_CLIENT_SECRET,
      refreshToken: import.meta.env.OAUTH_REFRESH_TOKEN
    }
  });
  
   let mailOptions = {
    from,
    to: "joshuarodriguesdev@gmail.com",
    subject: 'Portfolio mail',
    text: body
  };

  
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Email sent"
    }),
    { status: 200 }
  );
  }