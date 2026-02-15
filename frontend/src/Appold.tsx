import React from "react";
import Ribbon from "Components/Ribbon";

const App: React.FC = () => {
    const handleAction = (actionId: string) => {
        // Replace with your real command handlers / navigation
        console.log("Ribbon action:", actionId);
        // Example: route changes, open panels, trigger toolbars, etc.
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Ribbon onAction={handleAction} />
            <main className="p-6">
                <h1 className="text-2xl font-bold mb-4">Main content</h1>
                <p className="text-gray-700">Use the ribbon above to trigger actions. Check the browser console for action ids.</p>
            </main>
        </div>
    );
};

export default App;