interface testProps {
  name: string;
  email: string;
}
export default function test({ name, email }: testProps) {
  return (
    <>
      {name}
      {email}
    </>
  );
}
