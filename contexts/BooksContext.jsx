import { createContext, useEffect, useState } from "react";
import { databases, client } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "694cc7e9001175545be8";
const COLLECTION_ID = "books";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    if (!user) return;

    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)]
      );

      setBooks(response.documents);
      console.log("Books:", response.documents);
    } catch (error) {
      console.error("Fetch books error:", error.message);
    }
  }

  async function fetchBooksById(id) {
    try {
      return await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );
    } catch (error) {
      console.error("Fetch book by ID error:", error.message);
    }
  }

  async function createBook(data) {
    if (!user) return;

    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      console.error("Create book error:", error.message);
    }
  }

  async function deleteBook(id) {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );
    } catch (error) {
      console.error("Delete book error:", error.message);
    }
  }

  useEffect(() => {
    let unsubscribe
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`

    if(user){
      fetchBooks()
      unsubscribe = client.subscribe(channel, (response) => {
        const {payload, events} = response
        if(events[0].includes('create')){
          setBooks((prevBooks) => [...prevBooks, payload])
        }
        if(events[0].includes('delete')){
          setBooks((prevBooks) => prevBooks.filter((book) => book.$id !== payload.$id))
        }
      })
    } else{
      setBooks([])
    }
    return () => {
      if(unsubscribe) unsubscribe()
    }
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBooksById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
