import { useEffect, useState } from "react";
import { Data } from "../types/Data";

export default function useFetch(url: string) {
  const [data, setData] = useState<Data[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) setError("Error al cargar los datos");
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Ocurrió un error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
