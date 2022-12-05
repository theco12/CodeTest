import { Router, useRouter } from "next/router";

export default function CategorySlug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>CategorySlug {slug}</h1>
    </div>
  );
}
