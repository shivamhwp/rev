import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <Image
      src={image.url}
      alt="the modal image"
      className="w-96"
      width={96}
      height={96}
    />
  );
}
