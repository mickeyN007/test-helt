export default function TextArea(props) {
  const { label, handleChange, ...textArea } = props;
  return (
    <div className="text-area">
      <label htmlFor="">{label}</label>
      <textarea {...textArea} onChange={handleChange} />
    </div>
  );
}
