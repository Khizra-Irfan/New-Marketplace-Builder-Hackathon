"use client";

import { SignIn, useUser, useClerk, SignedOut, SignInButton } from "@clerk/nextjs";

export default function LoginPage() {
  const { isSignedIn } = useUser(); // Use useUser hook to check if the user is signed in
  const { signOut } = useClerk(); // To handle signing out

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#10203c] to-[#54709c] px-4 sm:px-6 md:px-8">
      {!isSignedIn ? (
        // Display SignIn component if the user is not signed in
        <div className="w-full max-w-sm sm:max-w-md p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-700">
            Welcome Back!
          </h2>
          <SignIn path="/login" />
        </div>
      ) : (
        // Display SignOut button if the user is signed in
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            You are signed in!
          </h2>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
          >
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
          </button>
        </div>
      )}
    </div>
  );
}
