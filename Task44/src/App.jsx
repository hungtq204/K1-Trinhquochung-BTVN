import { useState } from 'react';
import './App.css';
import { students } from './dataStudents/dataStudents';

function App() {
  const [student] = useState(students);
  const [searchItem, setsearchItem] = useState('');
  const [avgFilter, setAvgFilter] = useState('');
  const [honorsFilter, setHonorsFilter] = useState('');

  const getAvg = (student) => {
    return ((student.math + student.literature + student.english) / 3).toFixed(
      2
    );
  };
  console.log(student);

  const getHl = (avg) => {
    if (avg >= 8) return 'Giỏi';
    if (avg >= 6.5) return 'Khá';
    if (avg >= 5) return 'Trung bình';
    return 'Yếu';
  };

  
  const filterByAvg = (avg) => {
    if (avgFilter === '') return true;
    if (avgFilter === '>=8') return avg >= 8;
    if (avgFilter === '>=6.5') return avg >= 6.5 && avg < 8;
    if (avgFilter === '>=5') return avg >= 5 && avg < 6.5;
    if (avgFilter === '<5') return avg < 5;
    return true;
  };

  // Hàm lọc học lực
  const filterByHonors = (hl) => {
    if (honorsFilter === '') return true;
    return hl === honorsFilter;
  };

  return (
    <div style={{ fontFamily: 'Arial' }}>
      <h1 style={{ margin: '46px' }}>Danh sách quản lý sinh viên </h1>

      <div className='container my-4'>
        <div className='row align-items-end'>
          <div className='col-md-4 mb-3'>
            <label
              htmlFor='search'
              className='form-label'
              style={{ fontWeight: 'bold' }}
            >
              Tìm kiếm sinh viên
            </label>
            <input
              type='text'
              id='search'
              className='form-control'
              placeholder='Nhập tên...'
              value={searchItem}
              onChange={(e) => setsearchItem(e.target.value)}
            />
          </div>
          <div className='col-md-4 mb-3'>
            <label className='form-label' style={{ fontWeight: 'bold' }}>
              Lọc theo điểm trung bình
            </label>
            <select
              className='form-select'
              value={avgFilter}
              onChange={(e) => setAvgFilter(e.target.value)}
            >
              <option value=''>Tất cả</option>
              <option value='>=8'>8</option>
              <option value='>=6.5'>6.5</option>
              <option value='>=5'>5</option>
              <option value='<5'>Dưới 5</option>
            </select>
          </div>
          <div className='col-md-4 mb-3'>
            <label
              className='form-label'
              style={{ fontWeight: 'bold' }}
            ></label>
            <select
              className='form-select'
              value={honorsFilter}
              onChange={(e) => setHonorsFilter(e.target.value)}
            >
              <option value=''>Tất cả</option>
              <option value='Giỏi'>Giỏi</option>
              <option value='Khá'>Khá</option>
              <option value='Trung bình'>Trung bình</option>
              <option value='Yếu'>Yếu</option>
            </select>
          </div>
        </div>
      </div>
      <table
        className='table table-bordered table-striped'
        style={{ width: '80%', margin: '25px auto' }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Math</th>
            <th>Literature</th>
            <th>English</th>
            <th>Average</th>
            <th>Honors</th>
          </tr>
        </thead>
        <tbody>
          {student
            .filter((item) =>
              item.name.toLowerCase().includes(searchItem.toLowerCase())
            )
            .map((item) => {
              const avg = getAvg(item);
              const avgNum = Number(avg);
              const hl = getHl(avgNum);
              return { ...item, avg, avgNum, hl };
            })
            .filter((item) => filterByAvg(item.avgNum))
            .filter((item) => filterByHonors(item.hl))
            .map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.math}</td>
                <td>{item.literature}</td>
                <td>{item.english}</td>
                <td>{item.avg}</td>
                <td>{item.hl}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
