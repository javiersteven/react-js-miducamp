//import "./styles.css";
// part2
import Form from "./part2/forms.jsx";
// import Collection from "./part2/collection.jsx";
const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
];
// part1
// import Event from "./part1/components/event.jsx";
// import Hour from "./part1/components/hour.jsx";

// mas desarrollado:
// import Space from "./part1/components/space.jsx";
// import FeedBack from "./part1/exercises/feedback.jsx";

export default function App() {
  return (
    <div className="App">
      <Form notes={notes} />
    </div>
  );
}
