export default function Button(props) {
  const { label } = props;
  return (
    <button
      className="mt-5 px-4 btn btn-success rounded-5 btn-lg shadow-lg"
      {...props}
      style={{
        backgroundColor: "#FFC73C",
        borderColor: "#FFC73C",
        width: "15rem",
      }}
    >
      {label}
    </button>
  );
}
