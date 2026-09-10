interface StarsProps {
  rating: number;
  size?: number;
}

export default function Stars({ rating, size = 14 }: StarsProps) {
  const full = Math.floor(rating);
  return (
    <span style={{ color: "#A9863B", fontSize: size, letterSpacing: "1px" }}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}
