import { auth, clerkClient } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { ratelimit } from "~/server/ratelimit";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "2MB", maxFileCount: 6 } })
    .middleware(async ({ req }) => {
      const user = auth();

      if (!user.userId) throw new UploadThingError("Unauthorized");

      const fullUserData = await clerkClient.users.getUser(user.userId);

      if (!fullUserData?.privateMetadata?.["can-upload"] !== true)
        throw new UploadThingError("user doesn't have upload permission");

      const { success } = await ratelimit.limit(user.userId);

      if (!success) {
        throw new UploadThingError("Rate limit exceeded");
      }

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.insert(images).values({
        name: file.name,
        url: file.url,
        userId: metadata.userId,
      });

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
