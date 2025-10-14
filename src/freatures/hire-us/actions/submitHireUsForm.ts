"use server";

export async function submitHireUsForm(formData: FormData) {
  // Simulate server processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Extract form data
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    mobileNumber: formData.get("mobileNumber"),
    projectTypes: formData.getAll("projectTypes"),
    description: formData.get("description"),
    file: formData.get("file") as File | null,
  };

  console.log("Server received form data:", {
    ...data,
    file: data.file ? `${data.file.name} (${data.file.size} bytes)` : null,
  });

  try {
    // Simulate API call to external server
    const apiResponse = await fetch("http://localhost:3009/api/hire-us",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          mobileNumber: data.mobileNumber,
          projectTypes: data.projectTypes,
          description: data.description,
          fileName: data.file?.name || null,
          fileSize: data.file?.size || null,
        }),
      },
    );


    if (!apiResponse.ok) {
      throw new Error("Failed to submit form to server");
    }

    const responseData = await apiResponse.json();


    // In a real application, you would:
    // 1. Validate the data again on the server
    // 2. Scan the file for malicious content using antivirus API
    // 3. Upload file to secure storage (S3, Vercel Blob, etc.)
    // 4. Save form data to database
    // 5. Send confirmation email to user
    // 6. Send notification to admin

    return {
      success: true,
      message: "Your project request has been submitted successfully!",
      data: responseData,
    };
  } catch (error) {
    console.error("[v0] Error submitting form:", error);
    return {
      success: false,
      message: "Failed to submit form. Please try again later.",
    };
  }
}
