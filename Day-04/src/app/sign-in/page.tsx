"use client";

import { SignIn, useUser, useClerk } from "@clerk/nextjs";

export default function SignInPage() {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      {isSignedIn ? (
        <div className="text-center text-white">
          <h2 className="text-3xl font-semibold mb-6">You're already signed in!</h2>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md p-10 bg-white rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">
            Welcome Back, Please Sign In
          </h2>
          {/* Clerk SignIn Component */}
          <SignIn path="/login" routing="path" signUpUrl="/signup" />
        </div>
      )}
    </div>
  );
}
