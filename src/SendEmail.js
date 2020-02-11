const mailer = require("nodemailer");
const { GetMail } = require("./GetMail");

const getEmailData = (to, name, template) => {
    let data = null;

    switch (template) {
        case "hello":
            data = {
                from: "[??????????? ?????????] ?????? ??????? <support_centobr42_lk@mail.ru>",
                to,
                subject: `[?????? ???????], ????????? ?? ${name}`,
                html: GetMail()
            }
            break;
        default:
            data;
    }
    return data;
}


const sendEmail = (to, name, type) => {

    const smtpTransport = mailer.createTransport({
        service: "mail.ru",
        auth: {
            user: "",
            pass: ""
        }
    })

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( "?? ???? ??????????? ????? ??????? ?????????? ?????????")
        }
        smtpTransport.close();
    })


}

module.exports = { sendEmail }