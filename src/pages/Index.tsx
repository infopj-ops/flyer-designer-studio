import { useState, useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlyerForm from "@/components/FlyerForm";
import FlyerPreview from "@/components/FlyerPreview";
import { defaultFlyerData, type FlyerData } from "@/types/flyer";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "543624515818";

const Index = () => {
  const [data, setData] = useState<FlyerData>(defaultFlyerData);
  const flyerRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  const captureFlyer = useCallback(async (): Promise<string | null> => {
    if (!flyerRef.current) return null;
    setExporting(true);
    try {
      const el = flyerRef.current;
      // Temporarily remove the CSS scale so html2canvas captures at full 1200x1200
      const wrapper = el.parentElement;
      const prevTransform = wrapper?.style.transform || "";
      if (wrapper) {
        wrapper.style.transform = "none";
      }
      const canvas = await html2canvas(el, {
        width: 1200,
        height: 1200,
        scale: 1,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      // Restore scale
      if (wrapper) {
        wrapper.style.transform = prevTransform;
      }
      return canvas.toDataURL("image/png");
    } catch {
      toast.error("Error al generar la imagen");
      return null;
    } finally {
      setExporting(false);
    }
  }, []);

  const handleDownload = useCallback(async () => {
    const dataUrl = await captureFlyer();
    if (!dataUrl) return;
    const link = document.createElement("a");
    link.download = `flyer-${data.nombre || "servicio"}.png`;
    link.href = dataUrl;
    link.click();
    toast.success("Imagen descargada");
  }, [captureFlyer, data.nombre]);

  const handleWhatsApp = useCallback(async () => {
    await handleDownload();
    const text = encodeURIComponent(
      `Flyer de servicio - ${data.nombre || "Parque Jazmín"}`
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank"
    );
    toast.info("Se descargó la imagen. Adjuntala en el chat de WhatsApp.");
  }, [handleDownload, data.nombre]);

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
          <div className="bg-card rounded-lg border p-6 sticky top-6 space-y-6">
            <FlyerForm data={data} onChange={setData} />

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                onClick={handleDownload}
                disabled={exporting}
                variant="outline"
                className="flex-1"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar
              </Button>
              <Button
                onClick={handleWhatsApp}
                disabled={exporting}
                className="flex-1"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </aside>

        {/* Preview */}
        <main className="flex-1 flex flex-col items-center overflow-hidden">
          <p className="text-sm text-muted-foreground mb-3 text-center sticky top-6">Vista previa (1200×1200px)</p>
          <div className="sticky top-12 w-full flex justify-center">
            <div style={{ width: 480, height: 480 }}>
              <div style={{ width: 1200, height: 1200, transform: 'scale(0.4)', transformOrigin: 'top left' }}>
                <FlyerPreview ref={flyerRef} data={data} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
