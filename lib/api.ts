/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json());
}

export function getPosts() {
  const { data, error } = useSWR(
    `https://backend.coutz.com.br/wp-json/wp/v2/posts?per_page=50`,
    fetcher
  );

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function getPrint(id: number) {
  const { data, error } = useSWR(
    `https://backend.coutz.com.br/wp-json/wp/v2/media?parent=${id}`,
    fetcher
  );

  return {
    printImg: data,
    isLoadingPrint: !error && !data,
    isError: error,
  };
}