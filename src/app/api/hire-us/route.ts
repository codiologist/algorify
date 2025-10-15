
import { sendEmail } from "@/lib/nodemailer";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";




export async function POST(req: Request) {
  try {
    const body = await req.json();


    console.log("Body text",body);

    let fileurl;

    // ✅ Upload file to Cloudinary if file exists
    // if (body.file) {
    //   const uploadResult = await cloudinary.uploader.upload(body.file, {
    //     folder: "project_inquiries",
    //     public_id: body.fileName.split(".")[0],
    //     resource_type: "auto", // automatically detect file type (pdf, image, etc.)
    //   });
    //   fileurl = uploadResult.secure_url;

    // }

   

    // ✅ Save inquiry to DB
    const user = await prisma.projectInquiry.create({
      data: {
        ...body,
        // fileurl: fileurl || null, // store Cloudinary public URL
      },
    });

    console.log(user.fileurl)


   
    // ✅ Send email notification
    await sendEmail({
      name: body.name,
      email: body.email || "N/A",
      phone: body.mobileNumber || "N/A",
      projectType: body.projectTypes || "Not specified",
      message: body.description || "No message provided",
      file: fileurl || body.fileName || undefined,
    });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully!", data: user },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error in /api/hire-us:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong while submitting the form." },
      { status: 500 }
    );
  }
}


// import { NextResponse } from "next/server";
// import formidable from "formidable";
// import cloudinary from "@/lib/cloudinary";
// import { Readable } from "stream";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // Helper: convert Web Request to Node.js stream
// function bufferToStream(buffer: Buffer) {
//   const stream = new Readable();
//   stream.push(buffer);
//   stream.push(null);
//   return stream;
// }

// export async function POST(req: Request) {
//   try {
//     // Convert Web Request body to buffer
//     const bodyBuffer = Buffer.from(await req.arrayBuffer());

//     const form = formidable();

//     return new Promise((resolve, reject) => {
//       form.parse(bufferToStream(bodyBuffer) as any, async (err, fields, files) => {
//         if (err) return reject(err);

//         // Parse JSON text data
//         const textData = fields.textData ? JSON.parse(fields.textData as unknown as string) : {};

//         // Upload file if exists
//         let fileUrl = "";
//         if (files.file) {
//           const file = files.file as unknown as formidable.File;
//           const result = await cloudinary.uploader.upload(file.filepath, {
//             folder: "uploads",
//           });
//           fileUrl = result.secure_url;
//         }

//         resolve(NextResponse.json({ textData, fileUrl }));
//       });
//     });
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }
