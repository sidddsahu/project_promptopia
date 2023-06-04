import Feed from "@components/Feed"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden"  />
         <span className="orange_gradient text-centre"> AI-Powered Prompts</span> 
      </h1>
      <p className="desc text-center">Promptopia is a open-source AI promoting tool for modern world to dicover, create and share  cresative prompts</p>
      <Feed/>
    </section>
  )
}
export default Home
