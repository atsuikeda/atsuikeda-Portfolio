
type Props = {
  title: string;
  sub?: string;
};

export default function SectionTitle({ title, sub }: Props) {
  return (
    <>
      <h2 className="mb-2 text-3xl">{title}</h2>
      <p>{sub}</p>
    </>
  );
}
