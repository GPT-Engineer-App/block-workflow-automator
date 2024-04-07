import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import "./App.css";

function App() {
  const [stages, setStages] = useState([
    { id: 1, type: "input", value: "" },
    { id: 2, type: "llm", value: "" },
  ]);

  const addStage = (type) => {
    const newStage = {
      id: stages.length + 1,
      type,
      value: "",
    };
    setStages([...stages, newStage]);
  };

  const updateStage = (id, value) => {
    const updatedStages = stages.map((stage) => (stage.id === id ? { ...stage, value } : stage));
    setStages(updatedStages);
  };

  const runWorkflow = () => {
    // Implement the logic to run the workflow
    console.log("Running workflow with stages:", stages);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Workflow Automation</h1>
      <div className="grid grid-cols-3 gap-4">
        {stages.map((stage) => (
          <Card key={stage.id}>
            <CardHeader>
              <CardTitle>Stage {stage.id}</CardTitle>
            </CardHeader>
            <CardContent>{stage.type === "input" ? <Textarea placeholder="Enter input text" value={stage.value} onChange={(e) => updateStage(stage.id, e.target.value)} /> : <Input placeholder="Enter LLM prompt" value={stage.value} onChange={(e) => updateStage(stage.id, e.target.value)} />}</CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <Select onValueChange={(value) => addStage(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Add Stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="input">Input Text</SelectItem>
            <SelectItem value="llm">LLM Computation</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
        <Button onClick={runWorkflow}>Run Workflow</Button>
      </div>
    </div>
  );
}

export default App;
