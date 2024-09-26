"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect } from "react";
import "./MarkDownStyle.css";

const MarkdownEditor: React.FC = () => {
  const editor = useCreateBlockNote();

  // Prevent default browser behavior on Ctrl key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "r": // Prevent refresh with Ctrl + R or Cmd + R
          case "s": // Prevent save dialog with Ctrl + S or Cmd + S
            e.preventDefault();
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Accessing editor content and logging it
  useEffect(() => {
    if (editor) {
      // Assuming BlockNote has a method to get content in JSON or HTML
      const content = editor; // Change this to the appropriate method in BlockNote's API
      console.log("Editor content: ", content);
    }
  }, [editor]);

  return (
    <div className="max-w-4xl py-10 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Markdown Editor with Novel</h1>
      <div>
        {/* Markdown Input */}
        <BlockNoteView editor={editor} theme={"light"} />

        {/* Markdown Preview */}
      </div>
    </div>
  );
};

export default MarkdownEditor;
