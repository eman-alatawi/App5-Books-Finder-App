import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBooks = async (searchTerm) => {
  if (!searchTerm) {
    throw Error("searchTerm is empty")
  } else {
    return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=books&maxResults=40&startIndex=0&orderBy=relevance&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`).then((res) => res.data)
  }

}


export default function useBooks(searchTerm) {
  return useQuery({
    queryKey: ['books', searchTerm],
    queryFn: () => fetchBooks(searchTerm),
    retry: 1,
    keepPreviousData: true
  })
}