import "../../assets/css/AttendanceTable.css";

export default function AttendanceTable({ data, onEdit }) {
  return (
    <table className="attendance-table">
      <thead>
        <tr>
          <th>شناسه</th>
          <th>نام کامل</th>
          <th>نوع عملیات</th>
          <th>زمان</th>
          <th>وضعیت</th>
          <th>یادداشت</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.employee_fullname}</td>
            <td>{item.action_type_display}</td>
            <td>{new Date(item.timestamp).toLocaleString("fa-IR")}</td>
            <td>{item.is_manual_display}</td>
            <td>
              <button onClick={() => onEdit(item)}>ویرایش</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
