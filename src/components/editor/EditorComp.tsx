"use client";
import { Editor } from "novel-lightweight";
import { useState } from "react";

const EditorComp = () => {
  const [data, setData] = useState("");
  return (
    <div>
      {" "}
      <Editor
        defaultValue={data}
        disableLocalStorage={false}
        onUpdate={(editor) => {
          setData(editor?.storage.markdown.getMarkdown());
        }}
        className="min-h-[500px] h-auto"
        //   handleImageUpload={async (file) => {
        //     const uploads = await startUpload([file]);
        //     if (uploads && uploads.length > 0) {
        //       return uploads[0].url;
        //     }
        //     return "www.example.com/failed-upload.png";
        //   }}
      />
    </div>
  );
};

export default EditorComp;
