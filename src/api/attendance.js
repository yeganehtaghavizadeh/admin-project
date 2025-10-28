import axios from "axios";

const BASE_URL = "https://eapi.vizitonline.com/manager/employees/attendance";

export const fetchAttendance = async () => {
  const res = await axios.get(`${BASE_URL}/list/`);
  return res.data;
};

export const updateAttendance = async (id, notes) => {
  return axios.patch(`${BASE_URL}/update/${id}/`, { notes, is_manual: true }, {
    headers: { "Content-Type": "application/json" },
  });
};
