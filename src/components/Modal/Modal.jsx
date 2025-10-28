// import "../../assets/css/Modal.css";
import "../../assets/css/Modal.css";


export default function Modal({ isOpen, onClose, onSubmit, value, setValue }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>افزودن یادداشت</h3>
        <input
          type="text"
          placeholder="یادداشت جدید..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={onSubmit} className="btn-confirm">ثبت</button>
          <button onClick={onClose} className="btn-cancel">لغو</button>
        </div>
      </div>
    </div>
  );
}
