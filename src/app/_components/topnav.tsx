import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className=" flex w-full items-center justify-between border-b bg-opacity-70 p-4 text-xl font-semibold shadow-sm backdrop-blur-md ">
      <Link href="/">
        <div>rev</div>
      </Link>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
