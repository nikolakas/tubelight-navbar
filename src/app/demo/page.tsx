import CelestialInkShader from "@/components/ui/celestial-ink-shader";

export default function DemoOne() {
  return (
    <div className="app-container relative min-h-screen flex items-center justify-center">
      <CelestialInkShader />
      <div className="overlay-content relative z-10 text-center px-6">
        <h1 className="title text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
          Celestial Ink
        </h1>
        <p className="description text-xl text-white/80 drop-shadow">
          An Interactive WebGL Shader
        </p>
      </div>
    </div>
  );
}
