import { Button } from 'components/Button/Button';
import { Container } from 'components/Container/Container';

function App() {
  return (
    <div className="bg-artboard p-2">
      <Container>
        <Button onClick={() => alert('hello')}>click me</Button>
      </Container>
    </div>
  );
}

export default App;
