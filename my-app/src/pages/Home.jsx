import { HashLink as Link } from 'react-router-hash-link';
import {
  image1,
  image2,
  image3,
  image5,
  image6,
  image7,
} from '../images/index';

function Home() {
  return (
    <article className="container w-full h-[100vh] font-kalam">
      <header>
        <h1 className="text-center text-grey pt-12 pb-6 md:pt-16 md:pb-8 text-2xl sm:text-3xl md:text-4xl font-[600]">
          Food & Smile
        </h1>
        <nav className="flex items-center justify-between w-full max-w-[500px] mx-auto sm:text-lg md:text-2xl mb-12 md:mb-16">
          <Link to="/#home" className="hover:text-light">
            Home
          </Link>
          <Link to="/#menu" className="hover:text-light">
            Menu
          </Link>
          <Link to="/#blog" className="hover:text-light">
            Blog
          </Link>
          <Link to="/#chefs" className="hover:text-light">
            Chefs
          </Link>
          <Link to="/#contact" className="hover:text-light">
            Contact
          </Link>
        </nav>
        <h2 className="text-grey text-2xl sm:text-3xl sm:leading-12 md:text-4xl lg:text-5xl lg:leading-16  md:leading-14 leading-10 max-w-[800px] mx-auto">
          The <span className="text-light">best place</span> to spend a free
          time with couple of best friends with
          <span className="text-light"> delicious</span> dishes in beatifull
          nature park
        </h2>
        <div className="w-full mx-auto my-10 grid grid-cols-6 grid-rows-6 md:h-[800px] drop-shadow-lg md:gap-6 gap-4">
          <div className="w-full h-[150px] sm:h-[250px] md:h-[100%] relative col-span-6 row-span-3 md:col-span-6 md:row-span-3">
            <img
              src={image1}
              alt="image of the dish"
              className="absolute w-[100%] h-[100%] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[250px] md:h-[100%] relative col-span-3 row-span-3 md:col-span-2 md:row-span-3">
            <img
              src={image2}
              alt="image of the dish"
              className="absolute w-[100%] h-[100%] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[250px] md:h-[100%] relative col-span-3 row-span-3 last:md:col-span-4 md:row-span-2">
            <img
              src={image3}
              alt="image of the dish"
              className="absolute w-[100%] h-[100%] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </header>
      <section className="text-grey relative flex flex-col">
        <h3 className="text-xl mb-4 sm:text-2xl lg:text-3xl">
          Something about us...
        </h3>
        <p className="max-w-[600px] mb-10 sm:text-lg lg:text-2xl lg:leading-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac pharetra,
          enim tempor, quis posuere eu fusce. Dictumst a, sit aliquet tincidunt
          mauris. Quam purus sed tortor pretium in etiam egestas. Convallis
          tempor, volutpat pellentesque lorem ut tortor. Bibendum morbi nulla at
          senectus ante. Adipiscing integer non non quis odio. Sed dolor mauris,
          sed turpis hendrerit nunc, mattis viverra.
        </p>
        <h3 className="text-xl mb-4 sm:text-2xl lg:text-3xl self-end">
          What we offer...
        </h3>
        <p className="max-w-[600px] text-right sm:text-lg lg:text-2xl lg:leading-12 mb-20 self-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac pharetra,
          enim tempor, quis posuere eu fusce. Dictumst a, sit aliquet tincidunt
          mauris. Quam purus sed tortor pretium in etiam egestas. Convallis
          tempor, volutpat pellentesque lorem ut tortor. Bibendum morbi nulla at
          senectus ante. Adipiscing integer non non quis odio. Sed dolor mauris,
          sed turpis hendrerit nunc, mattis viverra.
        </p>
      </section>
      <section id="menu">
        <h2 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-12">
          MENU
          <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[60px] h-[120%] -z-10 bg-lightTransparent rounded-lg md:w-[80px] lg:w-[100px]" />
        </h2>
        <nav className="flex items-center justify-between w-full max-w-[450px] mx-auto sm:text-lg md:text-2xl mb-8 md:mb-16">
          <Link to="/#home" className="hover:text-light">
            Normal
          </Link>
          <Link to="/#menu" className="hover:text-light">
            Vegan
          </Link>
          <Link to="/#blog" className="hover:text-light">
            Vegetarian
          </Link>
          <Link to="/#chefs" className="hover:text-light">
            Other
          </Link>
        </nav>
        <div className="text-grey sm:flex">
          <div className="w-full h-[150px] mb-8 drop-shadow-lg relative order-2 sm:h-[300px] sm:ml-5 lg:h-[500px] max-w-[600px]">
            <img
              src={image3}
              className="absolute w-full h-[100%] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-xl mb-6 sm:text-2xl lg:text-3xl leading-8">
              Vegan ipsum dolor sit amet, consectetur adipiscing elit. {''}
              <span className="text-light">
                Urna ornare nibh non at sed posuere elit imperdiet purus.
              </span>
            </h3>
            <p className="mb-4 sm:text-lg lg:text-2xl">Recommended:</p>
            <p className="sm:text-lg lg:text-2xl lg:leading-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              viverra pharetra imperdiet ligula sed.
            </p>
            <button className="border-2 py-2 px-4 rounded-lg my-8 sm:text-lg lg:text-2xl lg:py-3 lg:px-6 hover:bg-grey hover:text-white">
              Check the menu
            </button>
          </div>
        </div>
        <div className="w-full p-3 bg-grey text-white text-center rounded-md mb-20 lg:mb-60 lg:p-5 md:mt-6">
          <p className="sm:text-lg lg:text-2xl">
            “Everything what we do is only with passion”
          </p>
        </div>
      </section>
      <section id="blog">
        <h2 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-12">
          BLOG
          <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[60px] h-[120%] -z-10 bg-lightTransparent rounded-lg md:w-[80px] lg:w-[100px]" />
        </h2>
        <nav className="flex items-center justify-between w-full max-w-[350px] mx-auto sm:text-lg md:text-2xl mb-8 md:mb-16">
          <Link to="/#home" className="hover:text-light">
            All
          </Link>
          <Link to="/#menu" className="hover:text-light">
            Events
          </Link>
          <Link to="/#blog" className="hover:text-light">
            Promotions
          </Link>
        </nav>
        <div>
          <div className="w-full h-[150px] mb-5 rounded-lg relative md:h-[200px] lg:h-[250px]">
            <div className="absolute w-[100%] h-[100%] z-10 bg-cardCover rounded-lg" />
            <img
              src={image5}
              className="absolute w-full h-[100%] object-cover rounded-lg"
              loading="lazy"
              alt="event image"
            />
            <div className="text-white absolute bottom-0 left-4 mb-4 sm:text-lg lg:text-2xl z-10">
              <p>September 25 2022</p>
              <p>type: event</p>
              <button className="text-active underline">
                continue reading
              </button>
            </div>
          </div>
          <div className="w-full h-[150px] mb-5 rounded-lg relative md:h-[200px] lg:h-[250px]">
            <div className="absolute w-[100%] h-[100%] z-10 bg-cardCover rounded-lg" />
            <img
              src={image6}
              className="absolute w-full h-[100%] object-cover rounded-lg"
              loading="lazy"
              alt="event image"
            />
            <div className="text-white absolute bottom-0 left-4 mb-4 sm:text-lg lg:text-2xl z-10">
              <p>September 25 2022</p>
              <p>type: event</p>
              <button className="text-active underline">
                continue reading
              </button>
            </div>
          </div>
          <div className="w-full h-[150px] rounded-lg relative md:h-[200px] lg:h-[250px]">
            <div className="absolute w-[100%] h-[100%] z-10 bg-cardCover rounded-lg" />
            <img
              src={image7}
              className="absolute w-full h-[100%] object-cover rounded-lg"
              loading="lazy"
              alt="event image"
            />
            <div className="text-white absolute bottom-0 left-4 mb-4 sm:text-lg lg:text-2xl z-10">
              <p>September 25 2022</p>
              <p>type: event</p>
              <button className="text-active underline">
                continue reading
              </button>
            </div>
          </div>
        </div>
        <button className="border-2 py-2 px-8 mx-auto block rounded-lg my-8 sm:text-lg lg:text-2xl lg:py-3 lg:px-14 hover:bg-grey hover:text-white mb-20 lg:mb-60">
          See more
        </button>
      </section>
      <section id="chefs">
        <h2 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-12">
          CHEFS
          <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[60px] h-[120%] -z-10 bg-lightTransparent rounded-lg md:w-[80px] lg:w-[100px]" />
        </h2>
        <p className="sm:text-lg lg:text-2xl lg:leading-12 max-w-[800px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tellus nec
          ultricies purus. Sit tortor sodales justo viverra at orci vitae amet
          amet.
        </p>
      </section>
    </article>
  );
}

export default Home;
