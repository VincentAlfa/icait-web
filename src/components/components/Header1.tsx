const Header1 = ({
  title,
  type = "dark",
}: {
  title: string;
  type?: "light" | "dark";
}) => {
  return (
    <div
      className={`flex gap-1 mb-6 ${
        type === "light" ? "text-slate-50" : "text-slate-900"
      }`}
    >
      <div className="w-4 h-10 bg-gradient-to-b from-saffron-500 to-saffron-900 rounded-lg"></div>
      <h2 className="text-4xl font-medium">{title}</h2>
    </div>
  );
};

export default Header1;
