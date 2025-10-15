"use client";

import type React from "react";

import { CustomButton } from "@/components/CustomButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { submitHireUsForm } from "./actions/submitHireUsForm";
import { hireUsFormSchema, type HireUsFormData } from "./validation-schema";

const PROJECT_TYPES = [
  "UI/UX",
  "WEB DEVELOPMENT",
  "APP DEVELOPMENT",
  "DATA ANALYSIS",
  "WEBFLOW DEVELOPMENT",
  "SaaS DEVELOPMENT",
];

interface FileInfo {
  name: string;
  size: number;
}

export function HireUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);

  const form = useForm<HireUsFormData>({
    resolver: zodResolver(hireUsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
      projectTypes: [],
      description: "",
      file: undefined,
    },
  });

  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (file: File | undefined) => void,
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      // Security check: Validate file type and size on client side
      const allowedTypes = [
        "application/pdf",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        toast.error("Only PDF, PPT, and Word documents are allowed.");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size must not exceed 10MB.");
        return;
      }

      setFileInfo({ name: file.name, size: file.size });
      onChange(file);
    }
  };

  const handleRemoveFile = (onChange: (file: File | undefined) => void) => {
    setFileInfo(null);
    onChange(undefined);
    // Reset the file input
    const fileInput = document.getElementById(
      "file-upload",
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const toggleProjectType = (
    type: string,
    currentTypes: string[],
    onChange: (types: string[]) => void,
  ) => {
    const updated = currentTypes.includes(type)
      ? currentTypes.filter((t) => t !== type)
      : [...currentTypes, type];
    onChange(updated);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const onSubmit = async (data: HireUsFormData) => {
    setIsSubmitting(true);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("mobileNumber", data.mobileNumber);
      data.projectTypes.forEach((type) =>
        formData.append("projectTypes", type),
      );
      formData.append("description", data.description);
      if (data.file) {
        formData.append("file", data.file);
      }

      console.log(formData)

      const result = await submitHireUsForm(formData);


      if (result.success) {
        toast.success(result.message);
        form.reset();
        setFileInfo(null);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="algorify-form space-y-8 lg:space-y-14"
      >
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">
                Name/Organization Name
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Type name or organization name here"
                  className="form-control"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="xyz@mail.com"
                  className="form-control"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* WhatsApp Number Field */}
        <FormField
          control={form.control}
          name="mobileNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Contact Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="01XXXXXXXXX"
                  className="form-control"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Project Type Field */}
        <FormField
          control={form.control}
          name="projectTypes"
          render={({ field }) => (
            <FormItem className="gap-0">
              <FormLabel className="form-label mb-0">Project Type</FormLabel>
              <FormDescription className="text-gray mb-5 text-base">
                Choose your desired project that you wanted to work with us
              </FormDescription>
              <FormControl>
                <div className="flex flex-wrap gap-3">
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = field.value?.includes(type);
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          toggleProjectType(type, field.value, field.onChange)
                        }
                        className={cn(
                          "cursor-pointer rounded-full px-6 py-3 text-sm font-medium uppercase transition-colors",
                          isSelected
                            ? "bg-lemon hover:bg-lemon text-black"
                            : "border-black-secondary hover:border-lemon border bg-transparent",
                        )}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Project Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Project Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Tell us about your Idea"
                  className="form-control min-h-[280px] resize-none !rounded-3xl px-6 py-4"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* File Upload Field */}
        {/* <FormField
          control={form.control}
          name="file"
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem>
              <FormLabel className="text-2xl font-normal">
                Or Upload Attachment
              </FormLabel>
              <FormControl>
                <div className="space-y-4">
                  <input
                    {...field}
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf,.ppt,.pptx,.doc,.docx"
                    onChange={(e) => handleFileSelect(e, onChange)}
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    className="bg-blue-brand hover:bg-blue h-12 cursor-pointer rounded-full px-8 text-base font-medium text-white"
                    onClick={() =>
                      document.getElementById("file-upload")?.click()
                    }
                  >
                    Select Files
                  </Button>
                  {fileInfo && (
                    <div className="space-y-4">
                      <div className="bg-border h-px w-full" />
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500">
                            <Check
                              className="h-5 w-5 text-white"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-base font-normal">
                            {fileInfo.name}
                          </span>
                          <span className="bg-muted text-muted-foreground rounded px-2.5 py-0.5 text-sm font-normal">
                            {formatFileSize(fileInfo.size)}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(onChange)}
                          className="border-foreground hover:bg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-colors"
                          aria-label="Remove file"
                        >
                          <X className="h-5 w-5" strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* Submit Button */}
        {/* <Button
          type="submit"
          disabled={isSubmitting}
          className="h-14 w-full rounded-full bg-[#c4ff0d] px-8 text-base font-semibold text-black hover:bg-[#b0e60c] disabled:opacity-50"
        ></Button> */}

        <CustomButton variant="lemon" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Project Request"}
        </CustomButton>
      </form>
    </Form>
  );
}
