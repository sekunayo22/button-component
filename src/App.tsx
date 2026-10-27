import { Global } from "@emotion/react";
import { normalize } from "./styles/base/reset";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Global styles={normalize} />
      <Button type="button" variant="secondary" disabled={false}>
        Click me
      </Button>
    </>
  );
}

export default App;
