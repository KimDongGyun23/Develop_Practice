import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import type { DocumentData } from 'firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

import { db } from '@/firebase/firebase'

const useFetchDocument = (collectionName: string, documentID: string) => {
  const [document, setDocument] = useState<DocumentData | null>(null)

  const getDocument = useCallback(async () => {
    const docRef = doc(db, collectionName, documentID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const obj = {
        id: documentID,
        ...docSnap.data(),
      }

      setDocument(obj)
    } else {
      toast.error('Document not found')
    }
  }, [collectionName, documentID])

  useEffect(() => {
    getDocument()
  }, [getDocument])

  return { document }
}

export default useFetchDocument
