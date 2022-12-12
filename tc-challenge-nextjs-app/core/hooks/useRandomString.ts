import { useCallback, useMemo, useState } from "react";

export default function useRandomString() {
  const apiUrl = "/api/random-string";

  const [rnd, setRnd] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  const fetchRandomString = useCallback(() => {
    setLoading(true);

    fetch(apiUrl)
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        setRnd(res.content);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    rnd,
    loading,
    error,
    fetchRandomString,
  };
}
