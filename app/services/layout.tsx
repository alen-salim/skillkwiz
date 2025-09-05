export default function serviceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-[#90CCEE] to-[#F6F8FC] py-8">
      {children}
    </section>
  );
}
