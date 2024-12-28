const Header2 = ({
  title,
  type = "dark",
}: {
  title: string;
  type?: "light" | "dark";
}) => {
  return (
    <div
      className={`flex gap-1 mb-2 ${
        type === "light" ? "text-slate-50" : "text-slate-900"
      }`}
    >
      <div className="w-4 h-[30px] bg-gradient-to-b from-san-juan-500 to-san-juan-950 rounded-lg"></div>
      <h3 className="text-2xl font-medium">{title}</h3>
    </div>
  );
};

export default Header2;
