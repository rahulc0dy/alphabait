"use client";

import React, { useState, useEffect } from "react";
import { ZodError } from "zod";

const ErrorPage = ({ error }: { error: unknown }) => {
  const [message, setMessage] = useState<string>(
    "Error occurred while showing this content! Please try again later."
  );

  useEffect(() => {
    if (error instanceof ZodError) {
      setMessage(error.issues.map((issue) => issue.message).join("\n"));
    } else if (error instanceof Error) {
      setMessage(error.message);
    }
  }, [error]);

  console.debug(message);

  return (
    <div className="wrapper flex flex-col items-center justify-center gap-5 py-5 md:py-10">
      <h1 className="text-primary text-5xl font-bold">Something Went Wrong</h1>
      <p className="max-w-prose overflow-ellipsis">
        The alphabet you want to learn is invalid, or not yet supported.
      </p>
    </div>
  );
};

export default ErrorPage;
