"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditorComp from "./EditorComp";
import "./MarkDown.css";
import Image from "next/image";

const MarkdownEditor = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setUploadedFile(file);
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
  };

  return (
    <div>
      <form>
        <Card className="w-full mb-5">
          <CardHeader>
            <CardTitle>Write your Blog</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid items-center w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Title for your blog" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="thumbnail-image">Thumbnail Image</Label>
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="p-1 bg-gray-100 rounded-md">
                    <TabsTrigger value="upload">Upload</TabsTrigger>
                    <TabsTrigger value="paste-url">Paste URL</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upload" className="py-4 w-[300px]">
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full p-4 transition-all duration-300 bg-white border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <FiUploadCloud className="text-3xl text-gray-400" />
                      <div className="mt-2 text-sm font-medium text-gray-600">
                        Drag and drop a file, or click to select a file
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>

                    {uploadedFile && (
                      <div className="mt-4 hover:bg-transparent">
                        <div className="flex items-center justify-between p-2 border rounded-md shadow-sm">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md">
                              <Image
                                src="/file-icon.png"
                                alt="file icon"
                                className="w-6 h-6"
                                width={200}
                                height={200}
                              />
                            </div>

                            <div>
                              <p className="max-w-xs text-sm font-medium truncate">
                                {uploadedFile.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(uploadedFile.size / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="text-gray-400 hover:text-red-500 focus:outline-none"
                            onClick={handleDeleteFile}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                  <TabsContent value="paste-url" className="py-4">
                    <Input
                      id="paste-url"
                      placeholder="Paste your image URL"
                      className="w-full"
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <EditorComp />
        </Card>
      </form>
    </div>
  );
};

export default MarkdownEditor;
