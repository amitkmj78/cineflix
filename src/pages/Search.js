import { Card } from "../components/Card";
import { useFetch } from "../components/Hook/useFetch";
import { useSearchParams } from "react-router-dom";

export function Search({ apiPath, title }) {
  const [searchparam] = useSearchParams();
  const param = searchparam.get("q");
  const { data: movies } = useFetch(apiPath, param);

  console.log(apiPath);
  console.log(param);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
