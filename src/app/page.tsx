import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/c2a11f01-f3e1-439b-9350-ff979695b75a-eolizq.jpg",
  "https://utfs.io/f/6028df4e-5221-4875-8137-88372635b545-eidbyv.jpg",
  "https://utfs.io/f/5e606665-2d2d-4819-a7e8-08e7bbb31bd9-vytt1g.jpg",
  "https://utfs.io/f/629ea05a-dd61-4581-b459-b5b3b31afd73-ug4u26.jpg",
  "https://utfs.io/f/9a01a4c2-879e-4b13-afb4-8928116b0b6c-bvj2b4.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany({});
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} className="h-auto w-full rounded-lg" />
          </div>
        ))}
        gallery in progress
      </div>
    </main>
  );
}
