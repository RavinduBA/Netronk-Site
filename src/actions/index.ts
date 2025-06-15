import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  newsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      terms: z.boolean(),
    }),
    async handler({ email }) {
      if (!email) {
        return {
          success: false,
          message: "Email is required",
        };
      }

      const { data, error } = await resend.contacts.create({
        email: email,
        unsubscribed: false,
        audienceId: import.meta.env.RESEND_AUDIENCE_KEY,
      });

      if (error) {
        return {
          success: false,
          message: error.message,
        };
      }
      return {
        success: true,
        message: "Successfully subscribed to newsletter",
        data: data,
      };
    },
  }),
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      about: z.string(),
      building: z.array(z.string()).optional(),
      services: z.array(z.string()).optional(),
      budget: z.string().optional(),
      attachments: z.array(z.any()).optional(), // optional file attachments (.pdf, .doc, .docx, .txt)
    }),
    async handler({
      name,
      email,
      about,
      building,
      services,
      budget,
      attachments,
    }) {
      if (!name || !email || !about || !building || !services || !budget) {
        return {
          success: false,
          message: "All fields are required",
        };
      }
      console.log({
        name,
        email,
        about,
        building,
        services,
        budget,
        attachments,
      });
      //   try {
      //     const { data, error } = await resend.emails.send({
      //       from: "Contact Form <EMAIL>",
      //       to: "usitkt@gmail.com",
      //       subject: "Contact Form",
      //       html: `
      //         <h1>Netronk Innovations New Contact</h1>
      //         <hr />
      //         <br />
      //         <p>Name: ${name}</p>
      //         <p>Email: ${email}</p>
      //         <p>Message: ${message}</p>
      //         <p>Type: ${building}</p>
      //         <p>Service: ${service}</p>
      //         <p>Budget: ${budget}</p>

      //         <br />
      //         <hr />
      //      `,
      //       attachments: attachments
      //         ? attachments.map((attachment) => attachment)
      //         : [],
      //     });
      //     if (error) {
      //       return {
      //         success: false,
      //         message: error.message,
      //       };
      //     }

      //     // send email to client
      //     const { data: clientData, error: clientError } =
      //       await resend.emails.send({
      //         from: "contact@netronk.com",
      //         to: email,
      //         subject: "Thank you for contacting Netronk Innovations",
      //         html: `
      //           <h1>Thank you for contacting Netronk Innovations</h1>
      //           <hr />
      //           <br />
      //           <p>We will get back to you shortly</p>
      //           <br />
      //           <hr />
      //      `,
      //       });
      //   } catch (error) {
      //     return {
      //       success: false,
      //       message: "Failed to send email",
      //     };
      //   }
      //   return {
      //     success: true,
      //     message: "Successfully sent email",
      //   };
    },
  }),
};
