import logo from './logo.svg';
import './App.css';

let obj = [
  {
    name: "Yesh",
    age: 19,
    salary: 25000,
    gender: "male",
  },
  {
    name: "Mili",
    age: 30,
    salary: 10000,
    gender: "female",
  },
  {
    name: "Ronit",
    age: 76,
    salary: 15000,
    gender: "male",
  },
  {
    name: "Helon",
    age: 33,
    salary: 35000,
    gender: "female",
  },
  {
    name: "Sanjey",
    age: 45,
    salary: 50000,
    gender: "male",
  },
  {
    name: "Belen",
    age: 39,
    salary: 29000,
    gender: "female",
  },
  {
    name: "Bold",
    age: 27,
    salary: 100000,
    gender: "male",
  },
  {
    name: "Keval",
    age: 18,
    salary: 5000,
    gender: "male",
  },
  {
    name: "Lila",
    age: 56,
    salary: 25000,
    gender: "female",
  },
  {
    name: "Harsha",
    age: 58,
    salary: 200000,
    gender: "female",
  },
]

function App() {
  return (
    <>
      <center>
        <h1>PR 1 , Circlet</h1>
        {/* // 1 */}

        <table border={1} style={{ textAlign: 'center' }}>
          <tr>
            <th colSpan={2}>
              Exercise : 1, Display all employee List Above 50000 RS.
            </th>
          </tr>
          <tr>
            <th>
              Name
            </th>
            <th>
              Salary
            </th>
          </tr>
          {
            obj.filter(data => data.salary > 50000).map(newdata => (
              <tr>
                <td>{newdata.name}</td>
                <td>{newdata.salary}</td>
              </tr>
            ))
          }
        </table>

        {/* // 2 */}

        <table border={1} style={{ textAlign: 'center' }}>
          <tr>
            <th colSpan={2}>
              Exercise : 2, Display only Female Employee List .
            </th>
          </tr>
          <tr>
            <th>
              Name
            </th>
            <th>
              Gander
            </th>
          </tr>
          {
            obj.filter(gan => gan.gender == "female").map(newgan => (
              <tr>
                <td>{newgan.name}</td>
                <td>{newgan.gender}</td>
              </tr>
            ))
          }
        </table>

         {/* // 3 */}

         <table border={1} style={{ textAlign: 'center' }}>
          <tr>
            <th colSpan={2}>
              Exercise : 3,  Display Employee List whose age is greater then 30 .
            </th>
          </tr>
          <tr>
            <th>
              Name
            </th>
            <th>
              Age
            </th>
          </tr>
          {
            obj.filter(gan => gan.age > 30).map(newgan => (
              <tr>
                <td>{newgan.name}</td>
                <td>{newgan.age}</td>
              </tr>
            ))
          }
        </table>

        {/* // 4 */}

        <table border={1} style={{ textAlign: 'center' }}>
          <tr>
            <th colSpan={3}>
              Exercise : 4, Display Employee List with  Name and salary increase by 10 percent and age should be above 25.
            </th>
          </tr>
          <tr>
            <th>
              Name
            </th>
            <th>
              Age
            </th>
            <th>
            salary increase by 10%
            </th>
          </tr>
          {
            obj.filter(gan => gan.age > 25).map(newgan => (
              <tr>
                <td>{newgan.name}</td>
                <td>{newgan.age}</td>
                <td>{newgan.salary} + {newgan.salary /100 * 10} = {(newgan.salary + (newgan.salary /100 * 10))}</td>
              </tr>
            ))
          }
        </table>

        {/* // 5 */}

        <table border={1} style={{ textAlign: 'center' }}>
          <tr>
            <th colSpan={3}>
              Exercise : 5, Display Employee List Only  Female Name And salary ,age should be  20k to 30K Between .
            </th>
          </tr>
          <tr>
            <th>
              Name
            </th>
            <th>
              Age
            </th>
            <th>
            salary increase by 10%
            </th>
          </tr>
          {
            obj.filter(gan => gan.gender == "female" && gan.salary > 20000 && gan.salary < 30000 ).map(newgan => (
              <tr>
                <td>{newgan.name}</td>
                <td>{newgan.age}</td>
                <td>{newgan.salary}</td>
              </tr>
            ))
          }
        </table>



      </center>
    </>
  );
}

export default App; 