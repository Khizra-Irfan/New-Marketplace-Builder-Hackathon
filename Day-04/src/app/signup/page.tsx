"use client";

import { SignUp, useUser, useClerk } from "@clerk/nextjs";

export default function SignUpPage() {
  const { isSignedIn } = useUser(); // Use useUser hook to check if the user is signed in
  const { signOut } = useClerk(); // To handle signing out

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#10203c] to-[#54709c] px-4 sm:px-6 md:px-8">
      {isSignedIn ? (
        // Display SignOut button if the user is signed in
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
        // Display SignUp component if the user is not signed in
        <div className="w-full max-w-sm sm:max-w-md p-10 bg-white rounded-xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">
            Create an Account
          </h2>
          <SignUp path="/signup" routing="path" signInUrl="/login" />
        </div>
      )}
    </div>
  );
}
