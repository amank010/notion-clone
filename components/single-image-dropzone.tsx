"use client";

import { SingleImageDropzone } from "@/components/upload/single-image";
import {
  UploaderProvider,
  type UploadFn,
} from "@/components/upload/uploader-provider";
import { useEdgeStore } from "@/lib/edgestore";
import * as React from "react";

import { Spinner } from "./spinner";

const variants = {
  disabled:
    "bg-gray-200 border-gray-300 cursor-default pointer-events-none bg-opacity-30 dark: bg-gray-700",
};

export function SingleImageDropzoneUsage() {
  const { edgestore } = useEdgeStore();

  const uploadFn: UploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
      });
      // you can run some server action or api here
      // to add the necessary data to your database
      console.log(res);
      return res;
    },
    [edgestore],
  );

  return (
    <div className="relative">
      {variants.disabled && (
        <div className="flex items-center justify-center absolute inset-y-0 w-full bg-background/80 z-50">
          <Spinner size={"lg"} />
        </div>
      )}

      <UploaderProvider uploadFn={uploadFn} autoUpload>
        <SingleImageDropzone
          height={200}
          width={200}
          dropzoneOptions={{
            maxSize: 1024 * 1024 * 1, // 1 MB
          }}
        />
      </UploaderProvider>
    </div>
  );
}
