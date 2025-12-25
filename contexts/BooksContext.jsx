import { createContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Query, Role, TablesDB } from "appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "694cc7e9001175545be8"
const TABLE_ID = "books"

export const BooksContext = createContext()

export function BooksProvider({ children }){
    const [books, setBooks] = useState([])
    const { user } = useUser()

    async function fetchBooks() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                TABLE_ID,
                [
                    Query.equal("userId", user.$id)
                ]
            )
            setBooks(response.documents)
            console.log(response.documents)
        } catch (error) {
            console.error(error.message)
        }
    }

    async function fetchBookById(id) {
        try {
            
        } catch (error) {
            console.error(error.message)
        }
    }

    async function createBook(data) {
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                TABLE_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            )
        } catch (error) {
            console.error(error.message)
        }
    }

    async function deleteBook(id) {
        try {
            
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        if (user) {
            fetchBooks()
        } else{
            setBooks([])
        }
    }, [user])

    return(
        <BooksContext.Provider
            value={{books, createBook, fetchBookById, deleteBook}}
        >
            {children}
        </BooksContext.Provider>
    )
}