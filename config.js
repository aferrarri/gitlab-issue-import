let notify = {
    url: 'https://api.mailgun.net/v3/YOUR_DOMAIN_NAME/messages',
    apiKey: 'YOUR_API_KEY',
    user: 'api',
    from: 'Project Admin <admin@project.com>'
}

module.exports = {
  notify
};
