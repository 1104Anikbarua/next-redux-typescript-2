import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <>
      <Container>
        <p className="text-center text-3xl font-bold uppercase border-b-2 border-black border-w">
          Todo Page
        </p>
        <TodoContainer />
      </Container>
    </>
  );
};

export default Todo;
