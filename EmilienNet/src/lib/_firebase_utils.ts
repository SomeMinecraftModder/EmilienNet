import { doc, getDoc } from "firebase/firestore";
import { db } from "./_firebase";

export async function get_doc_by_id (coll: any, id: any) {
    const snap = await getDoc(doc(db, coll, id))
    if (snap.exists())
      return snap.data()
    else
      return Promise.reject(Error(`No such document: ${coll}.${id}`))
}