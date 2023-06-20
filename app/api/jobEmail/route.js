const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export async function POST(request) {
    const body = await request.text()
    const {fullName,email,phone,selectedOption} = JSON.parse(body)
    const message = `
      Full Name: ${fullName}\r\n
      Email: ${email}\r\n
      Phone: ${phone}\r\n
      selectedOption: ${selectedOption}\r\n
    `;
    const data = {
        to: 'abelpinales97@gmail.com',
        from: 'abel@inspirepropertiesraleigh.com',
        subject: 'Oppertunity for Power Master Electric',
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }
    try {
        sgMail.send(data)
        return new Response("body", {
            status: 200 
        });
    } catch (error) {
        console.error('Error parsing request body:', error);

        return new Response(`Error parsing request body ${error}`, {
          status: 500
        });
    }


}
