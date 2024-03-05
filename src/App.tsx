import { useState } from "react";
import Header from "./components/Header";
import MarkdownCheatSheet from "./components/MarkdownCheatSheet";

const App = () => {
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);

  const handleToggleGuide = () => {
    setShowCheatSheet(!showCheatSheet);
  };

  return (
    <>
      <Header onToggleGuide={handleToggleGuide} />
      {showCheatSheet && <MarkdownCheatSheet />}
    </>
  );
};

export default App;
