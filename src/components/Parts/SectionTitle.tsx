type Props = {
  title: string;
  sub?: string;
}

export default function SectionTitle({title, sub}: Props) {

  return (
    <div>
      <h2 className="mb-2 text-4xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-700">{sub}</p>
    </div>
  );
}
