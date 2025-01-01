"use client";
import { useCallback, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "@/firebase/firebase";

const useFetchDocuments = (collectionName, arg) => {
  const [documents, setDocuments] = useState([]);

  const getDocuments = useCallback(async () => {
    const q = query(
      collection(db, collectionName),
      where(arg[0], arg[1], arg[2])
    );
    const querySnapshot = await getDocs(q);
    const documentsArray = [];

    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        ...doc.data(),
      };
      documentsArray.push(data);
    });

    setDocuments(documentsArray);
  }, [arg, collectionName]);

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);

  return { documents };
};

export default useFetchDocuments;
