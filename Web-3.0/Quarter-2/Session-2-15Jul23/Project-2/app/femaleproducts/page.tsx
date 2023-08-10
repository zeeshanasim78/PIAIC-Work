import { getAllProds } from "@/lib/getAllProds";

export const generateMetadata = () => {
  return {
    title: "Dine Market | Female",
  };
};

export default function Female() {
  const data = getAllProds();
  const femaleProds = data.filter((item) => item.type === "female");
  console.log(femaleProds);
  return (
    <div>
      {femaleProds?.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
