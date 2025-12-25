import { useContext, useState } from "react"
import { BooksContext } from "../contexts/BooksContext";

export function useBooks(){
    const context = useContext(BooksContext)

    if(!context){
        throw new Error("useUser must be used within the Books Provider");
    }

    return context
}