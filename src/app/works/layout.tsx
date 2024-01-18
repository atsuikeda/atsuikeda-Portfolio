export default function RootLayout(props: {
  children: React.ReactNode;
  Modal: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.Modal}
    </>
  );
}
