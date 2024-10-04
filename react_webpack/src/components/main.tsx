export const MainComponent: React.FC = () => {
  const onClick = () => {
    window.electronAPI.openSubWindow('hello world!');
  };
  return (
    <div>
      <h1>Main Window</h1>
      <button onClick={onClick}>open sub window</button>
    </div>
  );
};
