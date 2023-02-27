import { useRouter } from 'next/router';

export default function NestedPage() {
  const router = useRouter();
  const query = router.query?.nestedId;
  return <h1>Nested Page {query}</h1>;
}
