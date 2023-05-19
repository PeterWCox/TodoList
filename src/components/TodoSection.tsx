export interface ITodoSectionProps {
  children: React.ReactNode;
}

export const TodoSection = (props: ITodoSectionProps) => {
  return (
    <section
      style={{
        backgroundColor: "white",
        padding: 20,
        borderRadius: 20,
      }}
    >
      {props.children}
    </section>
  );
};
