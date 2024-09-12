import '../Styles/Main.css';

export default function Main({ heading, para }) {
  return (
    <div className="Main">
      <div className="Main-content">
        <h2>{heading}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
}
