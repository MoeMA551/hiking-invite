export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 bg-sky-600">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src={`${import.meta.env.BASE_URL}mountain_range_bg.mp4`} type="video/mp4" />
      </video>

      <div className="absolute inset-0 hidden motion-reduce:block bg-gradient-to-b from-sky-600 via-forest-600 to-bark-700" />
      <div className="absolute inset-0 bg-forest-900/35" />
    </div>
  );
}