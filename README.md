This import tool provides a web based form through which users can upload a csv file and create multiple issues in their gitlab project. Users receive an email notification once the import is complete.

It uses: 

1. [Express](https://github.com/expressjs/express) nodejs web framework.
1. [Multer](https://github.com/expressjs/multer) for handling file uploads.
1. [node-gitlab](https://www.npmjs.com/package/node-gitlab) - Gitlab API Node.js client. 
1. [Nodejs Child process](https://stackoverflow.com/a/10870653/2720245) fork for each import task. 
1. [Mailgun](https://documentation.mailgun.com/en/latest/user_manual.html#sending-via-api) to send email notification. 