import Layout from "@/components/Layout";

function Home() {
  return (
    <Layout>
      <h3 className="font-semibold text-2xl -mb-8 z-10">Hello, World!</h3>
      <img
        src="https://media.licdn.com/dms/image/D4D03AQGDWLiM1Jc7cQ/profile-displayphoto-shrink_800_800/0/1718251990488?e=1726099200&v=beta&t=c0we_or-SQwj5CtHrlVqyu_HU-dYowHKgWDa8IBVU9M"
        alt="Jean"
        width={300}
        height={300}
      />
    </Layout>
  );
}

export default Home;
