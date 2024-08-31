'use client';
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // To display the selected image
  const [formData, setFormData] = useState({
    title: '',
    category: 'uncategorized',
    content: '',
    keyword:'',
    image: null,
  });
  const [publishError, setPublishError] = useState(null);

  // Function to handle image selection and preview
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile)); // Display image preview
    }
  };

  // Dummy function to mimic form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setPublishError("Please select an image");
      return;
    }
    console.log("Form submitted", formData);
  };

  return (
    <>
    <Layout>
    <section className="py-16 lg:py-24">
                    <div className="container px-4 text-center">
                        <h1 className="heading-2 max-w-7xl mb-8 mx-auto text-neutral-950 dark:text-neutral-dark-950">
                            <span className="font-light">Create</span> Blog Post
                        </h1>
                        <p className="text-lg font-md text-neutral-950 dark:text-neutral-dark-950 mb-16 max-w-2xl mx-auto">
                        Share your thoughts with the world by creating a new blog post.                        </p>
                        <Link href="#create-post-section" className="btn bg-primary-light-950 dark:bg-primary-dark-950 hover:bg-primary-light-800 dark:hover:bg-primary-dark-800 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950">
                            Get Started
                        </Link>
                    </div>
                </section>
<section id="create-post-section" className="py-16 bg-white">
    <div className="p-6 max-w-3xl mx-auto min-h-screen">
    <h4 className="heading-3 text-center max-w-7xl mb-8 text-neutral-950 dark:text-neutral-dark-950">
                               Create Post
                            </h4>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* <div className="flex flex-col gap-4 sm:flex-row justify-between"> */}
          {/* Title Input */}
          <input
            type="text"
            placeholder="Title"
            required
            className="flex-1 border-2 p-2 rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            />
          <input
            type="text"
            placeholder="Keyword"
            required
            className="flex-1 border-2 p-2 rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, keyword: e.target.value })
            }
            // </div>
          />
          {/* Category Selector */}
          {/* <select
            className="border-2 p-2 rounded-md"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select a category</option>
            <option value="javascript">Wheat</option>
            <option value="reactjs">Rice</option>
            <option value="nextjs">Cotton</option>
          </select> */}
        

        {/* File Input */}
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="flex-1"
          />
          <button
            type="button"
            className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            disabled={!file}
          >
            {file ? "Image Selected" : "Select Image"}
          </button>
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Selected preview"
            className="w-full h-72 object-cover mt-4"
          />
        )}

        {/* Content Editor */}
        <textarea
          placeholder="Write something..."
          required
          className="h-72 border-2 p-2 rounded-md focus:outline-none focus:border-blue-500 mb-12"
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />

        {/* Publish Button */}
        <button
          type="submit"
          className="text-white from-purple-500 to-pink-500  py-2 bg-primary-light-950 rounded-md hover:bg-gradient-to-l transition duration-200"
        >
          Add Blog
        </button>

        {/* Error Alert */}
        {publishError && (
          <div className="mt-5 bg-red-100 text-red-800 p-3 rounded-md">
            {publishError}
          </div>
        )}
      </form>
    </div>
    </section>
    </Layout>
    </>
  );
}
