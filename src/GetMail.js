const GetMail = data => {
    return `
      <!DOCTYPE html>
     <html style="margin: 0; padding: 0;">
     
         <head>
         <title></title>
         </head>
         <body style="margin: 0; padding: 0;">
                <br />
                <div>??? ???????????: ${this.state.name}</div>
                <br />
                <div>??????????? ?????: ${this.state.mail}</div>
                <br />
                <div>?????????: ${this.state.message}</div>
             </body>
        </html>
      `;
  };
  
  module.exports = { GetMail };