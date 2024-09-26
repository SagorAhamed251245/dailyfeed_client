"use client";
import { Editor } from "novel-lightweight";
import { useState } from "react";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";

const MarkdownEditor = () => {
  const [data, setData] = useState("");

  return (
    <>
      <Editor
        defaultValue={data}
        disableLocalStorage={false}
        onUpdate={(editor) => {
          setData(editor?.storage.markdown.getMarkdown());
        }}
        className="h-[500px]"
        //   handleImageUpload={async (file) => {
        //     const uploads = await startUpload([file]);
        //     if (uploads && uploads.length > 0) {
        //       return uploads[0].url;
        //     }
        //     return "www.example.com/failed-upload.png";
        //   }}
      />
    </>
  );
};

export default MarkdownEditor;
