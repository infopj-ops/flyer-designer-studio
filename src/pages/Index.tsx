import { useState } from "react";
import FlyerForm from "@/components/FlyerForm";
import FlyerPreview from "@/components/FlyerPreview";
import { defaultFlyerData, type FlyerData } from "@/types/flyer";

const Index = () => {
  const [data, setData] = useState<FlyerData>(defaultFlyerData);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card px-6 py-4">
        <h1 className="text-xl font-bold text-primary" style={{ fontFamily: "'Georgia', serif" }}>
          Parque Jazmín — Editor de Flyer
        </h1>
      </header>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-6xl mx-auto">
        {/* Form */}
        <aside className="w-full lg:w-[380px] shrink-0">
          <div className="bg-card rounded-lg border p-6 sticky top-6">
            <FlyerForm data={data} onChange={setData} />
          </div>
        </aside>

        {/* Preview */}
        <main className="flex-1 flex items-start justify-center">
          <div className="sticky top-6 w-full">
            <p className="text-sm text-muted-foreground mb-3 text-center">Vista previa</p>
            <FlyerPreview data={data} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
