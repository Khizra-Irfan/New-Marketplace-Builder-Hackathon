"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Create your account</h2>
        <p className="text-sm text-gray-500 mb-6">Welcome! Please fill in the details to get started.</p>

        {/* GitHub Button */}
        <button
          className="flex items-center w-full border border-gray-300 rounded-md py-2 px-4 mb-3 hover:bg-gray-100"
          onClick={() => signIn("github")}
        >
          <Image src="/github.png" alt="GitHub" width={20} height={20} className="mr-2" />
          <span className="text-gray-700">Sign up with GitHub</span>
        </button>

        {/* Google Button */}
        <button
          className="flex items-center w-full border border-gray-300 rounded-md py-2 px-4 mb-3 hover:bg-gray-100"
          onClick={() => signIn("google")}
        >
          <Image src="/search.png" alt="Google" width={20} height={20} className="mr-2" />
          <span className="text-gray-700">Sign up with Google</span>
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email and Password Fields */}
        <form>
          <label className="block text-sm text-gray-600 mb-2">Email address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-sm text-gray-600 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Continue
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
