import { useState } from "react";
import { useAttendance } from "../hooks/useAttendance";
import AttendanceTable from "../components/AttendanceTable/AttendanceTable";
import Modal from "../components/Modal/Modal";
import "../assets/css/style.css"


export default function Dashboard() {
  const { data, loading, error, handleUpdate } = useAttendance();
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleEdit = (item) => {
    setSelectedId(item.id);
    setSelectedNote(item.notes || "");
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (selectedId) handleUpdate(selectedId, selectedNote);
    setShowModal(false);
  };

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <header className="header">
        <h1>پنل مدیریت</h1>
        <button className="add-btn">افزودن کارمند +</button>
      </header>

      <section className="card">
        <h2>تاریخچه ورود و خروج کاربران</h2>
        <AttendanceTable data={data} onEdit={handleEdit} />
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        value={selectedNote}
        setValue={setSelectedNote}
      />
    </div>
  );
}
