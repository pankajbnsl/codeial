const nodeMailer = require('../config/nodemailer');
exports.newComment = (comment) => {
    let htmlString = nodeMailer.renderTempelate({comment: comment}, '/comments/new_comment.ejs')


    nodeMailer.transporter.sendMail({
        from: 'pankaj@codeial.com',
        to: comment.user.email,
        subject: 'New Comment Published',
        html: htmlString
    }, (err, info) => {
        if(err){console.log('error in sending the mail'); return;}
        console.log('Mail Dilevered');
        return;
    });
}