import useSWR from "swr";

export default function Profile() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading</div>;
  return <div>Hello {data.name}</div>;
}
