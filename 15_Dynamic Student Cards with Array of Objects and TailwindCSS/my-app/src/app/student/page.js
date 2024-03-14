import { students } from "../assets/student-data";
const Student = () => {
  return (
    <div>
      {students.map((student) => (
        <div className="max-w-3xl mx-auto rounded-lg px-5 my-10 shadow-xl bg-gray-300 py-3">
          <h2>Student Id: {student.id}</h2>
          <h1 className="text-2xl font-bold text-center">
            Name: {student.stdName}
          </h1>
          <div className="flex flex-row justify-between items-center my-5">
            <div>Semester:{student.sem}</div>
            <div>Fees:{student.fee}</div>
          </div>
          <div className="text-center py-5 bg-blue-600 text-gray-50 rounded-lg">
            Branch: {student.branch}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Student;
