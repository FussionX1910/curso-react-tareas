import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../main";

export const useFakestoreApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRooms = async () => {
    try {
      const res = await query(collection(db, "rooms"));

      return onSnapshot(res, (querySnapshot) => {
        setData(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (error) {
      setError("Error al cargar los chats");
    } finally {
      setLoading(false);
    }
  };

  const storeNewMessage = async (message) => {
    try {
      setLoading(true);
      const res = await addDoc(collection(db, "messages"), message);
      return res;
    } catch (error) {
      setError("Error al guardar el mensaje");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getRooms, storeNewMessage };
};
