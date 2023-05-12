export function Testimonial(props) {
  const { quote, source } = props;
  return (
    <div className="space-y-4 flex-col flex items-center p-10 border border-white w-[340px]">
      <p className="">"</p>
      <h2>{quote}</h2>
      <p className="font-bold">{source}</p>
    </div>
  );
}
