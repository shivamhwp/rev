import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  const image = await getImage(idAsNumber);
  return (
    <div>
      <Image
        src={image.url}
        alt="the modal image"
        className="w-96"
        width={96}
        height={96}
      />
    </div>
  );
}
