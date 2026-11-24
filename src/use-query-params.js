import { useEffect, useState } from 'react';

export function useQueryParams() {
  const [params, setParams] = useState(() => new URLSearchParams(window.location.search));

  useEffect(() => {
    const sync = () => setParams(new URLSearchParams(window.location.search));
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  function update(changes) {
    const url = new URL(window.location.href);
    for (const [key, value] of Object.entries(changes)) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    window.history.replaceState(window.history.state, '', url);
    setParams(url.searchParams);
  }

  return [params, update];
}
