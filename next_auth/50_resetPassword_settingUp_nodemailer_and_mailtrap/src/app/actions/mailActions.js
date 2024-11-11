"use server";

import dbConnect from "@/dbConfig/dbConfig";
import User from "@/model/User";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";

export const mailAction = async (email) => {
  await dbConnect();
  const user = await User.findOne({ email: email });
  if (user) {
    const token = nanoid(32);
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b17176654f1356",
        pass: "57ff30668d191d",
      },
    });

    const htmlBody = `<div>
        Click here to <a href="http://localhost:3000/reset-password/${token}">Reset Password</a>
      </div>`;

    const info = await transport.sendMail({
      from: "tutulkabir@gmail.com", // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔",
      text: "Hello world?",
      html: htmlBody,
    });

    console.log("Message sent: %s", info.messageId);

    // save token in db
    await User.findOneAndUpdate({ email: email }, { verifyToken: token });
  } else {
    console.log("user does not exist");
  }
};
