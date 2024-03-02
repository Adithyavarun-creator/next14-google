import Header from "./components/Header";
import Image from "next/image";
import Search from "./components/Search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo-2015-present.jpg"
          width={300}
          height={100}
          alt="Google logo"
        />
        <Search />
      </div>
    </>
  );
};

export default Home;
