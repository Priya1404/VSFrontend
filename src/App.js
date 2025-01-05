import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="flex flex-col h-screen font-sans">
      <header className="bg-gray-800 text-white text-center p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Pipeline Builder</h1>
      </header>
      <main className="flex flex-1">
        <aside className="w-60 bg-gray-100 border-r border-gray-300 p-4">
          <PipelineToolbar />
        </aside>
        <section className="flex-1 bg-white p-6">
          <PipelineUI />
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center border-t border-gray-700">
        <SubmitButton />
      </footer>
    </div>
  );
}

export default App;
