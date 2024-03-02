import Link from "next/link";
import ImageSearchResults from "../../components/ImageSearchResults";

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_API_KEY}&cx=${process.env.NEXT_CONTEXT_API_KEY}&q=${searchParams.searchTerm}'&searchType=image&start=${startIndex}`
  );
  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching with different name&nbsp;
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <div>{results && <ImageSearchResults results={data} />}</div>;
}
