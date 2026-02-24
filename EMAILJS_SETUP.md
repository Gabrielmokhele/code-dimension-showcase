# EmailJS Setup Instructions

Your contact form is now configured to send emails using EmailJS! Follow these steps to complete the setup:

## Step 1: Create a Free EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. The free plan includes 200 emails per month

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   - `{{first_name}}` - Sender's first name
   - `{{last_name}}` - Sender's last name
   - `{{from_email}}` - Sender's email address
   - `{{company}}` - Sender's company name
   - `{{service}}` - Service they're interested in
   - `{{message}}` - Their message

Example template:
```
Subject: New Contact Form Submission from {{first_name}} {{last_name}}

You have received a new message from your website contact form:

Name: {{first_name}} {{last_name}}
Email: {{from_email}}
Company: {{company}}
Service Interest: {{service}}

Message:
{{message}}

---
This email was sent from the Code Dimension contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find and copy your **Public Key**

## Step 5: Update Your Code

Open these files and replace the placeholder values:

### File: `src/pages/Contact.jsx` (around line 50)
```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### File: `src/components/Contact.jsx` (around line 19)
```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test Your Form

1. Save all files
2. Fill out your contact form
3. Submit it
4. Check your email inbox for the message!

## Troubleshooting

- **Emails not sending?** Check the browser console for errors
- **Wrong template?** Make sure your Template ID matches
- **Service not working?** Verify your email service is properly connected in EmailJS
- **Rate limit?** The free plan has 200 emails/month

## Security Note

The EmailJS public key is safe to expose in your frontend code. However, consider implementing rate limiting if you're concerned about spam.

---

Need help? Contact EmailJS support or check their documentation at https://www.emailjs.com/docs/
