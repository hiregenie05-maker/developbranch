import AnimatedGradientText from "@/components/ui/AnimatedGradientText";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-gray-500">
          Built with{" "}
          <AnimatedGradientText className="font-medium">
            TailorAI
          </AnimatedGradientText>{" "}
          — Land your dream job.
        </p>
      </div>
    </footer>
  );
}
