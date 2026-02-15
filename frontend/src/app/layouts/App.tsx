import Ribbon from "../../Components/Ribbon";

export default function App() {
        const handleAction = (actionId: string) => {
            // Replace with your real command handlers / navigation
            console.log("Ribbon action:", actionId);
            // Example: route changes, open panels, trigger toolbars, etc.
        };
  return (
        <div className="flex flex-col h-screen">
            <Ribbon onAction={handleAction} />
     
            <div className="flex items-center justify-center">
                <div className="Text-center">
                    <h1 className="text-4xl font-bold">Hawe App</h1>
                    <h4 className="text-lg mt-2">wellness app</h4>
                </div>
            </div>
        </div>
  
    );

}