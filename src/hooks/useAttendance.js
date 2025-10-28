import { useState, useEffect } from "react";
import { fetchAttendance, updateAttendance } from "../api/attendance";

export const useAttendance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAttendance()
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleUpdate = async (id, notes) => {
    await updateAttendance(id, notes);
    setData(prev =>
      prev.map(item => item.id === id ? { ...item, notes, is_manual_display: notes } : item)
    );
  };

  return { data, loading, error, handleUpdate };
};
