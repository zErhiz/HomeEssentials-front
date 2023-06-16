import logo from "../../../public/images/Logos/logo-2-b.png"
const About = () => {
  return (
    <div className="h-fit xl:h-[110vh] flex items-center justify-center flex-col gap-12 bg-[#EDEBEB]">
      <div className="border-b mt-4 w-[80%] border-[#393939] h-[10%] flex justify-center items-center content-center gap-12">
        <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold font-sans"> About </h1>
        <img className="w-[9rem]" src={logo} alt="homeessentials" />
      </div>
      <div className="w-[90%] xl:h-[80%] flex items-center flex-col-reverse xl:flex-row content-center gap-12">
        <img className="w-[100%] xl:w-[40%] h-[90%] object-cover rounded-xl" src="https://i.ibb.co/86QFKnH/image.png" alt="image" />
        <div className="w-[100%] xl:p-10 font-normal xl:w-[60%] h-[90%] bg-white rounded-xl">
          <p className="text-gray-800 ">At Home Essentials, we are dedicated to enhancing your living space by providing the best home products available. As a leading provider of household items, we strive to offer a wide selection of high-quality products that cater to all your home needs.</p>
          <p className="text-gray-800 ">Our collection of home essentials is carefully curated to combine functionality, style, and affordability. From kitchenware and appliances to furniture and decor, we meticulously select each item to ensure it meets our strict standards of quality and design.</p>
          <p className="text-gray-800 ">What sets Home Essentials apart is our unwavering commitment to customer satisfaction. We understand the importance of creating a comfortable and inviting home environment, and our knowledgeable team is here to assist you every step of the way. Whether you have questions or need personalized recommendations, we are always ready to help.</p>
          <p className="text-gray-800 ">We take pride in delivering excellent customer service and aim to exceed your expectations. With Home Essentials, you can shop with confidence, knowing that you are investing in top-notch products that will enhance your home and make everyday life more convenient.</p>
          <p className="text-gray-800">Thank you for choosing Home Essentials as your trusted destination for home products. We look forward to serving you and helping you turn your house into the home of your dreams.</p>
        </div>
      </div>
    </div>

  )
}

export default About